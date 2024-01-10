import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Wrap, WrapItem } from "@chakra-ui/react";
import Badge from "../components/Badge";
import { useRef, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { label: "React" },
  { label: "Redux" },
  { label: "Typescript" },
  { label: "NodeJS" },
  { label: "React" },
  { label: "Redux" },
];

function TechList() {

  const main = useRef(null);

  useLayoutEffect(() => {
    const box = gsap.utils.toArray('.tech-row');
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
          scrollTrigger: {
            markers: true,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 4,
          },
        });
      t1.fromTo(box, {
          x: (index) => {
            return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400);
            },
          },{
            x: (index) => {
              return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400);
            },
            ease: "power1.inOut",
          },
        );
      }, main);
      return () => ctx.revert(); // cleanup!
    }, []);

    return (
        <Wrap mt={14} maxW={800} maxH={400} ref={main}>
          {[1,2,3,4].map((_, index) => (
            <span key={index} className="tech-row" style={{"display":"flex"}}>
              {SKILLS.map((skill, i) => (
                <WrapItem key={i} mr={10}>
                    <Badge bg={skill.label}>{skill.label}</Badge>
                </WrapItem>
              ))}
            </span>
          ))
          }
        </Wrap>
    )
  }
  
  export default TechList