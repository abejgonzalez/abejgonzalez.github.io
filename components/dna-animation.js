import { Image } from '@chakra-ui/react'
import { DnaContainer } from './dna-container'

const DnaAnimation = () => {
  return (
    <DnaContainer>
      <Image 
        src="/dna.gif" 
        alt="DNA double helix animation"
        width="70%"
        height="70%"
        objectFit="contain"
        loading="lazy"
      />
    </DnaContainer>
  )
}

export default DnaAnimation