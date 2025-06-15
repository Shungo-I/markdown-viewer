import { ActionIcon, NavLink, Stack, Tooltip } from '@mantine/core';
import { IconFileText, IconFolder, IconHome, IconMenu2, IconSearch, IconSettings, IconX } from '@tabler/icons-react';
import { type ComponentType, type FC, useState } from 'react';
import { useSidebarToggle } from '../../hooks/useSidebarToggle';
import styles from './index.module.css';

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
  const { isCollapsed, toggle } = useSidebarToggle();

  const handleItemClick = (path: string) => {
    setActiveItem(path);
    onNavigate?.(path);
  };

  return (
    <Stack gap={0} className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      {/* トグルボタン */}
      <div className={styles.toggleButton}>
        <ActionIcon
          variant="subtle"
          size="lg"
          onClick={toggle}
          aria-label={isCollapsed ? 'サイドバーを展開' : 'サイドバーを最小化'}
        >
          {isCollapsed ? <IconMenu2 size="1.2rem" /> : <IconX size="1.2rem" />}
        </ActionIcon>
      </div>

      {/* ナビゲーションセクション */}
      <Stack gap={0} className={`${styles.navigationSection} ${isCollapsed ? styles.collapsed : ''}`}>
        {navigationItems.map((item) => {
          const navItem = (
            <NavLink
              key={item.path}
              href={item.path}
              label={!isCollapsed ? item.label : undefined}
              leftSection={<item.icon size="1rem" stroke={1.5} />}
              active={activeItem === item.path}
              onClick={(event) => {
                event.preventDefault();
                handleItemClick(item.path);
              }}
              className={`${styles.navItem} ${isCollapsed ? styles.collapsed : ''}`}
              data-active={activeItem === item.path || undefined}
            />
          );

          // 最小化時はTooltipでラベルを表示
          if (isCollapsed) {
            return (
              <Tooltip
                key={item.path}
                label={item.label}
                position="right"
                withArrow
              >
                {navItem}
              </Tooltip>
            );
          }

          return navItem;
        })}
      </Stack>
    </Stack>
  );
};
