import type { Meta, StoryObj } from '@storybook/react';
import { MantineProvider } from '@mantine/core';
import { Sidebar } from './index';
import { FileNode } from './types';

// サンプルファイルデータ
const sampleFiles: FileNode[] = [
  {
    id: 'root',
    name: 'プロジェクト',
    type: 'folder',
    path: '/',
    children: [
      {
        id: 'docs',
        name: 'docs',
        type: 'folder',
        path: '/docs',
        children: [
          {
            id: 'readme',
            name: 'README.md',
            type: 'file',
            path: '/docs/README.md',
            extension: 'md',
          },
          {
            id: 'api',
            name: 'API.md',
            type: 'file',
            path: '/docs/API.md',
            extension: 'md',
          },
        ],
      },
      {
        id: 'src',
        name: 'src',
        type: 'folder',
        path: '/src',
        children: [
          {
            id: 'index',
            name: 'index.ts',
            type: 'file',
            path: '/src/index.ts',
            extension: 'ts',
          },
        ],
      },
      {
        id: 'guide',
        name: 'guide.md',
        type: 'file',
        path: '/guide.md',
        extension: 'md',
      },
    ],
  },
];

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
    onFileSelect: (file: FileNode) => console.log('File selected:', file),
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

export const WithFileTree: Story = {
  args: {
    files: sampleFiles,
  },
};

export const WithFileTreeAndActivePath: Story = {
  args: {
    activePath: '/settings',
    files: sampleFiles,
  },
}; 