import { Button } from '@mantine/core';
import type { ButtonProps } from '@mantine/core';

export interface StoryMantineButtonProps extends ButtonProps {
  /** Button contents */
  children: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
}

/** Mantine Button component wrapper for Storybook */
export const MantineButton = ({ children, ...props }: StoryMantineButtonProps) => {
  return <Button {...props}>{children}</Button>;
};
