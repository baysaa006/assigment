import { User } from "@common/interfaces";
import { Text } from "@chakra-ui/react";

export interface UserResponse {
  data: User[];
}

export const Home = () => {
  return (
    <Text color="white" fontSize="xxx-large">
      Home page
    </Text>
  );
};

export default Home;
