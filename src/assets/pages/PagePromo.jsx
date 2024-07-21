import Navbar from "../navbar/navbar";
import { useState, useEffect, useParams } from "react";
import UserModal from "../modal/user";
import LoginModal from "../modal/login";
import SignupModal from "../modal/signup";
import LogOutSuccess from "../modal/LogOutSuccessModal";
import LoginSuccessModal from "../modal/LoginSuccessModal";
import SignupSuccessModal from "../modal/SignupSuccessModal";
import Footer from "../components/footer";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PagePromo() {
    const [userModalOpen, setIsUserModalOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [SignupModalOpen, setSignupModalOpen] = useState(false);
    const [LogOutSuccessModal, setlogOutSuccessModal] = useState(false);
    const [SignupSuccessModalopen, setSignupSuccessModal] = useState(false);

    const [detail, setDetail] = useState([])

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
                                            Exclusive Promo For You!
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
                            <div
                                className="self-stretch flex flex-wrap items-start justify-start text-xs font-body-text-small-semibold mq1050:ml-[120px] mq1050:gap-[60px] mq1050:pb-[60px] mq500:mb-[40px] mq500:ml-0 mq500:justify-center"
                            >
                                {detail.map((item) => (
                                    <Link to={`/PromoDetail/${item?.id}`} className="flex flex-col items-center justify-center scale-[0.9] hover:scale-[1.01] mq660:hover:scale-[1.01]">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="z-[2] w-[282px] h-[282px] overflow-hidden rounded-xl bg-green-700 bg-opacity-20">
                                                <img
                                                    className="z-[1] w-[282px] h-[282px] mix-blend-overlay rounded-xl object-cover"
                                                    loading="lazy"
                                                    alt=""
                                                    src={item.imageUrl}
                                                />
                                            </div>

                                            <div
                                                className="self-stretch flex flex-row items-start justify-start py-0 px-4"
                                            >
                                                <div
                                                    className="flex-1 flex flex-col justify-start gap-[4px]"
                                                >
                                                    <div
                                                        className="self-stretch flex flex-row items-start justify-between gap-[20px]"
                                                    >
                                                        <div
                                                            className="text-[20px] truncate w-[200px] tracking-[0.01em] leading-[28px] font-medium mq750:text-base mq750:leading-[22px]"
                                                        >
                                                            {item.title}
                                                        </div>
                                                        <div
                                                            className="flex flex-row items-start justify-start gap-[3px] text-base"
                                                        >
                                                            <div
                                                                className="flex flex-col items-start justify-start pt-1 px-0 pb-0"
                                                            >
                                                                <img
                                                                    className="w-4 h-4 relative"
                                                                    loading="lazy"
                                                                    alt=""
                                                                    src="/star.svg"
                                                                />
                                                            </div>
                                                            <div
                                                                className="relative tracking-[0.01em] leading-[24px] font-medium inline-block min-w-[24px]"
                                                            >
                                                                4.8
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className=" text-[16px] truncate w-[250px] tracking-[0.01em] leading-[24px] text-gray-400 inline-block min-w-[72px]"
                                                    >
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start py-0 px-4"
                                            >
                                                <div className="h-px flex-1 relative bg-whitesmoke-200"></div>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-base text-grayscale-400"
                                            >
                                                <div
                                                    className="flex flex-col items-start justify-between gap-[0px]"
                                                >
                                                    <div
                                                        className="flex flex-col items-start justify-start pt-1 px-0 pb-0"
                                                    >
                                                        <div
                                                            className="relative tracking-[0.01em] leading-[24px] inline-block min-w-[67px]"
                                                        >
                                                            <s>{(item.minimum_claim_price).toLocaleString('id-ID', {
                                                                style: 'currency',
                                                                currency: 'IDR'
                                                            })}</s>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="relative tracking-[0.01em] font-medium text-grayscale-900 inline-block min-w-[94px] whitespace-nowrap text-5xl"
                                                    >
                                                        <span className="text-[20px]">{(item.promo_discount_price).toLocaleString('id-ID', {
                                                            style: 'currency',
                                                            currency: 'IDR'
                                                        })}</span>
                                                        <span className="text-xs leading-[18px]"></span>
                                                    </div>
                                                </div>
                                            </div>
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