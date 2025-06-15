import type { Meta, StoryObj } from '@storybook/react';
import { MantineProvider } from '@mantine/core';
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
  args: {
    onNavigate: (path: string) => console.log('Navigate to:', path),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithActivePath: Story = {
  args: {
    activePath: '/files',
  },
};

export const WithSettingsActive: Story = {
  args: {
    activePath: '/settings',
  },
}; 