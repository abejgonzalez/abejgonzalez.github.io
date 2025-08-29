import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center">
      <Box opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Abraham Gonzalez. All Rights Reserved.
      </Box>
      <Box opacity={0.3} fontSize="xs" mt={1}>
        Based on design by{' '}
        <Link
          href="https://www.craftz.dog/"
          target="_blank"
          textDecoration="underline"
          _hover={{ opacity: 0.6 }}
        >
          Takuya Matsuyama
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
