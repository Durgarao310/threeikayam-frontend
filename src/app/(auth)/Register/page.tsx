"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import registerSchema from "@/validation/register";
import { FormGenerator } from "@/components/forms/FormGenerator";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { registerConfig } from "./formConfig";

export default function Register() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="p-4 text-red-900 max-w-md mx-auto w-full shadow-md rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormGenerator configForm={registerConfig(form.control)} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
