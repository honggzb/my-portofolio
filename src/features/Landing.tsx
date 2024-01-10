import { Flex, Heading, Text, Box, Image, Wrap, WrapItem } from "@chakra-ui/react"
import { useTranslation } from "react-i18next";
import humanImg from '../assets/programmer.jpeg';
import Badge from "../components/Badge";
import TechList from "./TechList";

const SKILLS = [
    { label: "Angular" },
    { label: "Vue" },
    { label: "React" },
    { label: "HTML5" },
    { label: "CSS3" },
    { label: "Javascript" },
    { label: "Typescript" },
    { label: "NodeJS" },

  ];

function Landing() {

    const { t } = useTranslation("home");

    const badgeList = (
        <Wrap mt={14} maxW={600}>
            {SKILLS.map(skill => (
                <WrapItem key={skill.label}>
                    <Badge bg={skill.label}>{skill.label}</Badge>
                </WrapItem>
            ))}
        </Wrap>
    );

    const leftSection = (<>
        <Box>
            <Heading 
                fontSize={{base: "2xl", md: "4xl", xl: "6xl"}} 
                color="secondary"
                whiteSpace="pre-line">
                    {t("greetings")}
                    <Text as="span" color="primary.dark">.</Text>
            </Heading>
            <Text color="secondary" fontSize={"x-large"}>I am <Text as="span" fontWeight="bold">seasoned Front End Developer</Text> <br/>Located in Toronto/Canada</Text>
            {badgeList}
        </Box>
    </>);

    const badgeExperience = <Badge bg="primary.light" borderRadius={7} p={3} textAlign="center">
        <Text fontSize="x-large">{new Date().getFullYear() - 2009}</Text>
        <Text>years of experience</Text>
    </Badge>

    const rightSection = (
        <Box mt={{base: 20, md: 0}}>
            <Flex justify="flex-end">{badgeExperience}</Flex>
            <Image src={humanImg} w={400} h={500} />
        </Box>
    );

    return (
      <Flex 
        direction={{base: "column", md: "row"}} 
        justify="space-evenly" 
        mt={{base: 50, md: 150}}>
            {leftSection}
            {rightSection}
      </Flex>
    )
  }
  
  export default Landing