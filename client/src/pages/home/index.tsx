"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

import { ReactElement } from "react";
import authStore from "contexts/store";
import { useNavigate } from "react-router-dom";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const features = [
  "Ethereum Wallet Login",
  "Signature Verification",
  "User Profile Management",
  "Frontend and Backend Development",
  "Database Integration",
  "Security and Validation",
  "Tech stack",
];
export default function SplitWithImage() {
  const { connectWallet } = authStore();
  const navigate = useNavigate();

  return (
    <Container maxW={"5xl"} py={12} marginTop="60px">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading color="white" fontSize="xxx-large">
            Assigment project
          </Heading>
          <Heading color="white">Works have done</Heading>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            {features.map((e) => (
              <HStack>
                <FaRegCheckCircle color="green" size="30" />
                <Text color="white" fontSize="large">
                  {e}
                </Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
        <Stack justify="center">
          <Button
            variant=""
            onClick={() => connectWallet(() => navigate("/settings"))}
          >
            <Heading color="white">Click here to explore </Heading>
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
