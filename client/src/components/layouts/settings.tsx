import {
  Box,
  Flex,
  Icon,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Stack,
} from "@chakra-ui/react";
import { FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { IconType } from "react-icons";
import { ReactNode } from "react";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Profile", icon: RxAvatar },
  { name: "Feature items", icon: FiTrendingUp },
  { name: "Notifications", icon: FiCompass },
  { name: "Offers", icon: FiStar },
  { name: "Account support", icon: FiSettings },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      borderRight="2px"
      borderRightColor={"white"}
      pos="fixed"
      h="full"
      w="240px"
      padding="4px"
      paddingTop="10px"
      {...rest}
    >
      {LinkItems.map((link) => (
        <NavItem
          color="white"
          fontSize="large"
          key={link.name}
          icon={link.icon}
        >
          <Text>{link.name}</Text>
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box as="a" href="#" style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        mx="4"
        paddingX="10px"
        paddingY="10px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#27303C",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="24"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const SettingsLayOut = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack spacing={8} direction="row" width="100%" marginTop="60px">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Box marginLeft={{ base: "0", md: "240px" }} width="100%">
        {children}
      </Box>
    </Stack>
  );
};

export default SettingsLayOut;
