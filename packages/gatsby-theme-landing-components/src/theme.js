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
    gray: ['#efefef', '#ddd', '#333', '#111'],
    background: '#fff',
    primary: 'rebeccapurple',
    secondary: '#339966',
    accent: '#ffdf37',
  },
  sizes: {
    default: '100%',
    max: '100%',
  },
  styles: {
    Layout: {
      color: 'gray.2',
      fontFamily: 'body',
      fontSize: 1,
      lineHeight: 'body',
      overflowX: 'hidden',
    },
    Header: {
      color: 'gray.0',
      backgroundColor: 'primary',
      fontWeight: 'bold',
      margin: '0 auto',
      padding: 10,
      width: 'default',
      justifyContent: 'space-between',
    },
    Main: {
      display: 'flex',
      flexDirection: 'column',
      color: 'primary',
      backgroundColor: 'background',
      alignItems: 'center',
    },
    Container: {
      padding: 3,
    },
  },
  hero: {
    img: {
      height: 'auto',
      width: '100%',
    },
  },
  container: {
    main: {
      marginTop: '20px',
      marginBottom: '20px',
      backgroundColor: 'transparent',
    },
    alt: {
      marginTop: '20px',
      marginBottom: '20px',
      backgroundColor: 'primary',
    },
  },
  paper: {
    main: {
      padding: '30px',
      color: 'primary',
    },
    alt: {
      padding: '30px',
      color: 'secondary',
    },
  },
}

export default theme
