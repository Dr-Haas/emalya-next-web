
import React from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Control } from 'react-hook-form';
import { FormData } from './PersonalInfoFields';

interface TermsCheckboxProps {
  control: Control<FormData>;
}

const TermsCheckbox = ({ control }: TermsCheckboxProps) => {
  return (
    <div className="pt-2">
      <FormField
        control={control}
        name="acceptTerms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                J'accepte la politique de confidentialité et je consens au traitement de mes
                données personnelles à des fins de consultation.
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default TermsCheckbox;
