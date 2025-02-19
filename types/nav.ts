export interface NavItem {
  title: string;
  href: string;
  children?: readonly { title: string; href: string; }[];
} 