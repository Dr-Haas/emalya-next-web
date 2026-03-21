"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, RotateCcw, Sparkles, Gem, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface Question {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    points: { composite: number; ceramic: number };
  }[];
}

const questions: Question[] = [
  {
    id: "alignment",
    question: "Comment décririez-vous l'alignement actuel de vos dents ?",
    options: [
      { value: "aligned", label: "Bien alignées", points: { composite: 1, ceramic: 1 } },
      { value: "slight", label: "Légèrement désalignées", points: { composite: 1, ceramic: 0 } },
      { value: "moderate", label: "Désalignement modéré", points: { composite: 0, ceramic: 0 } },
    ],
  },
  {
    id: "goal",
    question: "Quel est votre objectif principal ?",
    options: [
      { value: "subtle", label: "Embellissement subtil et naturel", points: { composite: 2, ceramic: 0 } },
      { value: "transform", label: "Transformation visible du sourire", points: { composite: 0, ceramic: 2 } },
      { value: "both", label: "Un équilibre entre les deux", points: { composite: 1, ceramic: 1 } },
    ],
  },
  {
    id: "defects",
    question: "Quels défauts souhaitez-vous corriger ?",
    options: [
      { value: "minor", label: "Petits défauts (bords, angles, micro-espaces)", points: { composite: 2, ceramic: 0 } },
      { value: "color", label: "Couleur et luminosité du sourire", points: { composite: 0, ceramic: 2 } },
      { value: "shape", label: "Forme et proportions des dents", points: { composite: 1, ceramic: 2 } },
    ],
  },
  {
    id: "durability",
    question: "Quelle importance accordez-vous à la durabilité ?",
    options: [
      { value: "short", label: "Je préfère une solution réversible", points: { composite: 2, ceramic: 0 } },
      { value: "medium", label: "Une bonne durée de vie me convient", points: { composite: 1, ceramic: 1 } },
      { value: "long", label: "Je veux un résultat très durable", points: { composite: 0, ceramic: 2 } },
    ],
  },
  {
    id: "visibility",
    question: "Comment souhaitez-vous que le résultat soit perçu ?",
    options: [
      { value: "invisible", label: "Invisible - personne ne doit remarquer", points: { composite: 2, ceramic: 0 } },
      { value: "natural", label: "Naturel mais amélioré", points: { composite: 1, ceramic: 1 } },
      { value: "wow", label: "Un vrai \"effet waouh\"", points: { composite: 0, ceramic: 2 } },
    ],
  },
];

const TechniqueQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const calculateResult = () => {
    let compositeScore = 0;
    let ceramicScore = 0;

    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const question = questions.find((q) => q.id === questionId);
      const option = question?.options.find((o) => o.value === answerValue);
      if (option) {
        compositeScore += option.points.composite;
        ceramicScore += option.points.ceramic;
      }
    });

    return { compositeScore, ceramicScore };
  };

  const { compositeScore, ceramicScore } = calculateResult();
  const recommendation = compositeScore > ceramicScore ? "composite" : ceramicScore > compositeScore ? "ceramic" : "both";

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Quiz personnalisé
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quelle technique est faite pour vous ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Répondez à quelques questions pour découvrir la solution la plus adaptée à vos attentes
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Question {currentStep + 1} sur {questions.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <h3 className="text-xl font-semibold mb-6">{currentQuestion.question}</h3>

                  {/* Options */}
                  <RadioGroup
                    value={answers[currentQuestion.id] || ""}
                    onValueChange={handleAnswer}
                    className="space-y-3"
                  >
                    {currentQuestion.options.map((option) => (
                      <motion.div
                        key={option.value}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <Label
                          htmlFor={option.value}
                          className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            answers[currentQuestion.id] === option.value
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50 hover:bg-secondary/50"
                          }`}
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <span className="text-base">{option.label}</span>
                        </Label>
                      </motion.div>
                    ))}
                  </RadioGroup>

                  {/* Navigation */}
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentStep === 0}
                      className="gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Précédent
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!answers[currentQuestion.id]}
                      className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    >
                      {currentStep === questions.length - 1 ? "Voir le résultat" : "Suivant"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 text-center">
                  <div className="mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                        recommendation === "composite"
                          ? "bg-emerald-500/20"
                          : recommendation === "ceramic"
                          ? "bg-primary/20"
                          : "bg-accent/20"
                      }`}
                    >
                      {recommendation === "composite" ? (
                        <Sparkles className="w-10 h-10 text-emerald-500" />
                      ) : recommendation === "ceramic" ? (
                        <Gem className="w-10 h-10 text-primary" />
                      ) : (
                        <CheckCircle2 className="w-10 h-10 text-accent" />
                      )}
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {recommendation === "composite" && "Le Composite Emalya semble idéal pour vous"}
                    {recommendation === "ceramic" && "Les Facettes Céramiques Emalya vous correspondent"}
                    {recommendation === "both" && "Les deux techniques peuvent vous convenir"}
                  </h3>

                  <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                    {recommendation === "composite" &&
                      "Vous recherchez un embellissement subtil et naturel. Le Composite Emalya permet de corriger les petits défauts tout en préservant l'aspect authentique de votre sourire."}
                    {recommendation === "ceramic" &&
                      "Vous souhaitez une transformation durable et lumineuse. Les Facettes Céramiques Emalya offrent un résultat pérenne avec une esthétique haut de gamme."}
                    {recommendation === "both" &&
                      "Votre profil correspond aux deux techniques. Une consultation personnalisée permettra de déterminer la meilleure option selon vos caractéristiques dentaires."}
                  </p>

                  {/* Score display */}
                  <div className="flex justify-center gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-500">{compositeScore}</div>
                      <div className="text-sm text-muted-foreground">Composite Emalya</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{ceramicScore}</div>
                      <div className="text-sm text-muted-foreground">Facettes Céramiques Emalya</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" onClick={handleReset} className="gap-2">
                      <RotateCcw className="w-4 h-4" />
                      Refaire le quiz
                    </Button>
                    <Button asChild className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      <Link href="/rendez-vous">
                        Prendre rendez-vous
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TechniqueQuiz;
