import { faFilm, faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../Input/Input";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [openS, setOpenS] = useState(false);
  const [changeW, setChangeW] = useState(false);
  useEffect(() => {
    if (openS === true) {
      setTimeout(() => {
        setChangeW(true);
      }, 15);
      return;
    }
    setChangeW(false);
  }, [openS]);
  return (
    <>
      <div className="w-full h-[100px] mt-10">
        <div
          className={
            "flex justify-between ps-16 pr-16 sm:ps-32 sm:pr-32 " +
            (openS ? "!justify-center" : "")
          }
        >
          {!openS && (
            <a href="/">
              <div>
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faFilm} className="lg:h-10 h-7 mt-1" />
                  <h1 className="lg:text-4xl text-xl font-black">
                    Home Cinema
                  </h1>
                </div>
              </div>
            </a>
          )}
          <div className="flex justify-center xl:gap-32 gap-16 items-center">
            <a
              href="/watch"
              className="font-bold text-lg lg:block hidden xl:text-xl"
            >
              Watch
            </a>
            <div className="md:block hidden">
              <Input Icon={faSearch} placeholder="Search" />
            </div>
            {!openS && (
              <div className="md:hidden block cursor-pointer">
                <FontAwesomeIcon
                  onClick={() => setOpenS(true)}
                  icon={faSearch}
                />
              </div>
            )}
            {openS && (
              <div className="">
                <Input
                  onClickIcon={() => setOpenS(false)}
                  Icon={faX}
                  placeholder="Search"
                  className={
                    "w-0 duration-300 " + (changeW ? "!w-[225px]" : "w-0")
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
