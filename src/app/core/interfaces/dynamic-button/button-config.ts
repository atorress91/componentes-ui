import { ButtonAction } from "./button-action";

export interface ButtonConfig {
  type: 'button' | 'dropdown';
  label: string;
  cssClass?: string;
  actions?: ButtonAction[];
}
