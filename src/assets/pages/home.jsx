import UserModal from "../modal/user";
import Navbar from "../navbar/navbar";
import { useState } from "react";
import LoginModal from "../modal/login";
import SignupModal from "../modal/signup";
import LogOutSuccess from "../modal/LogOutSuccessModal";
import LoginSuccessModal from "../modal/LoginSuccessModal";
import SignupSuccessModal from "../modal/SignupSuccessModal";
import HomeBanner from "../components/Banner";
import Promo from "../components/Promo";
import Categories from "../components/Categories";
import Activity from "../components/Activity";
import Footer from "../components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


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
                            className="pt-[30px] w-[1404.9px] flex flex-row  items-center justify-center gap-[44px] max-w-full mq2560:scale-[0.9] mq1050:scale-[0.7] mq500:scale-100 mw768:pt-0 mq500:flex-col mq500:pt-[60px] mq500:gap-0 mw768:flex mq2560:mt-[36px] mq500:mt-0"
                        >
                            <div
                                className=" flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border min-w-[417px] max-w-full mq1050:pt-0 mq1050:scale-[0.7]"
                            >
                                <div
                                    data-aos="fade-right" data-aos-duration="4000" data-aos-offset="300" className="pl-[40px] self-stretch flex flex-col items-start justify-start gap-[80px] shrink-0 max-w-full mq500:scale-75 mq1050:gap-[40px] mq500:gap-[40px] mq500:pl-0 mq1050:scale-75"
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
                                    <Link to='/Explore'
                                        className="cursor-pointer [border:none] py-3 px-5 bg-primary-1 w-[370px] rounded-13xl overflow-hidden flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1] hover:bg-dodgerblue"
                                    >
                                        <div
                                            className="relative text-5xl tracking-[0.01em] leading-[32px] font-medium font-large-regular text-gray-100 text-left"
                                        >
                                            Explore Now
                                        </div>
                                    </Link>
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
                    className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[150px] mq750:pb-[20px] box-border max-w-full text-center text-29xl text-grayscale-900 font-large-regular mq750:box-border mq500:pb-[60px] mq1050:scale-[0.7] mq500:scale-[0.8]"
                >
                    <Categories></Categories>
                </div>
                <div
                    className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[150px] box-border max-w-full text-left text-29xl text-grayscale-900 font-large-regular mq750:box-border mq1050:pb-[120px] mq750:pb-0 mq1050:box-border mq1050:scale-[.6] mq500:scale-[1] mq500:-mt-[40px] mq1050:-mt-[200px]"
                >
                    <Promo onOpenLoginModal={() => setLoginModalOpen(true)}></Promo>
                </div>
                <Activity></Activity>
                <Footer></Footer>
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
