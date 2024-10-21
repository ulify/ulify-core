interface IPlugin {
  id: number;
  // 'system' | 'plugin-prod' | 'plugin-dev'
  type: string;
  name: string;
  main?: string;
  logo: string;
  description?: string;
  separation?: boolean;
  single?: boolean;
  uninstalled?: boolean;
  version?: string;
  platform?: string;
}
