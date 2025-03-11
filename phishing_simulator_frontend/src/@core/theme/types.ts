declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      dark: string
      yellow: string
      main: string
      light: string
      bodyBg: string
      trackBg: string
      avatarBg: string
      tooltipBg: string
      surfaceColorBg: string
      tertiaryColor: string
      darkPaperBg: string
      lightPaperBg: string
      tableHeaderBg: string
      collapseTogglerBg: string
    }
  }
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    tablet: true;
    md: true;
    lg: true;
    xl: true;
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string
      main?: string
      light?: string
      bodyBg?: string
      trackBg?: string
      avatarBg?: string
      tooltipBg: string
      darkPaperBg?: string
      lightPaperBg?: string
      tableHeaderBg?: string
      collapseTogglerBg?: string
    }
  }
}

export {}
