import React from "react";
import {
  Grid,
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const Spices = () => {
  return (
    <div>
      <Grid templateColumns="repeat(1, 1fr)" margin={"40px 0"}>
        <HStack spacing="55px" justifyContent={"center"}>
          <Image src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/spices-heading-2-e1608267173425-pkx8te2i0gnc90hxnudm37u6his8ae6wbmp1tbnqmo.png" />
          <Heading color={"#1e516c"} fontWeight={"400"}>
            SPICES
          </Heading>
          <Box>
            <Image src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/spices-heading-pkx8tf0c7aomkmgkics8npln2wnli3amnrcjalmcgg.png" />
          </Box>
        </HStack>
      </Grid>

      <SimpleGrid columns={5} spacing={3} width={"97%"} margin="auto">
        {/* for now i am giveing route to login just to check update here as per the need:- */}
        <NavLink to={"/login"}>
          <Box height="20%">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-1-400x601.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/login"}>
          <Box height="57vh">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-2-400x601.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/login"}>
          <Box height="57vh">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-3-400x601.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/login"}>
          <Box>
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-5-400x601.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/login"}>
          <Box>
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-4-400x601.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
      </SimpleGrid>
    </div>
  );
};

export default Spices;
