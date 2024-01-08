import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoMdNotificationsOutline } from "react-icons/io";
import { AuthContext } from "contexts/auth.context";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const Navbar = (props: { brandText: string; secondary?: boolean | string }) => {
  const navigate = useNavigate();

  const { signOut } = useContext(AuthContext);

  const [account, setAccount] = useState();

  const routes = [
    { name: "Шинэ", path: "new" },
    { name: "Өөрлөлт", path: "upload" },
    { name: "Багц", path: "plan" },
  ];

  const changePath = (path: string) => {
    navigate(`/admin/${path}`);
  };

  return (
    <nav className="fixed z-40 flex w-full flex-row flex-wrap items-center justify-between gap-2 border-b-2   border-b-gray-600 px-6 py-3  backdrop-blur-xl">
      <div className="md:hidden ">
        <Menu isLazy>
          <MenuButton>
            <GiHamburgerMenu color="white" size={26} />
          </MenuButton>
          <MenuList className=" border-none backdrop-blur-xl dark:bg-navy-900 dark:p-0 dark:text-white">
            {routes.map((e, index: number, array) => (
              <MenuItem
                key={index}
                onClick={() => changePath(e.path)}
                className={`${
                  [0, 1].includes(index) ? " border-b-0 " : ""
                } border-2 border-gray-600 text-xl font-bold capitalize  backdrop-blur-xl dark:!bg-navy-900 ${
                  index === array.length - 1 && "rounded-b-md"
                } ${index === 0 && "rounded-t-md"}`}
              >
                {e.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>

      <div className="flex h-full items-center gap-6">
        <Menu>
          <MenuButton>
            <IoMdNotificationsOutline className="h-6 w-6 text-gray-600 dark:text-white" />
          </MenuButton>
          <MenuList className="border-none dark:!bg-navy-900  dark:p-0 dark:text-white dark:backdrop-blur-xl">
            {["1", "2", "23"].map((e, index, array) => (
              <MenuItem
                key={index}
                className={`${
                  [0, 1].includes(index) ? " border-b-0 " : ""
                } border-2 border-gray-600 text-xl font-bold capitalize  backdrop-blur-xl dark:!bg-navy-900 ${
                  index === array.length - 1 && "rounded-b-md"
                } ${index === 0 && "rounded-t-md"}`}
              >
                {e}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
      <button className="font-bold capitalize hover:text-navy-700 dark:text-white">
        newtreh
      </button>
    </nav>
  );
};

export default Navbar;
