// import { useAuthStore } from "../store/useAuthStore"
import { LogOut, MessageCircle, Settings, User, UserRoundSearch, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthstore } from "../store/useAuthstore";
import { useEffect, useRef, useState } from "react";
const Navbar = () => {
  const { authUser, logout } = useAuthstore();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className=" border-b border-base-300 fixed w-full tpo-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-12 ">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className=" flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="flex items-center justify-center">
                <img
                  src={document.getElementById("data-theme")?.getAttribute("data-theme") === "dark" ? "App.svg" : "Logo.svg"}
                  alt="Logo"
                  className="size-12"
                />

              </div>
              <h1 className="text-lg font-bold">Sr-Jr</h1>
            </Link>

          </div>

          <div className="flex items-center gap-2">

            {(authUser &&
              <>
                <Link
                  to="/connections"
                  className="btn btn-sm gap-2 transition-colors"
                >
                  <UsersRound className="size-5" />
                  <span className="hidden sm:block">Connections</span>
                </Link>


                <Link
                  to="/teammate"
                  className="btn btn-sm gap-2 transition-colors"
                >
                  <UserRoundSearch className="size-5" />
                  <span className="hidden sm:block">Find Team</span>
                </Link>
              </>
            )}


            <Link
              to={"/settings"}
              className="btn btn-sm transition-colors"
            >
              <Settings className="size-5" />
              <span className="hidden sm:block" >Setting</span>
            </Link>

            {
              authUser &&
              (
                <>
                  {/* Profile avatar */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="avatar hover:cursor-pointer pl-2 pr-2"
                  >
                    <div className="w-9 rounded-full">
                      <img src={authUser.profilePicture || "avatar.png"} alt="User" />
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {open && (
                    <div ref={dropdownRef} className="dropdown-content absolute top-10 right-2.5 mt-2 w-48 bg-base-100 shadow-lg rounded-lg border border-base-300">
                      {/* Profile Section */}
                      <div className="p-4 flex flex-col items-center border-b border-base-300">
                        <img className="w-16 h-16 rounded-full object-cover" src={authUser.profilePicture || "avatar.png"} alt="Profile" />
                        <p className="mt-2 text-md font-bold">{authUser.fullName}</p>
                      </div>

                      {/* Menu Items */}
                      <div className="flex flex-col items-center">

                        <ul className=" menu p-2 flex-col gap-1.5 justify-center items-center">
                          <li>
                            <Link
                              to="/profile"
                              className="btn btn-sm gap-2 transition-colors"
                            >
                              <User className="size-5" />
                              Profile
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={logout}
                              className="btn btn-sm gap-2 transition-colors"
                            >
                              <LogOut className="size-5" />
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                  )}
                </>
              )
            }

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar