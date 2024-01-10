import { HStack, Link, Icon } from "@chakra-ui/react"
import { BsLinkedin, BsTwitterX, BsGithub} from "react-icons/bs";

function Footer() {

    return (
      <HStack justify="center" h={130} mt={10} bg="secondary">
        <Link href="https://www.linkedin.com/in/joannaq/" isExternal><Icon as={BsLinkedin} w={8} h={8} color="#03A9F4" /></Link>
        <Link href="https://twitter.com/" isExternal><Icon as={BsTwitterX} w={8} h={8} color="#0D73C6" bg="white" /></Link>
        <Link href="https://github.com/honggzb/" isExternal><Icon as={BsGithub} w={8} h={8} color="white" /></Link>
      </HStack>
    )
  }
  
  export default Footer