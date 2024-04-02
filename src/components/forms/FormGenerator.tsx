import React from "react";
import { InputController } from "../controllers/InputController";

interface FormGeneratorProps {
  configForm: any[];
}

export const FormGenerator = (props: FormGeneratorProps) => {
  const { configForm } = props;
  return (
    <React.Fragment>
      {configForm.map((config: any) => {
        const { name } = config;
        return <InputController key={name} {...config} />;
      })}
    </React.Fragment>
  );
};
