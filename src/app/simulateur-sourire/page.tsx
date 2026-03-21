"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Camera, Upload, RotateCcw, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export default function SimulateurSourirePage() {
  const [step, setStep] = useState<'capture' | 'style' | 'processing' | 'result'>('capture');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 960 } },
        audio: false,
      });
      streamRef.current = stream;
      setIsCameraActive(true);
    } catch (err) {
      toast.error("Impossible d'accéder à la caméra. Vérifiez les permissions.");
      console.error('Camera error:', err);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  useEffect(() => {
    if (!isCameraActive || !videoRef.current || !streamRef.current) return;
    const video = videoRef.current;
    video.srcObject = streamRef.current;
    const startPlayback = async () => {
      try { await video.play(); } catch (error) { console.error('Video play error:', error); }
    };
    video.onloadedmetadata = () => { void startPlayback(); };
    void startPlayback();
    return () => { video.onloadedmetadata = null; };
  }, [isCameraActive]);

  useEffect(() => {
    if (step === 'processing' && capturedImage) { processImage(); }
  }, [step]);

  useEffect(() => { return () => stopCamera(); }, []);

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video.videoWidth === 0 || video.videoHeight === 0) {
      toast.error("La caméra n'est pas encore prête. Réessayez.");
      return;
    }
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    if (!dataUrl || dataUrl === 'data:,' || dataUrl.length < 100) {
      toast.error("Erreur lors de la capture. Réessayez.");
      return;
    }
    setCapturedImage(dataUrl);
    stopCamera();
    setStep('processing');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('Veuillez sélectionner une image valide.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setCapturedImage(ev.target?.result as string);
      setStep('processing');
    };
    reader.readAsDataURL(file);
  };

  const processImage = async () => {
    if (!capturedImage || capturedImage === 'data:,' || capturedImage.length < 100) {
      toast.error("Image invalide. Veuillez reprendre une photo.");
      setStep('capture');
      return;
    }
    setStep('processing');
    try {
      const { data, error } = await supabase.functions.invoke('simulate-smile', {
        body: { imageBase64: capturedImage }
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResultImage(data.editedImage);
      setStep('result');
    } catch (err) {
      console.error('Simulation error:', err);
      toast.error("Erreur lors de la simulation. Veuillez réessayer.");
      setStep('capture');
    }
  };

  const reset = () => {
    setCapturedImage(null);
    setResultImage(null);
    setSliderPosition(50);
    setStep('capture');
  };

  const downloadResult = () => {
    if (!resultImage) return;
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = 'emalya-smile-simulation.png';
    link.click();
  };

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-emalya-cream min-h-screen">
        <div className="container max-w-3xl">
          <h1 className="text-center text-emalya-blue mb-4">Simulateur de Sourire</h1>
          <p className="text-center text-emalya-gray mb-10 max-w-xl mx-auto">
            Découvrez votre futur sourire grâce à l&apos;intelligence artificielle. Prenez une photo ou importez-en une, et visualisez le résultat.
          </p>

          {step === 'capture' && (
            <div className="space-y-6">
              {isCameraActive ? (
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black">
                  <video ref={videoRef} autoPlay playsInline muted className="relative z-[1] w-full aspect-[4/3] object-cover scale-x-[-1] block" />
                  <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
                    <div className="w-56 h-72 md:w-72 md:h-96 border-[3px] border-dashed border-emalya-pink/70 rounded-[50%] flex flex-col items-center justify-end pb-8">
                      <span className="bg-emalya-blue/80 text-primary-foreground text-xs px-3 py-1 rounded-full backdrop-blur-sm">Centrez votre visage</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center z-[3]">
                    <Button onClick={capturePhoto} size="lg" className="bg-emalya-blue hover:bg-emalya-blue/90 text-primary-foreground rounded-full w-16 h-16 p-0 shadow-lg">
                      <Camera className="w-7 h-7" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-6">
                  <div className="w-full aspect-[4/3] rounded-2xl bg-muted flex flex-col items-center justify-center gap-4 border-2 border-dashed border-emalya-blue/20">
                    <Camera className="w-16 h-16 text-emalya-blue/40" />
                    <p className="text-muted-foreground text-sm">Prenez une photo ou importez une image</p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <Button onClick={startCamera} className="flex-1 bg-emalya-blue hover:bg-emalya-blue/90 text-primary-foreground">
                      <Camera className="w-4 h-4 mr-2" /> Prendre une photo
                    </Button>
                    <label className="flex-1">
                      <Button asChild variant="outline" className="w-full border-emalya-blue text-emalya-blue hover:bg-emalya-blue hover:text-primary-foreground">
                        <span><Upload className="w-4 h-4 mr-2" /> Importer</span>
                      </Button>
                      <input type="file" accept="image/*" className="sr-only" onChange={handleFileUpload} />
                    </label>
                  </div>
                </div>
              )}
              <canvas ref={canvasRef} className="hidden" />
            </div>
          )}

          {step === 'processing' && (
            <div className="flex flex-col items-center justify-center py-20 gap-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-emalya-blue/20 border-t-emalya-blue animate-spin" />
                <Sparkles className="w-8 h-8 text-emalya-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-center">
                <p className="text-emalya-blue font-semibold text-lg">Simulation en cours...</p>
                <p className="text-muted-foreground text-sm mt-2">Notre IA travaille sur votre futur sourire</p>
              </div>
            </div>
          )}

          {step === 'result' && capturedImage && resultImage && (
            <div className="space-y-8">
              <div
                ref={containerRef}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize shadow-xl select-none"
                onMouseDown={() => { isDragging.current = true; }}
                onMouseUp={() => { isDragging.current = false; }}
                onMouseLeave={() => { isDragging.current = false; }}
                onMouseMove={(e) => { if (isDragging.current) handleMove(e.clientX); }}
                onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                onClick={(e) => handleMove(e.clientX)}
              >
                <img src={resultImage} alt="Après simulation" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
                  <img src={capturedImage} alt="Avant simulation" className="absolute inset-0 w-full h-full object-cover" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', maxWidth: 'none' }} draggable={false} />
                </div>
                <div className="absolute top-0 bottom-0 w-1 bg-background shadow-lg z-10" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-emalya-blue rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      <svg className="w-4 h-4 text-emalya-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm text-background px-3 py-1 rounded-full text-sm font-medium z-20">Avant</div>
                <div className="absolute bottom-4 right-4 bg-emalya-blue/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium z-20">Après</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={reset} variant="outline" className="border-emalya-blue text-emalya-blue">
                  <RotateCcw className="w-4 h-4 mr-2" /> Recommencer
                </Button>
                <Button onClick={downloadResult} variant="outline" className="border-emalya-blue text-emalya-blue">
                  <Download className="w-4 h-4 mr-2" /> Télécharger
                </Button>
                <Button asChild className="flex-1 bg-emalya-blue hover:bg-emalya-blue/90 text-primary-foreground">
                  <Link href="/rendez-vous">Prendre rendez-vous</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
