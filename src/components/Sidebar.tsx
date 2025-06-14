import { NavLink, Stack } from '@mantine/core';
import { 
  IconHome, 
  IconFileText, 
  IconFolder, 
  IconSettings, 
  IconSearch 
} from '@tabler/icons-react';

interface SidebarProps {
  onNavigate?: (path: string) => void;
}

const navigationItems = [
  { label: 'ホーム', icon: IconHome, path: '/' },
  { label: 'ファイル', icon: IconFileText, path: '/files' },
  { label: 'フォルダー', icon: IconFolder, path: '/folders' },
  { label: '検索', icon: IconSearch, path: '/search' },
  { label: '設定', icon: IconSettings, path: '/settings' },
];

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <Stack gap={0} h="100%" p="md">
      {navigationItems.map((item) => (
        <NavLink
          key={item.path}
          href={item.path}
          label={item.label}
          leftSection={<item.icon size="1rem" stroke={1.5} />}
          onClick={() => onNavigate?.(item.path)}
          style={{ borderRadius: '8px' }}
        />
      ))}
    </Stack>
  );
} 