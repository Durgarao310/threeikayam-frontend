import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Control } from "react-hook-form";

export const InputController = ({
  control,
  name,
  label,
  disabled,
  helperText,
  type,
  required,
  placeholder,
}: {
  control: Control;
  label: string;
  disabled?: boolean;
  name: string;
  helperText: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) => {
  return (
    <React.Fragment>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} type={type} {...field} />
            </FormControl>
            <FormDescription>{helperText}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </React.Fragment>
  );
};
