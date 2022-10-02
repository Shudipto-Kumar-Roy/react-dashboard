import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaShoppingBag,
  FaArrowAltCircleRight,
  FaHamburger,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Data } from "../Data/Data";
import { motion } from "framer-motion";
const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [openSideBar, setOpenSidebar] = useState(false);

  const sidebarVarients = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div
        className="sidebar_mobile_icon"
        onClick={() => setOpenSidebar(!openSideBar)}
      >
        {openSideBar ? <IoMdClose /> : <FaHamburger />}
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVarients}
        animate={window.innerWidth <= 768 ? `${openSideBar}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <FaShoppingBag className="icon" />
          <span className="text">
            Sh<span>o</span>p
          </span>
        </div>

        {/* menu */}
        <div className="menu">
          {Data &&
            Data.map((menuitem, index) => (
              <div
                onClick={() => setActiveMenu(index)}
                key={index}
                className={
                  activeMenu === index
                    ? "menu_item menu_item_active"
                    : "menu_item"
                }
              >
                <menuitem.icon className="menu_icon" />
                <span>{menuitem.heading}</span>
              </div>
            ))}
          <div className="menu_item">
            <FaArrowAltCircleRight className="menu_icon" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
