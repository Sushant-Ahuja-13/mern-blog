import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Ahuja's Blog
        </span>
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      {/* Mobile Search Button */}
      <Button
        className="w-20 h-10 lg:hidden bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white"
        pill
      >
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        {/* Theme Toggle Button */}
        <Button
          className="w-12 h-10 hidden sm:inline bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>

        {/* Auth Buttons */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </DropdownHeader>
            <Link to={"/dashboard?tab=profile"}>
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <DropdownDivider />
            <DropdownItem>Sign Out</DropdownItem>
          </Dropdown>
        ) : (
          <Link to={"/sign-in"}>
            <Button
              className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:from-purple-500 hover:to-blue-400 focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-800"
            >
              Sign In
            </Button>
          </Link>
        )}

        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink
          active={path === "/"}
          as={"div"}
          className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          <Link to={"/"}>Home</Link>
        </NavbarLink>
        <NavbarLink
          active={path === "/about"}
          as={"div"}
          className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          <Link to={"/about"}>About</Link>
        </NavbarLink>
        <NavbarLink
          active={path === "/projects"}
          as={"div"}
          className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          <Link to={"/projects"}>Projects</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
