import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MantineTextInput } from './MantineTextInput';

const meta = {
  title: 'Example/TextInput',
  component: MantineTextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'unstyled'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: 'boolean',
    },
    withAsterisk: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} satisfies Meta<typeof MantineTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    label: 'Your name',
    placeholder: 'Enter your name',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Your name',
    placeholder: 'Enter your name',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Your name',
    description: 'Please enter your full name',
    placeholder: 'Enter your name',
  },
};

export const Required: Story = {
  args: {
    label: 'Your name',
    placeholder: 'Enter your name',
    withAsterisk: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Your name',
    placeholder: 'Enter your name',
    error: 'Name is required',
  },
};

// Sizes
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    label: 'Your name',
    placeholder: 'Enter your name',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Your name',
    placeholder: 'Enter your name',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Your name',
    placeholder: 'Enter your name',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Your name',
    placeholder: 'Enter your name',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    label: 'Your name',
    placeholder: 'Enter your name',
  },
};

// States
export const Disabled: Story = {
  args: {
    label: 'Your name',
    placeholder: 'Enter your name',
    disabled: true,
  },
}; 