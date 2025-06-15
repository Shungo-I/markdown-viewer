import { useEffect } from 'react';
import { useSidebarToggle } from './useSidebarToggle';

const MOBILE_BREAKPOINT = 768; // モバイル端末の判定基準（px）

export const useResponsiveSidebar = () => {
  const { isCollapsed, toggle } = useSidebarToggle();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      
      // モバイル画面で展開されている場合は自動で最小化
      if (isMobile && !isCollapsed) {
        toggle();
      }
    };

    // 初期読み込み時にチェック
    handleResize();

    // リサイズイベントリスナーを追加
    window.addEventListener('resize', handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isCollapsed, toggle]);

  return {
    isCollapsed,
    toggle,
    isMobile: window.innerWidth < MOBILE_BREAKPOINT,
  };
}; 