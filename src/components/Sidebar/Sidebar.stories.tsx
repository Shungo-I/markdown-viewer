import type { Meta, StoryObj } from '@storybook/react';
import { MantineProvider } from '@mantine/core';
import { action } from '@storybook/addon-actions';
import { Sidebar } from './index';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MantineProvider>
        <div style={{ width: '300px', height: '100vh', backgroundColor: '#f8f9fa' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  argTypes: {
    onNavigate: { action: 'navigated' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onNavigate: action('navigate'),
  },
};

export const WithActivePath: Story = {
  args: {
    onNavigate: action('navigate'),
    activePath: '/files',
  },
};

export const WithSettingsActive: Story = {
  args: {
    onNavigate: action('navigate'),
    activePath: '/settings',
  },
}; 