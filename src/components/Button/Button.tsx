import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps } from "./Button.types";

//This is just a reference of a reusable button component, could add more props like, color, size, and more
const Button = ({
  value,
  onClick,
  className,
  icon,
  iconClass,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {icon && <FontAwesomeIcon icon={icon} className={iconClass} />}
      {value}
    </button>
  );
};

export default Button;
