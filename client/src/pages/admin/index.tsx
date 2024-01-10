import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
} from "@chakra-ui/react";
import { User } from "@common/interfaces";
import { getUser } from "api";
import { Loader } from "components/loader";
import authStore from "contexts/store";
import { useEffect, useState } from "react";

export default function Admin() {
  const { payload } = authStore();

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const firstPart = user?.address?.slice(0, 7);

  const lastPart = user?.address?.slice(8, 13);

  const shortenedAddress = `${firstPart}....${lastPart}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUser(payload as any);
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, [payload]);

  if (loading) return <Loader />;

  return (
    <Center py={6} marginTop="60px">
      {user ? (
        <Box
          backgroundColor="#27303C"
          maxW={"320px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src="https://api.dicebear.com/7.x/lorelei/svg?flip=true"
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading color="white" fontSize={"2xl"} fontFamily={"body"}>
            {user?.name}
          </Heading>
          <Text color="white" fontWeight={600} mb={4}>
            {user?.email}
          </Text>
          <Text color="white" fontWeight={600} mb={8}>
            {shortenedAddress}
          </Text>
          <Text color="white" textAlign={"center"} px={3}>
            {user?.bio}
            <Text color={"blue.400"}>#tag</Text> me in your posts
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge px={2} py={1} fontWeight={"400"}>
              #art
            </Badge>
            <Badge px={2} py={1} fontWeight={"400"}>
              #photography
            </Badge>
            <Badge px={2} py={1} fontWeight={"400"}>
              #music
            </Badge>
          </Stack>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Follow
            </Button>
          </Stack>
        </Box>
      ) : (
        <Heading color="white">
          Одоогоор хэрэглэгчийн мэдээлэл хадгалагдаагүй байна
        </Heading>
      )}
    </Center>
  );
}
