import { useEffect, useState } from 'react';

const SIDEBAR_STORAGE_KEY = 'sidebar-collapsed';

export const useSidebarToggle = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // 初期化時にローカルストレージから状態を読み込み
  useEffect(() => {
    const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (stored !== null) {
      setIsCollapsed(JSON.parse(stored));
    }
  }, []);

  // 状態が変更されたらローカルストレージに保存
  useEffect(() => {
    localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const toggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return {
    isCollapsed,
    toggle,
  };
}; 