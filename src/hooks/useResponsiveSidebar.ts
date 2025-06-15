import { useState } from 'react';

export const useResponsiveSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const collapse = () => {
    setIsCollapsed(true);
  };

  const expand = () => {
    setIsCollapsed(false);
  };

  return {
    isCollapsed,
    toggle,
    collapse,
    expand,
  };
}; 