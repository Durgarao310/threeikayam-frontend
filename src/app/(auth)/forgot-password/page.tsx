"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormGenerator } from "@/components/forms/FormGenerator";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ForgotPasswordConfig } from "./formConfig";
import { forgotPasswordSchema } from "@/validation/register";

export default function Register() {
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="p-4 text-red-900 max-w-md mx-auto w-full shadow-md rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormGenerator configForm={ForgotPasswordConfig(form.control)} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
