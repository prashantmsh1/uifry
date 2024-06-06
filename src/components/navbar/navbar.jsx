import React from "react";
import uifrylogo from "../../assets/common/uifrylogo.png";
import star from "../../assets/common/star.svg";
const Navbar = () => {
    return (
        <nav className=" mt-8 relative">
            <div className="  w-11/12 max-w-[1090px] mx-auto flex justify-between">
                <div className=" flex justify-start items-center w-full   ">
                    <div>
                        <img src={uifrylogo} alt="" />
                    </div>
                    <div className=" flex justify-start items-center w-full ml-12">
                        <ul className=" text-black font-semibold  hover:*:text-red-700 hover:*:font-semibold flex  *:text-left *:px-2 gap-x-8 text-xl">
                            <li className="">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button className=" text-white font-medium  bg-black rounded py-2 px-12 w-[180px] h-[60px] ">
                        Download
                    </button>
                </div>
            </div>
            <div className=" absolute top-8 right-24">
                <img src={star} alt=" " />
            </div>
        </nav>
    );
};

export default Navbar;
