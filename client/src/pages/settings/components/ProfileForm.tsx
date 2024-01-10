import React from "react";
import {
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {
  onSubmit: (value: any) => void;
}

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const ProfileForm = (props: Props) => {
  const { onSubmit } = props;
  const { handleSubmit, register } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    onSubmit(data);
  };

  return (
    <VStack align="center" spacing={4} p={4} mx="auto">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormControl>
          <FormLabel color="white" htmlFor="username">
            Username
          </FormLabel>
          <Input
            color="white"
            type="text"
            id="username"
            placeholder="Enter your username"
          />
        </FormControl>
        <FormControl>
          <FormLabel color="white" htmlFor="email">
            Email
          </FormLabel>
          <Input
            color="white"
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl>
          <FormLabel color="white" htmlFor="password">
            Password
          </FormLabel>
          <Input
            color="white"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </FormControl>
        <Button type="submit" mt={4}>
          Update Profile
        </Button>
      </form>
    </VStack>
  );
};

export default ProfileForm;
