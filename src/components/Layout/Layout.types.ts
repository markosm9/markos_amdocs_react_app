import { ButtonProps } from "../../components/Button/Button.types";

export interface LayoutProps {
  title: string;
  buttonProps?: ButtonProps;
  children: React.ReactNode;
}
