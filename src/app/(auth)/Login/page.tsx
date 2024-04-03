"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormGenerator } from "@/components/forms/FormGenerator";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { LoginConfig } from "./formConfig";
import { loginSchema } from "@/validation/register";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 h-screen w-full">
      <div className="relative w-full h-full lg:block md:block hidden">
        <Image
          src="/auth/login.jpg"
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center items-center h-full w-full">
        <div className="p-4 text-red-900 max-w-md mx-auto shadow-md rounded-lg w-full">
          <p className="text-center text-xl">Login to your account</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormGenerator configForm={LoginConfig(form.control)} />
              <Button type="submit" size="full">
                Submit
              </Button>
            </form>
          </Form>
          <div className="py-4">
            <p className="text-center">
              <Link href="/forgot-password" className="text-primary underline">
                Forgot password?
              </Link>
            </p>
          </div>
          <div className="py-4">
            <p className="text-center">
              {`Don't have an account? `}
              <Link href="/register" className="text-primary underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
