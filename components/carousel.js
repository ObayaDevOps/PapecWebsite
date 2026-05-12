import React, { useCallback, useMemo, useState } from "react";
import { Box, Flex, HStack, Image, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import imageUrlBuilder from "@sanity/image-url";
import client from "../src/sanity/lib/client.js";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Carousel({ images }) {
  const SLIDE_CHANGE_THRESHOLD = 100;

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
        setDragOffset(e.clientX - dragStartX);
        e.preventDefault();
      }
    },
    [dragging, dragStartX]
  );

  const handleMouseUp = useCallback(() => {
    if (dragging) {
      setDragging(false);
      if (Math.abs(dragOffset) > SLIDE_CHANGE_THRESHOLD) {
        dragOffset > 0 ? prevSlide() : nextSlide();
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
      alignItems="center"
      justifyContent="center"
      style={{ cursor: dragging ? "grabbing" : "auto" }}
      onMouseLeave={handleMouseUp}
    >
      <Flex w="full" overflow="hidden" pos="relative" borderRadius="xl">
        <Flex
          w="full"
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          {...carouselStyle}
        >
          {slides.map((slide, sid) => (
            <Flex key={`slide-${sid}`} boxSize="full" flex="none">
              <Image
                src={slide.img}
                alt={slide.caption || "Carousel image"}
                boxSize="full"
                backgroundSize="cover"
              />
            </Flex>
          ))}
        </Flex>

        {/* Prev arrow */}
        <IconButton
          aria-label="Previous slide"
          icon={<ChevronLeftIcon w={6} h={6} />}
          onClick={prevSlide}
          pos="absolute"
          left="12px"
          top="50%"
          transform="translateY(-50%)"
          borderRadius="full"
          bg="whiteAlpha.700"
          color="brand.primary"
          backdropFilter="blur(4px)"
          _hover={{ bg: "whiteAlpha.900" }}
          size="md"
        />

        {/* Next arrow */}
        <IconButton
          aria-label="Next slide"
          icon={<ChevronRightIcon w={6} h={6} />}
          onClick={nextSlide}
          pos="absolute"
          right="12px"
          top="50%"
          transform="translateY(-50%)"
          borderRadius="full"
          bg="whiteAlpha.700"
          color="brand.primary"
          backdropFilter="blur(4px)"
          _hover={{ bg: "whiteAlpha.900" }}
          size="md"
        />

        {/* Dot indicators */}
        <HStack justify="center" pos="absolute" bottom="12px" w="full" spacing={2}>
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize="10px"
              bg={currentSlide === slide ? "brand.accent" : "whiteAlpha.600"}
              rounded="50%"
              transition="background-color 0.4s ease"
              onClick={() => setCurrentSlide(slide)}
              border="1px solid"
              borderColor={currentSlide === slide ? "brand.accent" : "whiteAlpha.400"}
            />
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}
