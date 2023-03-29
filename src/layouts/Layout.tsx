import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-6 mb-4">
        <h1 className="container mx-auto px-4 text-2xl">
          <Link to="/departments">Kennsluskrá</Link>
        </h1>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white py-6 mt-4">
        <h1 className="container mx-auto px-4 text-lg">Ívan Már Þrastarson</h1>
      </footer>
    </div>
  );
};

export default Layout;
