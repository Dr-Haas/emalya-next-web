
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-emalya-blue hover:bg-emalya-blue/90 text-white 
        py-4 md:py-5 
        text-sm md:text-base 
        rounded-lg 
        shadow-md 
        transition-all 
        duration-300 
        ease-in-out 
        active:scale-[0.98] 
        focus:outline-none 
        focus:ring-2 
        focus:ring-emalya-blue/50"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="flex items-center gap-2">
          <span className="animate-spin h-4 w-4 md:h-5 md:w-5 border-2 border-white border-t-transparent rounded-full"></span>
          <span className="text-xs md:text-sm">Envoi en cours...</span>
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2 w-full">
          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
          <span className="text-xs md:text-sm">Confirmer ma demande de rendez-vous</span>
        </span>
      )}
    </Button>
  );
};

export default SubmitButton;
