'use client';
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useEffect, useState } from "react";
import UserMenuItem from "./MenuItem";
// import router from "next/router";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";


const UserMenu = () => {

// const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  // const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);

    window.addEventListener("click", closeMenu);

    return () => window.removeEventListener("click", closeMenu);
  }, []);

  const toggleOpen = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      setIsOpen((prev) => !prev);
    },
    []
  );

  // const onRent = useCallback(() => {
  //   if (!currentUser) {
  //     return loginModal.onOpen();
  //   }
  //   rentModal.onOpen();
  // }, [currentUser, loginModal, rentModal]);


  return (
    <div className="relative ">
      <div className="flex flex-row items-center gap-3">
        <div
            onClick={() => {}}

          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar/>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {/* { (
              <>
                <UserMenuItem
                  onClick={() => router.push("/trips")}
                  label="My Trips"
                />
                <UserMenuItem
                  onClick={() => router.push("/favorites")}
                  label="My Favorites"
                />
                <UserMenuItem
                  onClick={() => router.push("/reservations")}
                  label="My Reservations"
                />
                <UserMenuItem
                  onClick={() => router.push("/properties")}
                  label="My Properties"
                />
                <UserMenuItem
                  onClick={() => {}}
                  label="Airbnb My Home"
                />
                <hr />
                <UserMenuItem onClick={() => {}} label="Logout" />
              </>
            ) : ( */}
              <>
                <UserMenuItem onClick={loginModal.onOpen} label="Login" />
                <UserMenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            
          </div>
        </div>
      )}

    </div>
  );
};

export default UserMenu;