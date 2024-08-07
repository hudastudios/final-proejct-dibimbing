import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdPictureInPicture } from "react-icons/md";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { TbDiscount } from "react-icons/tb";
import { LuActivitySquare } from "react-icons/lu";




export default function DashboardSidebar() {
    const menus = [
        { name: "Edit My Profile", link: "/MyProfile", icon: AiOutlineUser },
        { name: "User List", link: "/DashboardUser", icon: HiOutlineUserGroup },
        { name: "Banner", link: "/BannerDashboard", icon: MdPictureInPicture },
        { name: "Categories", link: "/CategoriesDashboard", icon: BsFillMenuButtonWideFill, margin: true },
        { name: "Promo", link: "/PromoDashboard", icon: TbDiscount },
        { name: "Activities", link: "/ActivityDashboard", icon: LuActivitySquare },
    ];
    const [open, setOpen] = useState(false);

    return (
        <section className="fixed z-50 flex gap-6 h-[1400px] mq450:max-h-[932px] mq1440:max-h-[1366px]">
            <div
                className={` bg-blue-200  ${open ? "w-72" : "w-16"
                    } duration-500 text-black px-4`}
            >
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className={open ? "flex flex-row items-start justify-start gap-[4px] pl-[10px] pb-[20px]" : 'hidden'} >
                    <div
                        className="flex flex-col items-start justify-start pt-px px-0 pb-0"
                    >
                        <img
                            className="w-6 h-6 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/radar.svg"
                        />
                    </div>
                    <div
                        className="[text-decoration:none] relative tracking-[0.01em] leading-[26px] font-semibold text-[inherit] inline-block min-w-[64px] whitespace-nowrap"
                    >Gaskan.id</div>
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-300 rounded-md`}
                        >
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${open && "hidden"
                                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
                <Link to='/'>
                    <div className={open ? "flex gap-2 mt-6" : 'hidden'}>
                        <button className="flex bg-blue-700 items-center gap-2 text-white px-4 py-2 rounded-3xl"><IoChevronBack />Back To Web Page</button>
                    </div>
                </Link>
            </div>
        </section>
    );
}