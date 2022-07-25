import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { FaCrown } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { deleteCartItem, getCartData } from "../Redux/AppReducer/action";

// let countDown = 5;

const CheckOut = () => {
  const cart = useSelector((store) => store.AppReducer.cart);
  const [countDown, setCountDown] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (cart.length === 0) {
      dispatch(getCartData());
    }
  }, []);

  const subtotal = cart
    ?.map((item) => item.count * item.cost)
    .reduce((curr, prev) => curr + prev, 0);

  const discount = Math.abs(subtotal - (subtotal * 10) / 100).toFixed(0);

  const handlePayment = () => {
    onOpen();
    let i = 5;
    let interval = setInterval(() => {
      if (i >= 0) {
        setCountDown(i--);
      }
      if (i < 0) {
        clearInterval(interval);
        cart.forEach((item) => {
          dispatch(deleteCartItem(item.id));
        });
        dispatch(getCartData());
        navigate("/");
      }
    }, 1000);
  };

  return (
    <Box>
      <Container p="0.5rem" color="#1e516c">
        <Heading
          fontSize="2xl"
          mb="0.4rem"
          letterSpacing="2px"
          fontWeight={500}
          textAlign="center"
        >
          Checkout
        </Heading>
        <Flex justify="center" align="end" fontSize="sm" gap={1}>
          <RouterLink to="/">
            <Text _hover={{ textDecoration: "underline" }}>Home</Text>
          </RouterLink>
          <RiArrowDropRightLine />
          <Text>Checkout</Text>
        </Flex>
      </Container>

      <Flex
        gap={10}
        justify="center"
        p={{
          base: "1rem 1rem",
          sm: "1rem 5rem",
          md: "1rem 3rem",
          lg: "1rem 5rem",
          xl: "1rem 10rem",
        }}
        direction={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <Box w="100%">
          <Heading mb="1rem" fontSize="2xl">
            Billing details
          </Heading>
          <form>
            <FormControl isRequired>
              <Flex gap={5} mt="1rem">
                <Box w="100%">
                  <FormLabel fontSize="xs">FIRST NAME</FormLabel>
                  <Input id="name" name="name" />
                </Box>
                <Box w="100%">
                  <FormLabel fontSize="xs">LAST NAME</FormLabel>
                  <Input id="lastName" name="lastName" />
                </Box>
              </Flex>
            </FormControl>

            <FormLabel fontSize="xs" mt="1rem">
              COMPANY NAME (OPTIONAL)
            </FormLabel>
            <Input id="company" name="company" />

            <FormControl isRequired>
              <FormLabel fontSize="xs" mt="1rem">
                COUNTRY / REGION
              </FormLabel>
              <Select placeholder="Select option">
                <option value="India">India</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="America">America</option>
                <option value="Germany">Germany</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Japan">Japan</option>
                <option value="North">North Korea</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Mayanmar">Mayanmar</option>
                <option value="Combodia">Combodia</option>
                <option value="France">France</option>
                <option value="Isreal">Isreal</option>
                <option value="Canada">Canada</option>
                <option value="South">South Africa</option>
                <option value="Brazil">Brazil</option>
              </Select>

              <FormLabel fontSize="xs" mt="1rem">
                ADDRESS
              </FormLabel>
              <Input id="address" name="address" />

              <Flex gap={5} mt="1rem">
                <Box w="100%">
                  <FormLabel fontSize="xs">TOWN / CITY</FormLabel>
                  <Input id="town" name="town" />
                </Box>
                <Box w="100%">
                  <FormLabel fontSize="xs">STATE / COUNRTY</FormLabel>
                  <Select placeholder="Select option">
                    <option value="India">India</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="America">America</option>
                    <option value="Germany">Germany</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Japan">Japan</option>
                    <option value="North">North Korea</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Mayanmar">Mayanmar</option>
                    <option value="Combodia">Combodia</option>
                    <option value="France">France</option>
                    <option value="Isreal">Isreal</option>
                    <option value="Canada">Canada</option>
                    <option value="South">South Africa</option>
                    <option value="Brazil">Brazil</option>
                  </Select>
                </Box>
              </Flex>

              <Flex gap={5} mt="1rem">
                <Box w="100%">
                  <FormLabel fontSize="xs">POSTCODE / ZIP</FormLabel>
                  <Input id="postcode" name="postcode" />
                </Box>
                <Box w="100%">
                  <FormLabel fontSize="xs">PHONE</FormLabel>
                  <Input id="phone" name="phone" />
                </Box>
              </Flex>
            </FormControl>

            <Flex gap={5} mt="1rem">
              <Box w="100%">
                <FormLabel fontSize="xs">ALTERNAME PHONE (OPTIONAL)</FormLabel>
                <Input id="alternatePhone" name="alternatePhone" />
              </Box>
              <Box w="100%">
                <FormControl isRequired>
                  <FormLabel fontSize="xs">EMAIL ADDRESS</FormLabel>
                  <Input id="email" name="email" />
                </FormControl>
              </Box>
            </Flex>

            <Heading fontSize="2xl" mb="1rem" mt="1rem">
              Additional Information
            </Heading>
            <FormLabel fontSize="xs">Order notes (optional)</FormLabel>
            <Textarea
              id="notes"
              name="notes"
              placeholder="Notes about your order."
            />
          </form>
        </Box>

        {/* cart details section  */}

        <Box
          bg="rgba(0, 0, 0, 0.06)"
          p="1rem"
          w={{ base: "100%", sm: "100%", md: "60%", lg: "60%", xl: "60%" }}
        >
          <Flex
            justify="space-between"
            fontWeight={500}
            borderBottom="1px solid gray"
            m="0.5rem 1rem"
            pb="0.5rem"
          >
            <Text>PRODUCT</Text>
            <Text>SUBTOTAL</Text>
          </Flex>
          {cart?.map((item) => (
            <Flex
              key={item.id}
              justify="space-between"
              p="1rem"
              fontWeight={500}
            >
              <Text fontSize="xs" w="70%" fontWeight={600}>
                {item.name} x {item.count}
              </Text>
              <Text w="90px">
                ₹{item.cost * item.count}.00 (inclusive all taxes)
              </Text>
            </Flex>
          ))}
          <Flex justify="space-between" p="1rem" fontWeight={500}>
            <Text fontSize="xs" fontWeight={600}>
              SUBTOTAL
            </Text>
            <Text>₹{subtotal}.00</Text>
          </Flex>
          <Flex justify="space-between" p="1rem" fontWeight={500}>
            <Text fontSize="xs" fontWeight={600}>
              DISCOUNT (10% APPLIED)
            </Text>
            <Text>₹{discount}.00</Text>
          </Flex>
          <Flex justify="space-between" p="1rem" fontWeight={500}>
            <Text fontSize="xs" fontWeight={600}>
              TOTAL
            </Text>
            <Text>₹{discount}.00</Text>
          </Flex>

          <Button
            w="100%"
            bg="#ffce61"
            border="1px solid"
            p="1.5rem"
            mt="0.5rem"
            borderRadius={4}
            onClick={handlePayment}
          >
            Proceed to Payment <MdOutlineArrowRightAlt />
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
              bg="blackAlpha.300"
              backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
              <ModalHeader> YOUR ORDER IS PLACED</ModalHeader>
              <ModalBody>
                <img
                  src="https://i.giphy.com/media/xUOrwiqZxXUiJewDrq/giphy.webp"
                  alt=""
                />
                <Text
                  position="absolute"
                  top="8%"
                  left="45%"
                  fontSize="100px"
                  fontWeight={1000}
                >
                  {countDown}
                </Text>
                <Heading
                  textAlign="center"
                  backgroundColor=" #00DBDE"
                  backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                  bgClip="text"
                >
                  Thank You For Shopping...
                </Heading>
              </ModalBody>
            </ModalContent>
          </Modal>

          <Box border="2px solid" mt="2rem" borderRadius={6}>
            <UnorderedList
              ml="7%"
              mt="5"
              mr="5%"
              fontSize="18px"
              fontWeight="500"
            >
              <ListItem padding="2">
                {" "}
                <Flex direction="row">
                  <FaCrown />
                  <Text
                    backgroundColor=" #00DBDE"
                    backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                    bgClip="text"
                  >
                    Guaranteed delivery with 100% original products
                  </Text>{" "}
                </Flex>
              </ListItem>
              <ListItem padding="2">
                <Text
                  backgroundColor=" #00DBDE"
                  backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                  bgClip="text"
                >
                  COD available on some categories
                </Text>
              </ListItem>
              <ListItem padding="2">
                <Text
                  backgroundColor=" #00DBDE"
                  backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                  bgClip="text"
                >
                  FOR ONLINE PAYMENT EXTRA ₹10% DISCOUNT ON ORDERS ABOVE ₹500
                </Text>
              </ListItem>
              <ListItem padding="2">
                <Text
                  backgroundColor=" #00DBDE"
                  backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                  bgClip="text"
                >
                  EMI OPTION AVAILABLE
                </Text>
              </ListItem>
              <ListItem padding="2">
                <Text
                  backgroundColor=" #00DBDE"
                  backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                  bgClip="text"
                >
                  FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT
                  FREE DELIVERY AVAILABLE ON ALL ORDERS
                </Text>
              </ListItem>
              <ListItem padding="2">
                <Text
                  backgroundColor=" #00DBDE"
                  backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                  bgClip="text"
                >
                  {" "}
                  BELOW ₹500 CASH ON DELIVERY CHARGES ₹49
                </Text>
              </ListItem>
              <ListItem padding="2">
                <Text
                  backgroundColor=" #00DBDE"
                  backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                  bgClip="text"
                >
                  YOU WILL RECEIVE PRODUCTS IN NEXT 5 to 7 DAYS ALL OVER INDIA
                </Text>
              </ListItem>
              <ListItem padding="2">
                <Text
                  backgroundColor=" #00DBDE"
                  backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                  bgClip="text"
                >
                  RETURN AVAILABLE ON WRONG OR DAMAGED PRODUCT DELIVERED, READ
                  RETURN POLICY TO KNOW MORE.
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default CheckOut;
