export const DARK_COLOR = '#1c1c1e';
export const LIGHT_COLOR = '#FFFFFF';

export const bottomTabsTheme = (theme: string | null | undefined) => ({
  backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
});

export const statusBarTheme = (theme: string) => ({
  backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
});

export const topBarTheme = (theme: string) => ({
  title: {
    color: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
  },
  backButton: {
    color: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
  },
  background: {
    color: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
  },
});
