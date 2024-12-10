import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type ButtonProps = {
  value: string;
  onClick: () => void;
  className?: string;
  icon?: IconDefinition;
  iconClass?: string;
  color?: string;
};
