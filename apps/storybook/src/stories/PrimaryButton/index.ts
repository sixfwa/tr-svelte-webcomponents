import "@repo/wb-ui/dist/primarybutton.js";
import { html } from "lit";

export interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
}

export const Button = ({ label, size }: ButtonProps) => html`
  <sv-primarybutton label=${label} size=${size} />
`;
