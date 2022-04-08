import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme