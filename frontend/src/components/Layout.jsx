import React from "react";
import { useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className=" bg-gray-800 p-10  min-h-[80vh]">
        <main className=" container mx-auto">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
