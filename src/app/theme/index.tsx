'use client';

import { useMemo } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeOptions, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows } from './custom-shadows';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};
export default function ThemeProvider({ children }: Props) {
  const memoizedValue = useMemo(
    () => ({
      palette: palette('light'),
      typography,
      shadows: shadows('light'),
      customShadows: customShadows('light'),
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  theme.components = overrides(theme) as any;

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};