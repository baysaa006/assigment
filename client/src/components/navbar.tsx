import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar, HStack, TagLeftIcon } from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa6";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import authStore from "contexts/store";
import { Text } from "@chakra-ui/react";
import { web3 } from "providers/web3";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logOut, getPayload, connectWallet, logged } = authStore();
  const [balance, setBalance] = useState("");
  const payload = getPayload();

  const getBalance = async () => {
    if (!payload) return;
    const balance = await web3.eth.getBalance(payload?.address);
    const ethBalance = web3.utils.fromWei(balance, "ether");

    setBalance(ethBalance);
  };

  useEffect(() => {
    if (!payload) return;
    getBalance();
  }, [payload]);

  const onExit = () => {
    logOut();
    navigate("/");
  };

  const options = [
    { name: "Admin", action: () => navigate(`/admin`) },
    { name: "Settings", action: () => navigate(`/settings`) },
    { name: "Log Out", action: () => onExit() },
  ];

  return (
    <nav className="flex w-full max-w-[2000px] flex-row flex-wrap items-center justify-between gap-2   px-8 py-3  backdrop-blur-xl">
      <div className="ml-[6px]   flex gap-8 ">
        <Text
          color="white"
          fontSize="x-large"
          textTransform="uppercase"
          fontWeight="bold"
        >
          {location.pathname === "/"
            ? "home"
            : location.pathname.replace("/", "")}
        </Text>
      </div>
      <div className="flex h-full items-center gap-6">
        {logged ? (
          <>
            {balance && (
              <div className="hidden gap-8 md:flex">
                <HStack
                  cursor="pointer"
                  background="#27303C"
                  paddingX="10px"
                  borderRadius="6px"
                  height="40px"
                >
                  <TagLeftIcon color="white" boxSize="30px" as={FaWallet} />
                  <Text color="white" fontSize="x-large">
                    {balance} ETH
                  </Text>
                </HStack>
              </div>
            )}
            <Menu>
              <MenuButton
                background="#27303C"
                paddingX="8px"
                paddingY="4px"
                borderRadius="6px"
                height="40px"
              >
                <Avatar
                  boxSize="36px"
                  src="https://api.dicebear.com/7.x/lorelei/svg?flip=true"
                />
              </MenuButton>
              <MenuList className="border-none !bg-navy-900  p-0 text-white backdrop-blur-xl">
                {options.map((e, index, array) => (
                  <MenuItem
                    key={index}
                    onClick={() => e.action()}
                    fontSize="large"
                    className={`${
                      [0, 1].includes(index) ? " border-b-0 " : ""
                    } border-2 border-gray-600 !bg-navy-900 capitalize  !text-white backdrop-blur-xl ${
                      index === array.length - 1 && "rounded-b-md"
                    } ${index === 0 && "rounded-t-md"}`}
                  >
                    {e.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </>
        ) : (
          <button
            onClick={() => connectWallet(() => navigate(`/settings`))}
            className="font-bold capitalize text-white "
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
