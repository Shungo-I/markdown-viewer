export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  path: string;
  children?: FileNode[];
  extension?: string;
}

export interface SidebarProps {
  onNavigate?: (path: string) => void;
  activePath?: string;
  files?: FileNode[];
  onFileSelect?: (file: FileNode) => void;
}

export interface NavigationItem {
  label: string;
  icon: React.ComponentType<any>;
  path: string;
} 