import { ReactTypicalProps } from "react-typical";

declare module "react-typical" {
  export interface ReactTypicalProps {
    steps: Array<string | number>;
    wrapper?: string;
    loop?: number;
    className?: string; // Adicionando a propriedade className
  }
}
