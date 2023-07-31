import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../../index.css";

const Main = () => {
  return (
    <div className="container">
      <div className="flex w-screen">
        <div className="w-2/12 sticky">
          <Sidebar />
        </div>
        <div className="w-10/12">
          <Navbar />
          <div className="w-full flex pe-24">
            <div className="container flex ps-10 pt-12 border gap-10">
              <div className="container w-3/6">
                <span className="font-bold text-xl">Dashboard</span>
                <ul className="container">
                  <li>
                    <div className="container gap-y-4 w-auto h-96 overflow-y-auto">
                      <h1>Welcome</h1>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
