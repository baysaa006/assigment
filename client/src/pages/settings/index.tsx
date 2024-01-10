import { User } from "@common/interfaces";
import { useEffect, useState } from "react";
import { checkUser, getUser, updateUser } from "api/user";
import authStore from "contexts/store";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Stack,
  Textarea,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Loader } from "components/loader";

export interface UserResponse {
  data: User[];
}

export const Home = () => {
  const { payload } = authStore();
  const [inputValue, setInputValue] = useState("");
  const [valid, setValid] = useState(false);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const toast = useToast();

  function validateName() {
    let error;
    if (!valid) {
      error = "Name is already taken";
    }
    return error;
  }

  useEffect(() => {
    const delayedSearch = async () => {
      if (inputValue.trim() !== "") {
        try {
          const res = await checkUser(inputValue, payload as any);
          if (!res.data) {
            setValid(true);
          } else {
            setValid(false);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };
    const timerId = setTimeout(() => {
      delayedSearch();
    }, 800);

    return () => clearTimeout(timerId);
  }, [inputValue]);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const onFinish = async (value: any) => {
    setLoading(true);
    await updateUser(value, payload as any)
      .then(() => {
        toast({
          status: "success",
          title: "Success",
          isClosable: true,
          description: "Successfully updated",
          duration: 8000,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => navigate("/admin"));
  };

  if (loading) return <Loader />;

  return (
    <Stack
      spacing={4}
      w={"full"}
      maxW={"md"}
      rounded={"xl"}
      boxShadow={"lg"}
      p={6}
    >
      <Heading color="white">Profile details</Heading>
      <Formik
        initialValues={{
          name: user?.name || "",
          email: user?.email || "",
          bio: user?.bio || "",
          phone: user?.phone || "",
        }}
        onSubmit={(values, actions) => {
          onFinish(values);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }: { form: any; field: any }) => (
                <FormControl
                  onChange={handleInputChange}
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <FormLabel color="white" fontSize="larger">
                    First name
                  </FormLabel>
                  <InputGroup>
                    <Input
                      focusBorderColor="gray.100"
                      color="white"
                      {...field}
                      placeholder="name"
                    />
                    <InputRightElement>
                      {valid && <FaCheck color="green" size="20" />}
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box height={8}></Box>
            <Field name="email">
              {({ field, form }: { form: any; field: any }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel color="white" fontSize="larger">
                    Email
                  </FormLabel>
                  <InputGroup>
                    <Input
                      focusBorderColor="gray.100"
                      color="white"
                      {...field}
                      type="email"
                      placeholder="test@gmail.com"
                    />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box height={8}></Box>
            <Field name="bio">
              {({ field, form }: { form: any; field: any }) => (
                <FormControl isInvalid={form.errors.bio && form.touched.bio}>
                  <FormLabel color="white" fontSize="larger">
                    Bio
                  </FormLabel>
                  <Textarea
                    focusBorderColor="gray.100"
                    color="white"
                    {...field}
                    placeholder="Something about you "
                  />
                  <FormErrorMessage>{form.errors.bio}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box height={8}></Box>
            <Field name="phone">
              {({ field, form }: { form: any; field: any }) => (
                <FormControl
                  isInvalid={form.errors.phone && form.touched.phone}
                >
                  <FormLabel color="white" fontSize="larger">
                    Phone number
                  </FormLabel>
                  <InputGroup>
                    <InputLeftAddon>+976</InputLeftAddon>
                    <Input
                      color="white"
                      type="number"
                      placeholder="phone number"
                      {...field}
                    />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box height={8}></Box>
            <Button
              color={"white"}
              backgroundColor={"#27303C"}
              w="50%"
              type="submit"
              _hover={{
                textColor: "black",
              }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default Home;
