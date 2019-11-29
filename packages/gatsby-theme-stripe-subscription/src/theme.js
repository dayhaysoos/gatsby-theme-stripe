const theme = {
  space: [0, 4, 8, 1, 32],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    accent: '#609',
    muted: '#f6f6f6f',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  breakpoints: ['40em', '56em', '64em'],
  modes: {
    dark: {
      text: '#fff',
      background: '#000',
      primary: '#0cf',
      secondary: '#09c',
      muted: '#111',
    },
    papaya: {
      // this color mode will fallback to the root color object
      // for values not defined here
      text: '#433',
      background: 'papayawhip',
    },
  },
}

export default theme
