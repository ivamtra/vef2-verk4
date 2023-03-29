
import React from "react";


const Layout = ({ children } : any) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-6 mb-4">
        <div className="container mx-auto px-4">Kennsluskrá</div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white py-6 mt-4">
        <div className="container mx-auto px-4">Ívan Már Þrastarson</div>
      </footer>
    </div>
  );
}

export default Layout
