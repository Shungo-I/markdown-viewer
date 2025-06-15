import { NavLink, Stack } from '@mantine/core';
import { IconFileText, IconFolder, IconHome, IconSearch, IconSettings } from '@tabler/icons-react';
import { ComponentType, type FC, useState } from 'react';

type SidebarProps = {
  onNavigate?: (path: string) => void;
  activePath?: string;
};

type NavigationItem = {
  label: string;
  icon: ComponentType<{ size?: string | number; stroke?: number }>;
  path: string;
};

const navigationItems: NavigationItem[] = [
  { label: 'ホーム', icon: IconHome, path: '/' },
  { label: 'ファイル', icon: IconFileText, path: '/files' },
  { label: 'フォルダー', icon: IconFolder, path: '/folders' },
  { label: '検索', icon: IconSearch, path: '/search' },
  { label: '設定', icon: IconSettings, path: '/settings' },
];

export const Sidebar: FC<SidebarProps> = ({ onNavigate, activePath }) => {
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
    </Stack>
  );
};
