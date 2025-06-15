import { MantineProvider } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';
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
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8f9fa' }}>
          <Story />
          <div style={{ 
            flex: 1, 
            padding: '2rem', 
            backgroundColor: 'white',
            margin: '1rem',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            color: '#666'
          }}>
            メインコンテンツエリア
            <br />
            サイドバーの開閉ボタンをクリックして動作を確認してください
          </div>
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

export const WithActiveItem: Story = {
  args: {
    activePath: '/files',
  },
};
