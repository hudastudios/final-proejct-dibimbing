import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onOpen, onOpenSignupModal, onOpenLoginModal, onClose, logoutmodal }) {
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem('access_token');
    const foto = localStorage.getItem('access_foto');

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('access_foto');

        setTimeout(() => {
            logoutmodal(), onClose()
        }, 1000)
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] self-center items-center justify-center mq500:z-0 mq500:h-0">
            <div
                className="Header bg-white self-stretch [backdrop-filter:blur(32px)] [background:linear-gradient(180deg,_rgba(252,_252,_253,_0.8),_#fcfcfd)] flex flex-row items-center justify-center py-6 box-border space-x-[321.5px] top-[0] z-[99] sticky max-w-full text-left text-lg text-black font-xtra-large-semibold mq500:space-x-[180px] mq1050:space-x-[200px] mq2560:space-x-[460px] ">
                <Link to='/'>
                    <div
                        className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0"
                    >
                        <div className="flex flex-row items-start justify-start gap-[4px] pl-[10px]">
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
                    </div>
                </Link>
                <nav
                    className="flex flex-row items-center justify-center pt-2 px-0 pb-0 mw768:w-[160px] mq750:hidden "
                >
                    <nav
                        className=" self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base text-gray-1 font-large-regular mw1050:gap-[120px] mq2560:gap-[160px] mq1050:gap-[60px]"
                    >
                        <Link to='/'>
                            <div
                                className="[text-decoration:none] relative tracking-[0.01em] leading-[24px] font-medium text-[inherit] inline-block"
                            >Home
                            </div>
                        </Link>
                        <Link to='/Promo'>
                            <div
                                className="[text-decoration:none] relative tracking-[0.01em] font-medium text-[inherit] inline-block"
                            >Promo
                            </div>
                        </Link>
                        <Link to='/Activity'>
                            <div
                                className="[text-decoration:none] relative tracking-[0.01em] font-medium text-[inherit] inline-block"
                            >Activity
                            </div>
                        </Link>
                        {token ?
                            <Link to='/DashboardUser'>
                                <div
                                    className="[text-decoration:none] relative tracking-[0.01em] font-medium text-[inherit] inline-block"
                                >Dashboard
                                </div>
                            </Link>
                            :
                            null
                        }

                    </nav>
                </nav>
                <div
                    className="flex flex-row items-center justify-center gap-[32px] text-base text-gray-1 font-large-regular"
                >
                    <div
                        className="self-stretch hidden flex-row items-center justify-center p-2 gap-[7px]"
                    >
                        <img
                            className="h-6 w-6 relative min-h-[24px]"
                            alt=""
                            src="/global.svg"
                        />

                        <div
                            className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium"
                        >
                            English
                        </div>
                    </div>
                    <div
                        className="h-10 w-10 relative hidden text-center text-sm text-gray-200"
                    >
                        <img
                            className="absolute top-[8px] left-[8px] w-6 h-6"
                            alt=""
                            src="/notification.svg"
                        />

                        <div
                            className="absolute top-[0px] left-[20px] rounded-2xl bg-mediumseagreen-100 flex flex-col items-center justify-center border-[1px] border-solid border-gray-200"
                        >
                            <div
                                className="self-stretch h-5 relative tracking-[0.01em] leading-[20px] inline-block"
                            >
                                5
                            </div>
                        </div>
                    </div>
                    <img onClick={onOpen}
                        className="h-10 w-10 relative rounded-[40px] overflow-hidden shrink-0 mq750:hidden"
                        loading="lazy"
                        alt=""
                        src={token ? foto : "/avatar.svg"}
                    />

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center py-2 rounded text-black-500 hover:text-black-400 mw750:hidden"
                    >
                        <img
                            className={`h-10 w-10 relative rounded-[40px] overflow-hidden shrink-0 ${isOpen ? "hidden" : "block"}`}
                            loading="lazy"
                            alt=""
                            src="/ci_hamburger-md.png"
                        />
                        <img
                            className={`h-10 w-10 relative rounded-[40px] overflow-hidden shrink-0 ${isOpen ? "block" : "hidden"}`}
                            loading="lazy"
                            alt=""
                            src="/carbon_close.png"
                        />
                    </button>
                </div>

            </div>
            <div onClick={() => setIsOpen(!isOpen)} className={`flex items-end justify-end ${isOpen ? 'bg-black bg-opacity-45' : 'invisible'}  `}>
                <div
                    className={` z-40 bg-white justify-self-center pb-3 mw750::block mw750:pb-0 mw750:mt-0 mw750:hidden w-[300px] ease-in-out duration-300  ${isOpen ? 'translate-x-0' : 'translate-x-full'} `}
                >
                    <ul className="z-40 h-screen md:h-auto items-center justify-center md:flex">
                        <li className="flex justify-center pb-4 pt-6">
                            <img
                                className="h-10 w-10 relative rounded-[40px] overflow-hidden shrink-0"
                                loading="lazy"
                                alt=""
                                src={token ? foto : "/avatar.svg"}
                            />
                        </li>
                        <Link to='/'>
                            <li className="text-xl text-black py-5 px-6 text-center border-b md:border-b-0  hover:bg-black hover:text-white  border-gray-300  md:hover:text-purple-600 md:hover:bg-transparent">

                                <div href="#about" onClick={() => setNavbar(!navbar)}>
                                    Home
                                </div>
                            </li>
                        </Link>
                        <Link to='/Promo'>                        <li className="text-xl text-black py-5 px-6 text-center  border-b md:border-b-0  hover:bg-black hover:text-white border-gray-300  md:hover:text-purple-600 md:hover:bg-transparent">
                            <div href="#blog" onClick={() => setNavbar(!navbar)}>
                                Promo
                            </div>
                        </li>
                        </Link>
                        <Link to='/Activity'>
                            <li className="text-xl text-black py-5 px-6 text-center border-b md:border-b-0  hover:bg-black hover:text-white  border-gray-300  md:hover:text-purple-600 md:hover:bg-transparent">
                                <div href="#contact" onClick={() => setNavbar(!navbar)}>
                                    Activity
                                </div>
                            </li>
                        </Link>
                        <Link to='/DashboardUser'>
                            <li className="text-xl text-black py-5 px-6 text-center border-b md:border-b-0  hover:bg-black hover:text-white  border-gray-300  md:hover:text-purple-600 md:hover:bg-transparent">
                                <div href="#contact" onClick={() => setNavbar(!navbar)}>
                                    Dashboard
                                </div>
                            </li>
                        </Link>

                        <div>
                            {token ? <li>
                                <div className="flex flex-col items-center gap-4 pt-6" >
                                    <button onClick={handleLogout} className="w-[200px] h-[40px] bg-red-600 rounded-3xl text-white text-[14px] font-medium">
                                        Log Out
                                    </button>
                                </div>
                            </li> :
                                <div className="flex flex-col items-center gap-4 pt-6">
                                    <li>
                                        <button onClick={onOpenLoginModal} className="w-[200px] h-[40px] bg-green-600 rounded-3xl text-[#FCFCFD] text-[14px] font-medium">
                                            Sign in
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={onOpenSignupModal} className="w-[200px] h-[40px] bg-[#3B71FE] rounded-3xl text-[#FCFCFD] text-[14px] font-medium">
                                            Sign Up
                                        </button>
                                    </li>
                                </div>}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}