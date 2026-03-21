"use client";

import React from 'react';
import { Upload } from 'lucide-react';
import { FormLabel } from '@/components/ui/form';
import { toast } from 'sonner';

interface ImageUploaderProps {
  uploadedImages: File[];
  setUploadedImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const ImageUploader = ({ uploadedImages, setUploadedImages }: ImageUploaderProps) => {
  // Handle image uploads
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      
      // Validate file types
      const validFiles = newFiles.filter(file => 
        file.type === 'image/jpeg' || 
        file.type === 'image/png' || 
        file.type === 'image/webp'
      );
      
      if (validFiles.length !== newFiles.length) {
        toast.error('Certains fichiers ne sont pas valides. Utilisez des images JPG, PNG ou WEBP.');
        return;
      }
      
      setUploadedImages(prev => [...prev, ...validFiles]);
      toast.success(`${validFiles.length} image(s) ajoutée(s)`);
    }
  };

  // Remove an uploaded image
  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
    toast.info('Image supprimée');
  };

  return (
    <div className="space-y-4">
      <div>
        <FormLabel htmlFor="images">Photos de vos dents</FormLabel>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="images"
                className="relative cursor-pointer bg-white rounded-md font-medium text-emalya-blue hover:text-emalya-blue/80 focus-within:outline-none"
              >
                <span>Téléchargez des photos</span>
                <input
                  id="images"
                  name="images"
                  type="file"
                  multiple
                  accept="image/jpeg,image/png,image/webp"
                  className="sr-only"
                  onChange={handleImageUpload}
                />
              </label>
              <p className="pl-1">ou glissez-déposez</p>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPG, WEBP jusqu'à 10 Mo
            </p>
          </div>
        </div>
      </div>

      {/* Image preview */}
      {uploadedImages.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium text-sm mb-2">Images téléchargées:</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {uploadedImages.map((file, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Aperçu ${index}`}
                  className="h-24 w-full object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
