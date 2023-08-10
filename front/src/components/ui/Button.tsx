import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";

type ButtonProps = {
  classNames: string;
  children: React.ReactNode;
  type: string;
  onPress: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({
  type,
  classNames,
  children,
  onPress,
}) => {
  return (
    <BootstrapButton onClick={onPress} type={type} className={classNames}>
      {children}
    </BootstrapButton>
  );
};

export default CustomButton;
