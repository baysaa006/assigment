import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoMdNotificationsOutline } from "react-icons/io";
import { AuthContext } from "contexts/auth.context";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const Navbar = (props: { brandText: string; secondary?: boolean | string }) => {
  const navigate = useNavigate();

  const { signOut } = useContext(AuthContext);

  const onExit = () => {
    signOut();
    navigate("/auth/login");
  };

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
      <div className="ml-[6px]  hidden gap-8 md:flex ">
        {routes.map((e, index) => (
          <div
            key={index}
            className="shrink text-[33px] capitalize  text-white"
          >
            <button
              onClick={() => changePath(e.path)}
              className="font-bold capitalize  text-white"
            >
              {e.name}
            </button>
          </div>
        ))}
      </div>
      <div className="md:hidden ">
        <Menu isLazy>
          <MenuButton>
            <GiHamburgerMenu color="white" size={26} />
          </MenuButton>
          <MenuList className="border-none !bg-navy-900  p-0 text-white backdrop-blur-xl">
            {routes.map((e, index: number, array) => (
              <MenuItem
                key={index}
                onClick={() => changePath(e.path)}
                className={` !bg-navy-900 ${
                  [0, 1].includes(index) ? " border-b-0 " : ""
                } border-2 border-gray-600  text-xl font-bold capitalize  !text-white backdrop-blur-xl ${
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
            <IoMdNotificationsOutline className="h-6 w-6 text-white" />
          </MenuButton>
          <MenuList className="border-none !bg-navy-900  p-0 text-white backdrop-blur-xl">
            {["1", "2", "23"].map((e, index, array) => (
              <MenuItem
                key={index}
                className={`${
                  [0, 1].includes(index) ? " border-b-0 " : ""
                } border-2 border-gray-600 !bg-navy-900  text-xl font-bold capitalize  !text-white backdrop-blur-xl ${
                  index === array.length - 1 && "rounded-b-md"
                } ${index === 0 && "rounded-t-md"}`}
              >
                {e}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <button
          onClick={onExit}
          className="font-bold capitalize text-white hover:text-navy-700"
        >
          Гарах
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
