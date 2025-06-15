export type FileNode = {
  id: string;
  name: string;
  type: 'file' | 'folder';
  path: string;
  children?: FileNode[];
  extension?: string;
};

export type SidebarProps = {
  onNavigate?: (path: string) => void;
  activePath?: string;
  files?: FileNode[];
  onFileSelect?: (file: FileNode) => void;
};

export type NavigationItem = {
  label: string;
  icon: React.ComponentType<any>;
  path: string;
}; 