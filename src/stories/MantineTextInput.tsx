import { TextInput } from '@mantine/core';
import type { TextInputProps } from '@mantine/core';

export interface StoryMantineTextInputProps extends TextInputProps {
  /** Input label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
}

/** Mantine TextInput component wrapper for Storybook */
export const MantineTextInput = ({ ...props }: StoryMantineTextInputProps) => {
  return <TextInput {...props} />;
}; 