import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Box} from '@chakra-ui/react';
import { useRef, useState } from 'react';

function ImageSlider({imgList}) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderModalRef = useRef();

    const openImg = (i) => {
        setCurrentIndex(i);
        onOpen();
      };

    return (
        <>
        <Box w={350} boxShadow="xl">
            <Slide 
                autoplay={false} 
                arrows={imgList.length > 1}
                onChange={(_, to) => {setCurrentIndex(to)}}>
                {imgList.map((img, i) => {
                    return (
                        <Box boxShadow="xl" 
                             borderRadius="xl" 
                             key={img} 
                             onClick={() => openImg(i)}
                             style={{ backgroundSize: "cover",
                                       height: 230,
                                       width: 350,
                                       backgroundImage: `url(${img})`,
                              }}
                        />)
                    })
                }
            </Slide>   
        </Box>
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} bg="transparent">
            <ModalOverlay />
            <ModalContent
                boxShadow={"none"}
                bg="transparent"
                height={{ base: 90, md: 750 }}
                minW={{ base: 200, md: 1000 }}>
                <ModalCloseButton 
                    backgroundColor="white"
                    borderColor={"black"}
                    borderWidth={2}
                    mt={-2}
                    zIndex={100}
                    onClick={() => setCurrentIndex(0)}/>
                <ModalBody>
                    {currentIndex !== undefined && (
                        <Slide 
                            autoplay={false} 
                            defaultIndex={currentIndex}
                            ref={sliderModalRef}
                            arrows={imgList.length>1}>
                            {imgList.map((img, i) => {
                                return (
                                    <Box
                                        key={i} 
                                        height={{ base: 300, md: 650 }}
                                        style={{ backgroundSize: "cover", backgroundImage: `url(${img})`}} 
                                    />
                                    )
                                })
                            }
                        </Slide>  
                    )}
                </ModalBody>
            </ModalContent>
      </Modal>
      </>
     )
  }
  
  export default ImageSlider;