import { Flex, HStack, Image, Link } from '@chakra-ui/react';
import { useTranslation } from "react-i18next";
import logoImg from '../assets/logo1.png';
import bubbleImg from '../assets/bubble.png';
import flagENImg from '../assets/flag-en.png';
import flagFRImg from '../assets/flag-fr.png';
 
function Header() {

  const { t, i18n } = useTranslation("home");

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en"); 
  }

    return (
      <Flex justify="space-between">
        <Image src={logoImg} h={10} />
        <HStack spacing={3}>
            <Image src={bubbleImg} h={10} />
            <Link 
                href="mailto: honggzb@gmail.com?subject=Contacting you from your portfolio" 
                fontSize="large" fontWeight="bold">
                   {t("hireme")}
            </Link>
            <Image 
              pl={20} h={8} cursor="pointer"
              src={i18n.language === "en" ? flagENImg : flagFRImg} 
              onClick={switchLanguage} />
        </HStack> 
      </Flex>
    )
  }
  
  export default Header;
