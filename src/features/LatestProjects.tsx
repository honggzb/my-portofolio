import { useState } from 'react';
import { FAKE_PROJECTS } from './fake-projects.constant';
import { Flex, Heading, Wrap, WrapItem, Box, Text } from '@chakra-ui/react';
import ImageSlider from '../components/ImageSlider';
import Badge from "../components/Badge";

function LatestProjects() {

    const [projects, setProjects] = useState(FAKE_PROJECTS);

    const renderProject = (project) => {
        return (<WrapItem flexDir={"column"} key={project.id}>
            <ImageSlider imgList={project.images} />
            <Heading size="md" color="secondary">
                <Box display={"inline-block"} bg="primary.dark" w={25} h={1} mr={3} verticalAlign="middle" />
                {project.title}
            </Heading>
            <Text>{project.description}</Text>
            <Wrap mt={2} maxW={400}>
              {project.technologies.map((skill) => (
                  <WrapItem key={skill}>
                      <Badge bg={skill}>{skill}</Badge>
                  </WrapItem>
              ))}
          </Wrap>
        </WrapItem>)
    }

    return (
      <Flex direction={"column"} w="100%">
        <Heading>Latest Projects </Heading>
        <Wrap mt={10} spacing={16}>
            {projects?.map(renderProject)}
        </Wrap>
      </Flex>
    )
  }
  
  export default LatestProjects;
