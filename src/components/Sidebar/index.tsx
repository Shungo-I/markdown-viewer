import { NavLink, Stack, Divider } from '@mantine/core';
import { useState, FC } from 'react';
import { 
  IconHome, 
  IconFileText, 
  IconFolder, 
  IconSettings, 
  IconSearch 
} from '@tabler/icons-react';
import { FileTree, FileNode } from './FileTree';

type SidebarProps = {
  onNavigate?: (path: string) => void;
  activePath?: string;
  files?: FileNode[];
  onFileSelect?: (file: FileNode) => void;
};

type NavigationItem = {
  label: string;
  icon: React.ComponentType<any>;
  path: string;
};

const navigationItems: NavigationItem[] = [
  { label: 'ホーム', icon: IconHome, path: '/' },
  { label: 'ファイル', icon: IconFileText, path: '/files' },
  { label: 'フォルダー', icon: IconFolder, path: '/folders' },
  { label: '検索', icon: IconSearch, path: '/search' },
  { label: '設定', icon: IconSettings, path: '/settings' },
];

export const Sidebar: FC<SidebarProps> = ({ onNavigate, activePath, files, onFileSelect }) => {
  const [activeItem, setActiveItem] = useState(activePath || '/');

  const handleItemClick = (path: string) => {
    setActiveItem(path);
    onNavigate?.(path);
  };

  return (
    <Stack gap={0} h="100%">
      {/* ナビゲーションセクション */}
      <Stack gap={0} p="md">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            href={item.path}
            label={item.label}
            leftSection={<item.icon size="1rem" stroke={1.5} />}
            active={activeItem === item.path}
            onClick={(event) => {
              event.preventDefault();
              handleItemClick(item.path);
            }}
            style={{ borderRadius: '8px' }}
          />
        ))}
      </Stack>

      {/* ファイルツリーセクション */}
      {files && files.length > 0 && (
        <>
          <Divider />
          <FileTree files={files} onFileSelect={onFileSelect} />
        </>
      )}
    </Stack>
  );
}; 