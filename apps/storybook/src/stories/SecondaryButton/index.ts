import "@repo/wb-ui/dist/secondarybutton.js";
import { html } from "lit";

export interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
}

export const Button = ({ label, size }: ButtonProps) => html`
  <sv-secondarybutton label=${label} size=${size}></sv-secondarybutton>
`;
