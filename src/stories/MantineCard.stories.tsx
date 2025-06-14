import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MantineCard } from './MantineCard';
import { Image } from '@mantine/core';

const meta = {
  title: 'Example/Card',
  component: MantineCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shadow: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    padding: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    withBorder: {
      control: 'boolean',
    },
    showButton: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof MantineCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    title: 'Default Card',
    content: 'This is a default card with shadow and border. It demonstrates the basic card structure.',
  },
};

export const WithoutBorder: Story = {
  args: {
    title: 'Card without Border',
    content: 'This card has no border, creating a cleaner look.',
    withBorder: false,
  },
};

export const WithoutButton: Story = {
  args: {
    title: 'Card without Button',
    content: 'This card does not include a button at the bottom.',
    showButton: false,
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Custom Card',
    content: 'This card has custom title and content. You can customize these properties to match your needs.',
    buttonText: 'Learn More',
  },
};

// Shadow variants
export const SmallShadow: Story = {
  args: {
    title: 'Small Shadow Card',
    content: 'This card has a small shadow effect.',
    shadow: 'sm',
  },
};

export const LargeShadow: Story = {
  args: {
    title: 'Large Shadow Card',
    content: 'This card has a large shadow effect for more prominence.',
    shadow: 'lg',
  },
};

// Padding variants
export const SmallPadding: Story = {
  args: {
    title: 'Small Padding Card',
    content: 'This card has small padding for a more compact layout.',
    padding: 'sm',
  },
};

export const LargePadding: Story = {
  args: {
    title: 'Large Padding Card',
    content: 'This card has large padding for a more spacious layout.',
    padding: 'lg',
  },
};

// With Image
export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    content: 'This card includes an image section at the top.',
    children: (
      <Image
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        height={160}
        alt="Sample image"
      />
    ),
  },
}; 