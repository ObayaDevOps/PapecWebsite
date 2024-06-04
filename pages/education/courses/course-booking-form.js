

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  Select,
  useClipboard,
  useToast,


} from '@chakra-ui/react';

import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { useState } from 'react'

  
  export default function CourseBookingPageComponent() {

    const { hasCopied, onCopy } = useClipboard('info@peopleandpotential.org');
    const [submitted, setSubmitted] = useState(false);


    const userData = async event => {
      event.preventDefault()
      setSubmitted(true)

      let userTypedData = {
        Name: event.target.name.value,
        Course: event.target.course.value,
        Email: event.target.email.value,
        Phone: event.target.phone.value,
        Participants: event.target.participantsDetails.value,
        Message: event.target.message.value,
        Payment: event.target.payment.value,
      }

      console.log('USER DATA');
      console.log(userTypedData);


      const res = await fetch('/api/courseBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userTypedData)
      })
    }

    const toast = useToast()

    return (
      <Box
      bg={'white'}
      shadow='4xl'
      borderRadius="lg"
      border={'1px'}
      borderColor={'purple.300'}
      p={8}
      color={'gray.700'}
      >
      <form onSubmit={(e) => userData(e)}>
        <VStack spacing={5}>

        <FormControl>
          <FormLabel>Courses</FormLabel>
          <Select 
            placeholder='Select Course' 
            id="course"
            type="text"
            name="course">
            <option>[Mathematics] Effective teaching Methods for Maths: MA1</option>
            <option>[English] Reading from Scratch: EN1</option>
            <option>[Pedagogy] International Teaching Assistant: PE1</option>

          </Select>
        </FormControl>


          <FormControl isRequired>
            <FormLabel htmlFor="name">Full Name</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <BsPerson />
              </InputLeftElement>
              <Input id="name" type="text" name="name" placeholder="Your Name" />
            </InputGroup>
          </FormControl>          

          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <MdOutlineEmail />
              </InputLeftElement>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor='phone'>Phone Number</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <MdOutlinePhone />
              </InputLeftElement>
              <Input
                id="phone"
                type="phone"
                name="phone"
                placeholder="+256 ..."
              />
            </InputGroup>
          </FormControl>





          <FormControl isRequired>
            <FormLabel htmlFor="message">Participants Details (Phone, Email, Dietary Restrictions)</FormLabel>

            <Textarea
              id="participantsDetails"
              name="participantsDetails"
              placeholder="Please include any dietary requirements (Veg, Vegan, Allergies ...etc), phone and email of planned participantss"
              rows={6}
              resize="none"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="message">Message</FormLabel>

            <Textarea
              id="message"
              name="message"
              placeholder="Anything else you would like to tell us!"
              rows={4}
              resize="none"
            />
          </FormControl>

          <FormControl>
          <FormLabel>Payment Method</FormLabel>
          <Select placeholder='Select Prefered Payment Option'  id="payment"
              name="payment">
            <option>Bank Deposit (Preferred) </option>
            <option>Cheque </option>
            <option>Cash Payment </option>
            <option>Mobile Money</option>
          </Select>
        </FormControl>

          <Button
          type="submit"
            colorScheme="green"
            bg="purple.400"
            color="white"
            _hover={{
              bg: 'purple.500',
            }}
            isFullWidth
            onClick={() =>
              toast({
                title: 'Message Sent.',
                description: "We will get back to you soon!",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })}

            >
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
    )
  }
  