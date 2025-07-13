import { StagewiseToolbar } from '@stagewise/toolbar-react';

const stagewiseConfig = {
  plugins: [],
  rootDir: './src',
  include: ['**/*.{ts,tsx}'],
  exclude: ['**/node_modules/**'],
  enableOverlay: false
};

export function StagewiseToolbarWrapper() {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return <StagewiseToolbar config={stagewiseConfig} />;
}