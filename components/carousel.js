import React, { useCallback, useMemo, useState } from "react";
import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../src/sanity/lib/client.js";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Carousel({ images }) {
  const SLIDE_CHANGE_THRESHOLD = 100;

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slides = useMemo(() => {
    if (!Array.isArray(images) || images.length === 0) return [];
    return images
      .filter((img) => img?.asset?._ref)
      .map((img) => ({ img: urlFor(img).url(), caption: "Papec" }));
  }, [images]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = useCallback(() => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  }, [slidesCount]);
  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  }, [slidesCount]);

  const handleMouseDown = useCallback((e) => {
    setDragging(true);
    setDragStartX(e.clientX);
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (dragging) {
        const diffX = e.clientX - dragStartX;
        setDragOffset(diffX);
        e.preventDefault();
      }
    },
    [dragging, dragStartX]
  );

  const handleMouseUp = useCallback(() => {
    if (dragging) {
      setDragging(false);
      if (Math.abs(dragOffset) > SLIDE_CHANGE_THRESHOLD) {
        const slideChange = dragOffset > 0 ? prevSlide : nextSlide;
        slideChange();
      }
      setDragOffset(0);
    }
  }, [dragging, dragOffset, prevSlide, nextSlide]);

  if (slidesCount === 0) return null;

  const slideOffset =
    currentSlide === 0
      ? Math.min(dragOffset, 0)
      : currentSlide === slidesCount - 1
      ? Math.max(dragOffset, 0)
      : dragOffset;

  const carouselStyle = {
    transition: dragging ? "none" : "all .5s",
    ml: `calc(-${currentSlide * 100}% + ${slideOffset}px)`,
  };

  return (
    <Flex
      w="full"
      minH={{ md: "80vh" }}
      _dark={{ bg: "#3e3e3e" }}
      alignItems="center"
      justifyContent="center"
      style={{ cursor: dragging ? "grabbing" : "auto" }}
      onMouseLeave={handleMouseUp}
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex
          w="full"
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          {...carouselStyle}
        >
          {slides.map((slide, sid) => (
            <Flex key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text color="white" fontSize="xs" p="8px 12px" pos="absolute" top="0">
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt={slide.caption || "Carousel image"}
                boxSize="full"
                backgroundSize="cover"
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                color="white"
              >
                <Text fontSize="5xl" fontFamily="bodyFont">
                  {slide.label}
                </Text>
                <Text fontSize="lg">{slide.description}</Text>
              </Stack>
            </Flex>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setCurrentSlide(slide)}
            />
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}
