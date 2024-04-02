import { Control } from "react-hook-form";

export const registerConfig = (control: Control<any, any>) => [
  {
    control: control,
    id: "fullName",
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    control: control,
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    control: control,
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
];
