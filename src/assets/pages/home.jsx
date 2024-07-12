import UserModal from "../modal/user";
import Navbar from "../navbar/navbar";
import { useState } from "react";
import LoginModal from "../modal/login";
import SignupModal from "../modal/signup";
import LogOutSuccess from "../modal/LogOutSuccessModal";
import LoginSuccessModal from "../modal/LoginSuccessModal";
import SignupSuccessModal from "../modal/SignupSuccessModal";
import { HomeBanner } from "../components/Banner";
import Promo from "../components/Promo";
import { Categories } from "../components/Categories";


export default function Home() {
    const [userModalOpen, setIsUserModalOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [SignupModalOpen, setSignupModalOpen] = useState(false);
    const [LogOutSuccessModal, setlogOutSuccessModal] = useState(false);
    const [SignupSuccessModalopen, setSignupSuccessModal] = useState(false);
    const token = localStorage.getItem('access_token');


    return (
        <div>
            <div
                className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border leading-[normal] tracking-[normal]"
            >
                <div
                    className="self-stretch bg-gray-100 flex flex-col items-center justify-start py-0 pr-px pl-0 box-border gap-[44px] max-w-full mq768:pl-[40px] mq660:pl-[0px] mq450:pl-0 text-left text-lg text-mediumseagreen-200 font-large-regular mq750:gap-[22px]"
                >
                    <div className="self-stretch h-[900px] relative bg-gray-100 hidden"></div>
                    <div
                        className="w-[1404px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
                    >
                        <div
                            className="pt-[150px] mq1050:pt-[40px] w-[1233.9px] flex flex-row mq750:flex-col mq414:flex-col items-center justify-center gap-[44px] max-w-full mq1050:items-center mq768:scale-75 mq768:pt-0 mq660:mt-[300px] mq450:mt-[300px] mq660:mb-[140px] mq450:mb-[140px] mq768:h-[700px] mq660:scale-100 mq660:gap-0 mq450:gap-0 mq450:scale-100"
                        >
                            <div
                                className="flex-1 flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border min-w-[417px] max-w-full mq750:pt-[0px] mq750:box-border"
                            >
                                <div
                                    className="self-stretch flex flex-col items-start justify-start gap-[80px] shrink-0 max-w-full mq750:gap-[20px] mq1050:scale-75"
                                >
                                    <div
                                        className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
                                    >
                                        <div
                                            className="flex flex-row items-start justify-start gap-[10px]"
                                        >
                                            <div
                                                className="flex flex-col items-start justify-start pt-3 px-0 pb-0"
                                            >
                                                <div
                                                    className="w-8 h-0.5 relative bg-mediumseagreen-200 z-[1]"
                                                ></div>
                                            </div>
                                            <div
                                                className="relative tracking-[0.01em] leading-[26px] font-medium z-[1]"
                                            >
                                                It's time to go🚀
                                            </div>
                                        </div>
                                        <h1
                                            className="m-0 self-stretch relative text-45xl tracking-[0.01em] leading-[88px] font-semibold font-inherit text-grayscale-900 z-[1] mq750:text-19xl mq750:leading-[53px] mq1050:text-[51px] mq1050:leading-[70px]"
                                        >
                                            Don't just dream about it, plan it. Travel.
                                        </h1>
                                        <div
                                            className="w-[600px] relative text-base tracking-[0.01em] leading-[24px] text-gray-400 inline-block max-w-full z-[1]"
                                        >
                                            When you're traveling, do you want to make sure your hotel
                                            has a nice pool? Or maybe a happy hour with good deals on
                                            drinks? There
                                        </div>
                                    </div>
                                    <button
                                        className="cursor-pointer [border:none] py-3 px-5 bg-primary-1 w-[370px] rounded-13xl overflow-hidden flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1] hover:bg-dodgerblue"
                                    >
                                        <div
                                            className="relative text-5xl tracking-[0.01em] leading-[32px] font-medium font-large-regular text-gray-100 text-left"
                                        >
                                            Explore Now
                                        </div>
                                    </button>
                                    <div
                                        className="flex flex-row items-start justify-center gap-[13px] max-w-full text-xs text-gray-100 mq750:flex-wrap"
                                    >
                                        <div
                                            className="w-[157.8px] flex flex-row items-start justify-start"
                                        >
                                            <img
                                                className="h-9 w-9 relative rounded-[50%] object-cover min-h-[36px] shrink-0 z-[1]"
                                                alt=""
                                                src="/image@2x.png"
                                            />

                                            <img
                                                className="h-9 w-9 relative rounded-[50%] object-cover min-h-[36px] shrink-0 z-[2] ml-[-11.6px]"
                                                alt=""
                                                src="/image-1@2x.png"
                                            />

                                            <img
                                                className="h-9 w-9 relative rounded-[50%] object-cover min-h-[36px] shrink-0 z-[3] ml-[-11.6px]"
                                                alt=""
                                                src="/image-2@2x.png"
                                            />

                                            <img
                                                className="h-9 w-9 relative rounded-[50%] object-cover min-h-[36px] shrink-0 z-[4] ml-[-11.6px]"
                                                alt=""
                                                src="/image-3@2x.png"
                                            />

                                            <img
                                                className="h-9 w-9 relative rounded-[50%] object-cover min-h-[36px] shrink-0 z-[5] ml-[-11.6px]"
                                                loading="lazy"
                                                alt=""
                                                src="/image-4@2x.png"
                                            />

                                            <div className="h-9 flex-1 relative shrink-0 ml-[-11.6px]">
                                                <div
                                                    className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumseagreen-100 box-border w-full h-full z-[6] border-[0px] border-solid border-white"
                                                ></div>
                                                <div
                                                    className="absolute top-[9px] left-[7.2px] tracking-[0.01em] leading-[18px] font-medium inline-block min-w-[19px] whitespace-nowrap z-[7]"
                                                >
                                                    +15
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0 text-grayscale-900"
                                        >
                                            <div
                                                className="relative tracking-[0.01em] leading-[18px] z-[1]"
                                            >
                                                <span>16 people </span>
                                                <span className="font-medium">booked</span>
                                                <span> a visit in last 24 hours</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <HomeBanner></HomeBanner>
                        </div>
                    </div>
                </div>
                <div
                    className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[150px] mq750:pb-[20px] box-border max-w-full text-center text-29xl text-grayscale-900 font-large-regular mq750:box-border"
                >
                    <Categories></Categories>
                </div>
                <div
                    className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[150px] box-border max-w-full text-left text-29xl text-grayscale-900 font-large-regular mq750:box-border mq1050:pb-[120px] mq750:pb-0 mq1050:box-border"
                >
                    <Promo></Promo>
                </div>
                <div
                    className="self-stretch flex flex-row mq750:flex-col items-start justify-center pt-0 pb-[150px] pr-[21px] pl-5 box-border max-w-full text-left text-lg text-mediumseagreen-200 font-large-regular mq750:pb-[101px] mq750:box-border mq1050:pb-[120px] mq1050:box-border"
                >
                    <div
                        className="w-[1199px] flex flex-row items-start justify-center gap-[96px] max-w-full lg:gap-[48px] mq1050:gap-0 mq750:gap-[0px] mq1050:flex-wrap"
                    >
                        <div
                            className="h-[583px] w-[530px] mq750:hidden flex flex-row items-start justify-start relative min-w-[530px] max-w-full mq750:min-w-full mq1050:flex-1"
                        >
                            <div
                                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] mq1050:scale-75 mq750:scale-50"
                            >
                                <img
                                    className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-211xl max-h-full w-[460px] object-cover"
                                    alt=""
                                    src="/image-9@2x.png"
                                />

                                <img
                                    className="absolute top-[0px] left-[300px] rounded-[50%] w-[230px] h-[230.9px] object-contain"
                                    loading="lazy"
                                    alt=""
                                    src="/image-10@2x.png"
                                />
                            </div>
                        </div>
                        <div
                            className="flex-1 flex flex-col items-start justify-start pt-[110.5px] px-0 pb-0 box-border min-w-[372px] max-w-full mq750:min-w-full mq750:pt-[0px] mq750:box-border"
                        >
                            <div
                                className="self-stretch mq750:hidden flex flex-col items-start justify-start gap-[40px] max-w-full  mq1050:scale-75 mq750:gap-[20px]"
                            >
                                <div
                                    className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
                                >
                                    <div className="flex flex-row items-start justify-start gap-[11px]">
                                        <div
                                            className="flex flex-col items-start justify-start pt-3 px-0 pb-0"
                                        >
                                            <div className="w-8 h-0.5 relative bg-mediumseagreen-200"></div>
                                        </div>
                                        <div
                                            className="relative tracking-[0.01em] leading-[26px] font-medium"
                                        >
                                            Travel is your friend
                                        </div>
                                    </div>
                                    <h1
                                        className="m-0 self-stretch relative text-29xl tracking-[0.01em] leading-[64px] font-semibold font-inherit text-grayscale-900 mq750:text-10xl mq750:leading-[38px] mq1050:text-19xl mq1050:leading-[51px]"
                                    >
                                        All the best places to travel, curated by you
                                    </h1>
                                    <div
                                        className="w-[473px] relative text-base tracking-[0.01em] leading-[24px] text-gray-400 inline-block max-w-full"
                                    >
                                        Get the most out of your travel experience. At Gaskan.id, we
                                        help you find the best travel deals through our simple and
                                        transparent travel booking service. Find cheap flights, last
                                        minute trips and hotels from a range of travel brands,
                                    </div>
                                </div>
                                <div
                                    className="flex flex-row mq1050:flex-wrap items-center justify-center mq1050:justify-start gap-[32px] max-w-full text-5xl text-grayscale-900 mq750:flex-wrap mq750:gap-[16px]"
                                >
                                    <div
                                        className="flex flex-row items-center justify-start gap-[11px]"
                                    >
                                        <div
                                            className="flex flex-row items-center justify-start gap-[7px]"
                                        >
                                            <img
                                                className="h-8 w-8 relative min-h-[32px]"
                                                loading="lazy"
                                                alt=""
                                                src="/award.svg"
                                            />

                                            <div
                                                className="relative tracking-[0.01em] leading-[32px] font-semibold inline-block min-w-[24px] mq750:text-lgi mq750:leading-[26px]"
                                            >
                                                15
                                            </div>
                                        </div>
                                        <div
                                            className="relative text-sm tracking-[0.01em] leading-[20px] text-gray-400"
                                        >
                                            <p className="m-0">Years of</p>
                                            <p className="m-0">experience</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-row items-center justify-start gap-[12px]"
                                    >
                                        <div
                                            className="flex flex-row items-center justify-start gap-[6px]"
                                        >
                                            <input
                                                className="cursor-pointer m-0 h-8 w-8 relative min-h-[32px]"
                                                type="radio"
                                            />

                                            <div
                                                className="relative tracking-[0.01em] leading-[32px] font-semibold inline-block min-w-[41px] mq750:text-lgi mq750:leading-[26px]"
                                            >
                                                12K
                                            </div>
                                        </div>
                                        <div
                                            className="relative text-sm tracking-[0.01em] leading-[20px] text-gray-400"
                                        >
                                            <p className="m-0">Succesfull</p>
                                            <p className="m-0">trips</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-row items-center justify-start gap-[11px]"
                                    >
                                        <div
                                            className="flex flex-row items-center justify-start gap-[6px]"
                                        >
                                            <input
                                                className="cursor-pointer m-0 h-8 w-8 relative min-h-[32px]"
                                                type="radio"
                                            />

                                            <div
                                                className="relative tracking-[0.01em] leading-[32px] font-semibold inline-block min-w-[57px] mq750:text-lgi mq750:leading-[26px]"
                                            >
                                                95%
                                            </div>
                                        </div>
                                        <div
                                            className="relative text-sm tracking-[0.01em] leading-[20px] text-gray-400"
                                        >
                                            <p className="m-0">Happy</p>
                                            <p className="m-0">customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[150px] box-border max-w-full text-center text-29xl text-grayscale-900 font-large-regular mq750:pb-[150px] mq750:box-border"
                >
                    <div
                        className="w-[1024px] flex flex-col items-start justify-start gap-[48px] max-w-full mq750:gap-[24px]"
                    >
                        <div
                            className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
                        >
                            <div
                                className="w-[431px] flex flex-col items-start justify-start gap-[16px] max-w-full"
                            >
                                <h1
                                    className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[64px] font-semibold font-inherit mq750:text-10xl mq750:leading-[38px] mq1050:text-19xl mq1050:leading-[51px]"
                                >
                                    Why choose us
                                </h1>
                                <div
                                    className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 text-left text-base text-gray-400"
                                >
                                    <div className="relative tracking-[0.01em] leading-[24px]">
                                        Find and book a great experience.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch flex flex-row items-start justify-between gap-[20px] text-5xl mq1050:flex-wrap mq1050:justify-center"
                        >
                            <div
                                className="w-64 flex flex-col items-start justify-start gap-[32px] mq750:gap-[16px]"
                            >
                                <div
                                    className="self-stretch flex flex-row items-start justify-center py-0 px-5"
                                >
                                    <div className="h-16 w-16 relative">
                                        <div
                                            className="absolute top-[32px] left-[0px] rounded-[50%] bg-mediumseagreen-200 w-8 h-8"
                                        ></div>
                                        <img
                                            className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                                            loading="lazy"
                                            alt=""
                                            src="/map.svg"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="self-stretch flex flex-col items-start justify-start gap-[8px]"
                                >
                                    <div
                                        className="self-stretch flex flex-row items-start justify-start py-0 pr-[66px] pl-[62px] mq750:pl-5 mq750:pr-5 mq750:box-border"
                                    >
                                        <h3
                                            className="m-0 relative text-inherit tracking-[0.01em] leading-[32px] font-semibold font-inherit inline-block min-w-[127px] mq750:text-lgi mq750:leading-[26px]"
                                        >
                                            Best guide
                                        </h3>
                                    </div>
                                    <div
                                        className="self-stretch relative text-base tracking-[0.01em] leading-[24px] text-gray-400"
                                    >
                                        Our expert tour guide knows the best about traveling they will
                                        guide you alltime
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-64 flex flex-col items-start justify-start gap-[32px] mq750:gap-[16px]"
                            >
                                <div
                                    className="self-stretch flex flex-row items-start justify-center py-0 px-5"
                                >
                                    <div className="h-16 w-16 relative">
                                        <div
                                            className="absolute top-[32px] left-[0px] rounded-[50%] bg-primary-1 w-8 h-8"
                                        ></div>
                                        <img
                                            className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                                            loading="lazy"
                                            alt=""
                                            src="/24support.svg"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="self-stretch flex flex-col items-start justify-start gap-[8px]"
                                >
                                    <div
                                        className="self-stretch flex flex-row items-start justify-start py-0 px-[51px] mq750:pl-5 mq750:pr-5 mq750:box-border"
                                    >
                                        <div
                                            className="relative tracking-[0.01em] leading-[32px] font-semibold whitespace-nowrap mq750:text-lgi mq750:leading-[26px]"
                                        >
                                            Support 24/7
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch relative text-base tracking-[0.01em] leading-[24px] text-gray-400"
                                    >
                                        Our customer experience team is avaiable arround the clock to
                                        answer your questions
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-64 flex flex-col items-start justify-start gap-[32px] mq750:gap-[16px]"
                            >
                                <div
                                    className="self-stretch flex flex-row items-start justify-center py-0 px-5"
                                >
                                    <div className="h-16 w-16 relative">
                                        <div
                                            className="absolute top-[32px] left-[0px] rounded-[50%] bg-sandybrown w-8 h-8"
                                        ></div>
                                        <img
                                            className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                                            loading="lazy"
                                            alt=""
                                            src="/buildings.svg"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="self-stretch flex flex-col items-start justify-start gap-[8px]"
                                >
                                    <div
                                        className="self-stretch flex flex-row items-start justify-start py-0 px-[49px] mq750:pl-5 mq750:pr-5 mq750:box-border"
                                    >
                                        <h3
                                            className="m-0 relative text-inherit tracking-[0.01em] leading-[32px] font-semibold font-inherit whitespace-nowrap mq750:text-lgi mq750:leading-[26px]"
                                        >
                                            Luxury hotels
                                        </h3>
                                    </div>
                                    <div
                                        className="self-stretch relative text-base tracking-[0.01em] leading-[24px] text-gray-400"
                                    >
                                        We realize ideas from simple to complex, everything becomes
                                        easy to use.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="self-stretch mq750:hidden flex flex-col items-start justify-start pt-0 px-0 pb-[150px] box-border gap-[150px] max-w-full text-left text-29xl text-grayscale-900 font-large-regular lg:pb-[156px] lg:box-border mq750:gap-[30px] mq750:pb-[101px] mq750:box-border mq1050:gap-[80px]"
                >
                    <div
                        className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base font-xtra-large-semibold"
                    >
                        <div
                            className="flex flex-row items-start justify-start gap-[96px] max-w-full lg:gap-[48px] mq750:gap-[24px] mq1050:flex-wrap"
                        >
                            <div
                                className="h-[631px] w-[519px] flex flex-col items-end justify-end py-[26px] px-[18px] box-border relative min-w-[519px] max-w-full mq750:min-w-full mq1050:flex-1"
                            >
                                <div
                                    className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] mq1050:scale-75"
                                >
                                    <img
                                        className="absolute top-[0px] left-[199px] rounded-t-none rounded-b-211xl w-80 h-[583px] object-cover"
                                        alt=""
                                        src="/image-12@2x.png"
                                    />

                                    <div
                                        className="absolute top-[48px] left-[0px] rounded-t-211xl rounded-b-none w-80 h-[583px] z-[1] flex items-center justify-center"
                                    >
                                        <img
                                            className="w-full h-full z-[1] object-contain absolute left-[48px] top-[48px] [transform:scale(1.4)]"
                                            alt=""
                                            src="/image-13@2x.png"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] rounded-[80px] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))] flex flex-row items-center justify-start py-4 pr-12 pl-4 gap-[16px] z-[2]"
                                >
                                    <img
                                        className="h-14 w-14 relative rounded-[50%] object-contain"
                                        loading="lazy"
                                        alt=""
                                        src="/image-14@2x.png"
                                    />

                                    <div className="flex flex-col items-start justify-start gap-[4px]">
                                        <div className="flex flex-col items-start justify-start">
                                            <div className="flex flex-row items-start justify-start">
                                                <div
                                                    className="relative leading-[24px] font-medium inline-block min-w-[100px]"
                                                >
                                                    Alfonso Dias
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-row items-center justify-start gap-[3px] font-large-regular"
                                        >
                                            <img
                                                className="h-4 w-4 relative"
                                                loading="lazy"
                                                alt=""
                                                src="/star.svg"
                                            />

                                            <div
                                                className="relative tracking-[0.01em] leading-[24px] font-medium inline-block min-w-[24px]"
                                            >
                                                4.8
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex-1 flex flex-col items-start justify-start pt-[150.5px] px-0 pb-0 box-border min-w-[380px] max-w-full text-lg text-mediumseagreen-200 font-large-regular mq750:min-w-full mq750:pt-[98px] mq750:box-border"
                            >
                                <div
                                    className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full mq1050:scale-75"
                                >
                                    <div className="flex flex-row items-start justify-start gap-[12px]">
                                        <div
                                            className="flex flex-col items-start justify-start pt-3 px-0 pb-0"
                                        >
                                            <div className="w-8 h-0.5 relative bg-mediumseagreen-200"></div>
                                        </div>
                                        <div
                                            className="relative tracking-[0.01em] leading-[26px] font-medium inline-block min-w-[94px]"
                                        >
                                            Newslatter
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border max-w-full text-29xl text-grayscale-900"
                                    >
                                        <h1
                                            className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[64px] font-semibold font-inherit inline-block max-w-full mq750:text-10xl mq750:leading-[38px] mq1050:text-19xl mq1050:leading-[51px]"
                                        >
                                            <p className="m-0">We send you the</p>
                                            <p className="m-0">latest travel deals</p>
                                            <p className="m-0">every day.</p>
                                        </h1>
                                    </div>
                                    <div
                                        className="w-[433px] flex flex-row items-start justify-start gap-[12px] max-w-full mq750:flex-wrap"
                                    >
                                        <div
                                            className="flex-1 rounded-13xl bg-whitesmoke-100 box-border flex flex-row items-start justify-start py-3.5 px-4 gap-[8px] min-w-[160px] border-[1px] border-solid border-whitesmoke-200"
                                        >
                                            <img
                                                className="h-6 w-6 relative min-h-[24px]"
                                                alt=""
                                                src="/sms.svg"
                                            />

                                            <input
                                                className="w-[158px] [border:none] [outline:none] font-large-regular text-base bg-[transparent] h-6 relative tracking-[0.01em] leading-[24px] text-gray-300 text-left inline-block p-0"
                                                placeholder="Input email adress"
                                                type="text"
                                            />
                                        </div>
                                        <button
                                            className="cursor-pointer [border:none] py-4 px-[39px] bg-primary-1 rounded-13xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-dodgerblue"
                                        >
                                            <div
                                                className="relative text-base tracking-[0.01em] leading-[24px] font-medium font-large-regular text-gray-100 text-center inline-block min-w-[96px]"
                                            >
                                                Get In Touch
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer
                    className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-grayscale-900 font-xtra-large-semibold"
                >
                    <div
                        className="w-[1200px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq750:justify-center"
                    >
                        <div
                            className="w-[367px] flex flex-col items-start justify-center gap-[24px] max-w-full"
                        >
                            <div
                                className="self-stretch flex flex-col items-start justify-start gap-[12px]"
                            >
                                <div className="flex flex-row items-center justify-center gap-[4px]">
                                    <img
                                        className="h-6 w-6 relative overflow-hidden shrink-0"
                                        loading="lazy"
                                        alt=""
                                        src="/radar-1.svg"
                                    />

                                    <div
                                        className="relative tracking-[0.01em] leading-[26px] font-semibold inline-block min-w-[64px]"
                                    >
                                        Gaskan.id
                                    </div>
                                </div>
                                <div
                                    className="self-stretch relative text-base tracking-[0.01em] leading-[24px] font-large-regular text-gray-400"
                                >
                                    Looking to travel the world? Here are some helpful tips to get
                                    you started on your trip.
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    loading="lazy"
                                    alt=""
                                    src="/facebook.svg"
                                />

                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    loading="lazy"
                                    alt=""
                                    src="/instagram.svg"
                                />

                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    loading="lazy"
                                    alt=""
                                    src="/linkedin.svg"
                                />

                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    loading="lazy"
                                    alt=""
                                    src="/twitter.svg"
                                />
                            </div>
                        </div>
                        <div
                            className="w-[380px] flex flex-row items-start justify-start gap-[54px] max-w-full text-base mq750:flex-wrap mq750:gap-[27px]"
                        >
                            <div
                                className="relative tracking-[0.01em] leading-[24px] font-medium inline-block min-w-[71px]"
                            >
                                Discover
                            </div>
                            <div
                                className="flex-1 flex flex-col items-end justify-start gap-[40px] min-w-[166px] mq750:gap-[20px]"
                            >
                                <div
                                    className="self-stretch flex flex-row items-start justify-between gap-[20px]"
                                >
                                    <div
                                        className="relative tracking-[0.01em] leading-[24px] font-medium inline-block min-w-[36px]"
                                    >
                                        Blog
                                    </div>
                                    <div
                                        className="relative tracking-[0.01em] leading-[24px] font-medium inline-block min-w-[73px]"
                                    >
                                        About us
                                    </div>
                                    <div
                                        className="relative tracking-[0.01em] leading-[24px] font-medium inline-block min-w-[33px]"
                                    >
                                        FAQ
                                    </div>
                                </div>
                                <div
                                    className="self-stretch flex flex-col items-start justify-start gap-[16px]"
                                >
                                    <div className="self-stretch flex flex-row items-start justify-end">
                                        <div
                                            className="relative tracking-[0.01em] leading-[24px] font-medium"
                                        >
                                            Join our community 🔥
                                        </div>
                                    </div>
                                    <div
                                        className="self-stretch rounded-[90px] overflow-hidden flex flex-row items-start justify-start py-1.5 pr-[7px] pl-[15px] gap-[18px] border-[1px] border-solid border-whitesmoke-200"
                                    >
                                        <input
                                            className="w-[calc(100%_-_46px)] [border:none] [outline:none] bg-[transparent] h-[26px] flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border font-large-regular text-sm text-gray-400 min-w-[109px]"
                                            placeholder="Enter your email"
                                            type="text"
                                        />

                                        <div
                                            className="h-8 w-8 rounded-[100px] bg-primary-1 flex flex-row items-center justify-center p-1 box-border"
                                        >
                                            <img
                                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                                alt=""
                                                src="/iconsarrow-right-2line.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            {SignupSuccessModalopen ? <SignupSuccessModal onClose={() => setSignupSuccessModal(false)} openLogin={() => setLoginModalOpen(true)} ></SignupSuccessModal> : null}
            {LogOutSuccessModal ? <LogOutSuccess onClose={() => setlogOutSuccessModal(false)}></LogOutSuccess> : null}
            <Navbar logoutmodal={() => setlogOutSuccessModal(true)} onClose={() => setIsUserModalOpen(false)} onOpen={() => setIsUserModalOpen(true)} onOpenSignupModal={() => setSignupModalOpen(true)} onOpenLoginModal={() => setLoginModalOpen(true)} ></Navbar>
            {userModalOpen ? <UserModal onOpenSignupModal={() => setSignupModalOpen(true)} logoutmodal={() => setlogOutSuccessModal(true)} onOpenLoginModal={() => setLoginModalOpen(true)} onClose={() => setIsUserModalOpen(false)}></UserModal> : null}
            {loginModalOpen ? <LoginModal openSignup={() => setSignupModalOpen(true)} onClose={() => setLoginModalOpen(false)}></LoginModal> : null}
            {SignupModalOpen ? <SignupModal onOpenSuccessModal={() => setSignupSuccessModal(true)} openLogin={() => setLoginModalOpen(true)} onClose={() => setSignupModalOpen(false)}></SignupModal> : null}
        </div>
    );
}
