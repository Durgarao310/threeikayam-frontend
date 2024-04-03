import { Control } from "react-hook-form";

export const ForgotPasswordConfig = (control: Control<any, any>) => [
  {
    control: control,
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
];
