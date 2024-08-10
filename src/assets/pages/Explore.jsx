import Navbar from "../navbar/navbar";
import { useState, useEffect } from "react";
import UserModal from "../modal/user";
import LoginModal from "../modal/login";
import SignupModal from "../modal/signup";
import LogOutSuccess from "../modal/LogOutSuccessModal";
import SignupSuccessModal from "../modal/SignupSuccessModal";
import Footer from "../components/footer";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Explore() {
    const [userModalOpen, setIsUserModalOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [SignupModalOpen, setSignupModalOpen] = useState(false);
    const [LogOutSuccessModal, setlogOutSuccessModal] = useState(false);
    const [SignupSuccessModalopen, setSignupSuccessModal] = useState(false);

    const [detail, setDetail] = useState([])
    const [details, setDetails] = useState([])

    const getPromo = async () => {

        try {
            const response = await axios.get(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos`,
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                }
            );
            setDetail(response.data.data);
            // console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPromo();
    }, []);

    const getActivity = async () => {

        try {
            const response = await axios.get(
                'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities',
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                }
            );
            setDetails(response.data.data);
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getActivity();
    }, []);

    const currency = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })
    return (
        <div className=" pb-[5rem] mq500:pb-[60px]">
            <div>
                <Navbar></Navbar>
                <div className="pt-[100px]">
                    <div
                        className="pt-[20px] self-stretch flex flex-row items-center justify-center pb-[120px] pr-[21px] pl-5 box-border max-w-full lg:pb-[78px] lg:box-border mq450:pb-[33px] mq450:box-border mq1050:pb-[51px] mq1050:box-border"
                    >
                        <section
                            className="w-[1200px] flex flex-col items-start justify-center gap-[32px] max-w-full text-left text-sm text-grayscale-900 font-large-regular mq750:gap-[16px]"
                        >
                            <div
                                className="flex flex-row items-start justify-start pt-0 px-0 pb-2 gap-[7.5px] text-center  mq1050:pl-[100px] mq500:pl-0"
                            >
                                <Link to='/'>
                                    <div
                                        className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"
                                    >
                                        <div
                                            className="[text-decoration:none] relative tracking-[0.01em] leading-[20px] font-medium text-[inherit] inline-block min-w-[40px]"
                                        >Home
                                        </div>
                                    </div>
                                </Link>
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    loading="lazy"
                                    alt=""
                                    src="/iconsarrow-right-simpleline.svg"
                                />

                                <div
                                    className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-grayscale-300-400"
                                >
                                    <div
                                        className="relative text-start tracking-[0.01em] leading-[20px] font-medium inline-block min-w-[85px]"
                                    >
                                        Promo
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-29xl mq750:gap-[16px]"
                            >
                                <div
                                    className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full"
                                >
                                    <div
                                        className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px] max-w-full mq1050:pl-[100px] mq500:pl-0"
                                    >
                                        <h1
                                            className="m-0 w-[624px] relative text-inherit tracking-[0.01em] leading-[64px] font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[38px] mq1050:text-19xl mq1050:leading-[51px]"
                                        >
                                            Explore Our Destination
                                        </h1>
                                        <div
                                            className="flex flex-row items-center justify-start gap-[7px] text-sm text-mediumseagreen-100"
                                        >
                                            <div
                                                className="w-[76px] rounded-2xl box-border flex flex-row items-center justify-center py-0.5 px-[11px] whitespace-nowrap border-[1px] border-solid border-mediumseagreen-100"
                                            >
                                                <div
                                                    className="relative tracking-[0.01em] leading-[20px] font-semibold inline-block min-w-[52px]"
                                                >
                                                    11,300+
                                                </div>
                                            </div>
                                            <div
                                                className="relative tracking-[0.01em] leading-[20px] font-medium text-grayscale-300-400"
                                            >
                                                destinations worldwide
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <div className=""></div> */}

                            <div className="columns-1 sm:columns-2 lg:columns-3 md:py-10 gap-4">
                                {detail.map((item, index) => (
                                    <Link to={`/PromoDetail/${item?.id}`}>

                                        <div key={index} className="mb-4 break-inside-avoid">
                                            <img className="w-full object-cover rounded-lg" src={item.imageUrl} alt="" />
                                        </div>

                                    </Link>
                                ))}
                                {details.map((item, index) => (
                                    <Link to={`/ActivityDetail/${item?.id}`}>

                                        <div key={index} className="mb-4 break-inside-avoid">
                                            <img className="w-full object-cover rounded-lg" src={item.imageUrls} alt="" />
                                        </div>

                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
                <Footer></Footer>

            </div >
            {SignupSuccessModalopen ? <SignupSuccessModal onClose={() => setSignupSuccessModal(false)} openLogin={() => setLoginModalOpen(true)}></SignupSuccessModal> : null
            }
            {LogOutSuccessModal ? <LogOutSuccess onClose={() => setlogOutSuccessModal(false)}></LogOutSuccess> : null}
            <Navbar logoutmodal={() => setlogOutSuccessModal(true)} onClose={() => setIsUserModalOpen(false)} onOpen={() => setIsUserModalOpen(true)} onOpenSignupModal={() => setSignupModalOpen(true)} onOpenLoginModal={() => setLoginModalOpen(true)} ></Navbar>
            {userModalOpen ? <UserModal onOpenSignupModal={() => setSignupModalOpen(true)} logoutmodal={() => setlogOutSuccessModal(true)} onOpenLoginModal={() => setLoginModalOpen(true)} onClose={() => setIsUserModalOpen(false)}></UserModal> : null}
            {loginModalOpen ? <LoginModal openSignup={() => setSignupModalOpen(true)} onClose={() => setLoginModalOpen(false)}></LoginModal> : null}
            {SignupModalOpen ? <SignupModal onOpenSuccessModal={() => setSignupSuccessModal(true)} openLogin={() => setLoginModalOpen(true)} onClose={() => setSignupModalOpen(false)}></SignupModal> : null}
        </div >
    );
}