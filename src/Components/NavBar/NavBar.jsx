import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";


import "react-toastify/dist/ReactToastify.css";

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/FirebaseProvider";


const NavBar = () => {
  const { logout, user } = useContext(AuthContext);

  const [openNav, setOpenNav] = React.useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      {/* <NavLink to={'/'} className={({isActive})=>isActive ? 'text-primary font-bold' : 'font-bold'}>  */}

      <Typography
        as="li"
        variant="bold"
        color="red"
        className="flex items-center gap-x-2 p-1 font-medium "
      >
        <FaHome className="text-xl text-gray-500" />

        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold flex items-center"
              : "flex items-center"
          }
        >
          Home
        </NavLink>
      </Typography>


      {user && (
        <>
          <Typography
            as="li"
            variant="bold"
            color="red"
            className="flex items-center gap-x-2 p-1 font-medium"
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 0.5C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V4.5C0 5.03043 0.210714 5.53914 0.585786 5.91421C0.960859 6.28929 1.46957 6.5 2 6.5H4C4.53043 6.5 5.03914 6.28929 5.41421 5.91421C5.78929 5.53914 6 5.03043 6 4.5V2.5C6 1.96957 5.78929 1.46086 5.41421 1.08579C5.03914 0.710714 4.53043 0.5 4 0.5H2ZM2 8.5C1.46957 8.5 0.960859 8.71071 0.585786 9.08579C0.210714 9.46086 0 9.96957 0 10.5V12.5C0 13.0304 0.210714 13.5391 0.585786 13.9142C0.960859 14.2893 1.46957 14.5 2 14.5H4C4.53043 14.5 5.03914 14.2893 5.41421 13.9142C5.78929 13.5391 6 13.0304 6 12.5V10.5C6 9.96957 5.78929 9.46086 5.41421 9.08579C5.03914 8.71071 4.53043 8.5 4 8.5H2ZM8 2.5C8 1.96957 8.21071 1.46086 8.58579 1.08579C8.96086 0.710714 9.46957 0.5 10 0.5H12C12.5304 0.5 13.0391 0.710714 13.4142 1.08579C13.7893 1.46086 14 1.96957 14 2.5V4.5C14 5.03043 13.7893 5.53914 13.4142 5.91421C13.0391 6.28929 12.5304 6.5 12 6.5H10C9.46957 6.5 8.96086 6.28929 8.58579 5.91421C8.21071 5.53914 8 5.03043 8 4.5V2.5ZM8 10.5C8 9.96957 8.21071 9.46086 8.58579 9.08579C8.96086 8.71071 9.46957 8.5 10 8.5H12C12.5304 8.5 13.0391 8.71071 13.4142 9.08579C13.7893 9.46086 14 9.96957 14 10.5V12.5C14 13.0304 13.7893 13.5391 13.4142 13.9142C13.0391 14.2893 12.5304 14.5 12 14.5H10C9.46957 14.5 8.96086 14.2893 8.58579 13.9142C8.21071 13.5391 8 13.0304 8 12.5V10.5Z"
                fill="#90A4AE"
              />
            </svg>

            <NavLink
              to={"/service"}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold flex items-center"
                  : "flex items-center"
              }
            >
              Services
            </NavLink>
          </Typography>

          
        </>
      )}

      {/* 
      <Typography
        as="li"
        variant="bold"
        color="red"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 2.5C0 1.96957 0.210714 1.46086 0.585786 1.08579C0.960859 0.710714 1.46957 0.5 2 0.5H14C14.5304 0.5 15.0391 0.710714 15.4142 1.08579C15.7893 1.46086 16 1.96957 16 2.5V12.5C16 13.0304 15.7893 13.5391 15.4142 13.9142C15.0391 14.2893 14.5304 14.5 14 14.5H2C1.46957 14.5 0.960859 14.2893 0.585786 13.9142C0.210714 13.5391 0 13.0304 0 12.5V2.5ZM3.293 3.793C3.48053 3.60553 3.73484 3.50021 4 3.50021C4.26516 3.50021 4.51947 3.60553 4.707 3.793L7.707 6.793C7.89447 6.98053 7.99979 7.23484 7.99979 7.5C7.99979 7.76516 7.89447 8.01947 7.707 8.207L4.707 11.207C4.5184 11.3892 4.2658 11.49 4.0036 11.4877C3.7414 11.4854 3.49059 11.3802 3.30518 11.1948C3.11977 11.0094 3.0146 10.7586 3.01233 10.4964C3.01005 10.2342 3.11084 9.9816 3.293 9.793L5.586 7.5L3.293 5.207C3.10553 5.01947 3.00021 4.76516 3.00021 4.5C3.00021 4.23484 3.10553 3.98053 3.293 3.793ZM9 9.5C8.73478 9.5 8.48043 9.60536 8.29289 9.79289C8.10536 9.98043 8 10.2348 8 10.5C8 10.7652 8.10536 11.0196 8.29289 11.2071C8.48043 11.3946 8.73478 11.5 9 11.5H12C12.2652 11.5 12.5196 11.3946 12.7071 11.2071C12.8946 11.0196 13 10.7652 13 10.5C13 10.2348 12.8946 9.98043 12.7071 9.79289C12.5196 9.60536 12.2652 9.5 12 9.5H9Z"
            fill="#90A4AE"
          />
        </svg>
        
        <NavLink to={'/login'} className={({isActive}) => isActive ? 'text-white font-bold flex items-center' : 'flex items-center'}>
          Login
        </NavLink>

      </Typography>




      <Typography
        as="li"
        variant="bold"
        color="red"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 2.5C0 1.96957 0.210714 1.46086 0.585786 1.08579C0.960859 0.710714 1.46957 0.5 2 0.5H14C14.5304 0.5 15.0391 0.710714 15.4142 1.08579C15.7893 1.46086 16 1.96957 16 2.5V12.5C16 13.0304 15.7893 13.5391 15.4142 13.9142C15.0391 14.2893 14.5304 14.5 14 14.5H2C1.46957 14.5 0.960859 14.2893 0.585786 13.9142C0.210714 13.5391 0 13.0304 0 12.5V2.5ZM3.293 3.793C3.48053 3.60553 3.73484 3.50021 4 3.50021C4.26516 3.50021 4.51947 3.60553 4.707 3.793L7.707 6.793C7.89447 6.98053 7.99979 7.23484 7.99979 7.5C7.99979 7.76516 7.89447 8.01947 7.707 8.207L4.707 11.207C4.5184 11.3892 4.2658 11.49 4.0036 11.4877C3.7414 11.4854 3.49059 11.3802 3.30518 11.1948C3.11977 11.0094 3.0146 10.7586 3.01233 10.4964C3.01005 10.2342 3.11084 9.9816 3.293 9.793L5.586 7.5L3.293 5.207C3.10553 5.01947 3.00021 4.76516 3.00021 4.5C3.00021 4.23484 3.10553 3.98053 3.293 3.793ZM9 9.5C8.73478 9.5 8.48043 9.60536 8.29289 9.79289C8.10536 9.98043 8 10.2348 8 10.5C8 10.7652 8.10536 11.0196 8.29289 11.2071C8.48043 11.3946 8.73478 11.5 9 11.5H12C12.2652 11.5 12.5196 11.3946 12.7071 11.2071C12.8946 11.0196 13 10.7652 13 10.5C13 10.2348 12.8946 9.98043 12.7071 9.79289C12.5196 9.60536 12.2652 9.5 12 9.5H9Z"
            fill="#90A4AE"
          />
        </svg>
        
        <NavLink to={'/register'} className={({isActive}) => isActive ? 'text-white font-bold flex items-center' : 'flex items-center'}>
          Register
        </NavLink>

      </Typography> */}
    </ul>
  );

  const renderAuthNav = () => {
    if (user) {
      // User is logged in, render logout button
      return <div className="flex items-center gap-x-1"></div>;
    } else {
      // User is not logged in, render login and register links
      return (
        <div className="flex items-center gap-x-1">
          <Typography
            as="li"
            variant="bold"
            color="red"
            className="flex items-center gap-x-2 p-1 font-medium"
          >
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold flex items-center"
                  : "flex items-center"
              }
            >
              Login
            </NavLink>
          </Typography>

          <Typography
            as="li"
            variant="bold"
            color="red"
            className="flex items-center gap-x-2 p-1 font-medium"
          >
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold flex items-center"
                  : "flex items-center"
              }
            >
              Register
            </NavLink>
          </Typography>
        </div>
      );
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <Navbar className="mx-auto max-w-7xl px-4 py-2 lg:px-8 lg:py-4 ">
        <div className="container mx-auto flex items-center font-extrabold justify-between bg-blue-900 text-white rounded-xl">
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-3 cursor-pointer py-1.5 font-medium "
          >
            <span className="text-[#68e329] font-bold">
              <img className="w-10 h-10 rounded-full" src="./logo.png" alt="" />
            </span>
          </Typography>

          <div className="hidden lg:block">{navList}</div>

          {renderAuthNav()}

          {/* <Typography
        as="li"
        variant="bold"
        color="red"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
       
        
        <NavLink to={'/login'} className={({isActive}) => isActive ? 'text-white font-bold flex items-center' : 'flex items-center'}>
          Login
        </NavLink>

      </Typography>




      <Typography
        as="li"
        variant="bold"
        color="red"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        
        
        <NavLink to={'/register'} className={({isActive}) => isActive ? 'text-white font-bold flex items-center' : 'flex items-center'}>
          Register
        </NavLink>

      </Typography> */}

          <div className="flex items-center gap-x-1">
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleToggle}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 "
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

            {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src='./myself.png' />
        </div>
             </div> */}

            {/* {
  user? <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1"><div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">
    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
  </div>
</div></div>
  <ul tabIndex={0} className="dropdown-content z-40  menu p-2 shadow bg-base-100 rounded-box w-52">
    <li className="z-10 text-blue-900">{user.displayName}</li>
    <li className="z-10 text-blue-900"><button>logout</button></li>
   
  </ul>
</div> :

<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src='./logo.png' />
        </div>
      </div>

} */}

            {user ? (
              <Popover>
                <PopoverHandler>
                  <Button>
                    <div className="w-10 rounded-full">
                      <img
                        className="rounded-full"
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </Button>
                </PopoverHandler>
                <PopoverContent>
                  <h1>{user.displayName}</h1>
                  <button onClick={logout} className="btn btn-sm btn-secondary">
                    Logout
                  </button>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  className="rounded-full"
                  src="./logo.png"
                />
              </div>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 "
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>

        <MobileNav open={openNav}>
          <div className="container mx-auto ">
            {navList}
            <div className="flex items-center gap-x-1"></div>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavBar;
