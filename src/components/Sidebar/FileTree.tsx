import { Box, Text, Tree, TreeNodeData } from '@mantine/core';
import { IconFile, IconFolder, IconMarkdown } from '@tabler/icons-react';
import { FC } from 'react';
import { FileNode } from './types';

type FileTreeProps = {
  files: FileNode[];
  onFileSelect?: (file: FileNode) => void;
};

export const FileTree: FC<FileTreeProps> = ({ files, onFileSelect }) => {
  const convertToTreeData = (nodes: FileNode[]): TreeNodeData[] => {
    return nodes.map((node) => ({
      value: node.id,
      label: (
        <Box 
          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          onClick={() => node.type === 'file' && onFileSelect?.(node)}
        >
          {node.type === 'folder' ? (
            <IconFolder size={16} />
          ) : node.extension === 'md' ? (
            <IconMarkdown size={16} />
          ) : (
            <IconFile size={16} />
          )}
          <Text size="sm">{node.name}</Text>
        </Box>
      ),
      children: node.children ? convertToTreeData(node.children) : undefined,
    }));
  };

  const treeData = convertToTreeData(files);

  return (
    <Box p="sm">
      <Text size="sm" fw={600} mb="xs" c="dimmed">
        ファイル
      </Text>
      <Tree data={treeData} />
    </Box>
  );
}; 