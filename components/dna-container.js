import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'

export const DnaContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="dna-animation"
    m="auto"
    mt={['-10px', '-20px', '-30px']}
    mb={['-10px', '-20px', '-30px']}
    w={[200, 280, 360]}
    h={[200, 280, 360]}
    position="relative"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    {children}
  </Box>
))

DnaContainer.displayName = 'DnaContainer'

export default DnaContainer