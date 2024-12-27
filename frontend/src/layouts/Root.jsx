import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { AddToCartContext } from "../context/AddToCartContext";
import { GrStatusGood } from "react-icons/gr";
import { TiCancel } from 'react-icons/ti';
import { WishListContext } from "../context/WishListContext";
import { ScrollToTop } from "../components/scroll-to-top/ScrollToTop";
import { useAuth } from "../context/AuthContext";

function Root() {
  const { cartMessage } = useContext(AddToCartContext);
  const { wishListMessage } = useContext(WishListContext);
  const { message, error } = useAuth();

  return (
    <ScrollToTop>
      <div className="min-h-fit">
        <Header />
        <main>
          {cartMessage && (
            <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 border-gray-500 text-white bg-lilac sm:w-full ">
              <GrStatusGood className="text-white" />
              <p>{cartMessage}</p>
            </div>
          )}
          {wishListMessage && (
            <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 border-gray-500 text-white bg-lilac sm:w-full ">
              <GrStatusGood className="text-white " />
              <p>{wishListMessage}</p>
            </div>
          )}
          {message && (
            <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 border-gray-500 text-white bg-lilac sm:w-full ">
              <GrStatusGood className="text-white" />
              <p>{message}</p>
            </div>
          )}
          {error && (
            <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 border-gray-500 text-white bg-red-400 sm:w-full ">
              <TiCancel className="text-white" />
              <p>{error}</p>
            </div>
          )}
          <Outlet />
        </main>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default Root;
