import { useRef } from "react";
import { BsBell } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import AsideTabs from "./tabs/AsideTabs";

// import profile1 from "../assets/profile1.svg";
// import logo1 from "../assets/logo1.svg";

function Navbar() {
    let asideRef = useRef(null);
    let overlayRef = useRef(null);

    function open() {
        asideRef.current.style.width = "300px";
        overlayRef.current.style.width = "100vw";
    }
    function close() {
        asideRef.current.style.width = "0px";
        overlayRef.current.style.width = "0vw";
    }

    function NavbarAside() {
        return (
            <>
                {/* Aside */}
                <div
                    className="fixed top-0 left-0 h-screen w-[0px]  bg-slate-400 z-30 shadow transition-all duration-300 overflow-hidden"
                    ref={asideRef}
                >
                    {/* Cross Button */}
                    <div className="px-[22px] h-[50px] flex items-center gap-[6px] mt-1 border-b">
                        <IoIosClose
                            className="h-[30px] w-[30px] press-3 text-white rounded bg-c1"
                            onClick={close}
                        />
                        <span>Tech COmmerse</span>
                        {/* <img  className={`h-[40px]`} alt="logo" /> */}
                    </div>

                    {/* Aside Tabs */}
                    <div className="px-1 mt-5 overflow-x-hidden overflow-y-auto max-h-[calc(100vh-50px-20px-10px)] hide-scrollbar rounded">
                        <AsideTabs />
                    </div>
                </div>

                {/* Overlay */}
                <div
                    className="fixed top-0 left-0 z-20 w-0 h-screen backdrop-blur-sm"
                    ref={overlayRef}
                    onClick={close}
                ></div>
            </>
        );
    }

    return (
        <section className="h-[50px]  bg-slate-500 rounded flex justify-between items-center px-5">
            {/* Notification + Menu icon */}
            <div className="flex gap-3">
                {/* Menu icons */}
                <div
                    className="flex items-center justify-center bg-white rounded h-[30px] w-[30px] press-3 lg:hidden"
                    onClick={open}
                >
                    <HiMenu />
                </div>

                {/* Notification */}
                <div className="flex items-center justify-center bg-white rounded-full h-[30px] w-[30px] press-3">
                    <BsBell />
                </div>
            </div>

            {/* User Profile */}
            <div className="px-5 bg-white h-[38px] rounded flex justify-evenly items-center gap-3 press-1">
                <img  className="h-[30px]" alt="" />
                <div className="text-xs">Ben Cooper</div>
                <div>
                    <FaChevronDown />
                </div>
            </div>

            {/* Navigation bar aside */}
            <NavbarAside />
        </section>
    );
}

export default Navbar;
