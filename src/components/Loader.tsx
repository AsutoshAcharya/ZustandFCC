import { FC } from "react";

export type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "error";
export interface LoaderProps {
  color?: Color;
}

const classes = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

const Loader: FC<LoaderProps> = ({ color = "primary" }) => (
  <div className={"loading loading-spinner text-primary" + classes[color]} />
);

export default Loader;
