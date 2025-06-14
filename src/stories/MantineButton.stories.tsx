import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { MantineButton } from './MantineButton';

const meta = {
  title: 'Example/Button',
  component: MantineButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'light', 'outline', 'subtle', 'transparent', 'gradient'],
    },
    size: {
      control: 'select',
      options: ['compact-xs', 'compact-sm', 'compact-md', 'compact-lg', 'compact-xl', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['blue', 'red', 'green', 'yellow', 'orange', 'pink', 'purple', 'indigo', 'cyan', 'teal', 'lime', 'gray'],
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof MantineButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: 'Button',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: 'Button',
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    gradient: { from: 'blue', to: 'cyan', deg: 90 },
    children: 'Button',
  },
};

// Sizes
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Button',
  },
};

// Colors
export const Red: Story = {
  args: {
    color: 'red',
    children: 'Button',
  },
};

export const Green: Story = {
  args: {
    color: 'green',
    children: 'Button',
  },
};

export const Purple: Story = {
  args: {
    color: 'purple',
    children: 'Button',
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Button',
  },
  parameters: {
    layout: 'padded',
  },
};

// Compact variants
export const CompactSmall: Story = {
  args: {
    size: 'compact-sm',
    children: 'Button',
  },
};

export const CompactMedium: Story = {
  args: {
    size: 'compact-md',
    children: 'Button',
  },
};

export const CompactLarge: Story = {
  args: {
    size: 'compact-lg',
    children: 'Button',
  },
}; 