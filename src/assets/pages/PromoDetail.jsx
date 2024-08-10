import UserModal from "../modal/user";
import Navbar from "../navbar/navbar";
import { useState, useEffect } from "react";
import LoginModal from "../modal/login";
import SignupModal from "../modal/signup";
import LogOutSuccess from "../modal/LogOutSuccessModal";
import LoginSuccessModal from "../modal/LoginSuccessModal";
import SignupSuccessModal from "../modal/SignupSuccessModal";
import Footer from "../components/footer";
import AutoPlay from "../components/PromoSlider";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ActivitySliderPromoDetail from "../components/ActivitySliderPromoDetail";

export default function PromoDetail() {
    const [userModalOpen, setIsUserModalOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [SignupModalOpen, setSignupModalOpen] = useState(false);
    const [LogOutSuccessModal, setlogOutSuccessModal] = useState(false);
    const [SignupSuccessModalopen, setSignupSuccessModal] = useState(false);

    const [detail, setDetail] = useState([])
    const [numbers, setNumbers] = useState(0)

    const param = useParams();

    // console.log(param?.id);

    const getPromoDetail = () => {
        axios.get(
            `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${param?.id}`,
            {
                headers: {
                    apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                },
            }
        )
            .then((res) => {
                console.log(res.data.data);
                const response = res?.data?.data;
                // const page = res?.data?.page;

                setDetail(response)
            })
            .catch((err) => {
                console.log(err);
            });

    };

    useEffect(() => {
        getPromoDetail();
    }, []);

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <div className=" flex items-center justify-center">
                <div className="flex flex-col justify-center items-center pt-[100px] pb-[80px] mq1050:max-w-[768px] mq500:max-w-[375px]">
                    <div
                        className="w-[1339px] flex flex-row items-start justify-center py-0 pr-0 box-border relative max-w-full text-left text-sm text-grayscale-900 font-large-regular"
                    >
                        <div
                            className="h-px w-4 absolute !m-[0] right-[48px] bottom-[880.5px] bg-base-line"
                        ></div>
                        <div className="flex-1 flex flex-row items-start justify-center max-w-full">
                            <div
                                className="w-[1220px] pt-[20px] flex flex-col items-start justify-center py-0 pl-0 box-border gap-[32px] max-w-full mq750:gap-[32px]"
                            >
                                <div
                                    className="flex flex-row items-start justify-start gap-[7.6px] text-center mq1050:ml-[20px]"
                                >
                                    <div
                                        className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"
                                    >
                                        <a
                                            className="[text-decoration:none] relative tracking-[0.01em] leading-[20px] font-medium text-[inherit] inline-block min-w-[40px]"
                                        >Home
                                        </a>
                                    </div>
                                    <img
                                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                        loading="lazy"
                                        alt=""
                                        src="/iconsarrow-right-simpleline.svg"
                                    />
                                    <Link to='/Promo'>
                                        <div
                                            className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"
                                        >
                                            <div
                                                className="relative tracking-[0.01em] leading-[20px] font-medium inline-block min-w-[85px]"
                                            >
                                                Promo
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
                                            className="relative tracking-[0.01em] leading-[20px] font-medium inline-block min-w-[115px]"
                                        >
                                            {detail.title}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="self-stretch flex flex-row items-center justify-center max-w-full gap-[20px] text-29xl mq1050:flex-wrap"
                                >
                                    <div
                                        className="flex items-start justify-start mq750:min-w-full mq1050:flex-1 mq1050:justify-center"
                                    >
                                        <div
                                            className="w-[1200px] flex items-center justify-between mq1050:w-[740px] mq500: px-[20px] mq500:flex-col mq500:items-start mq500:gap-[20px] mq500:px-[40px] mq500:mt-[30px]"
                                        >
                                            <h1
                                                className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[64px] font-semibold font-inherit mq450:text-10xl mq450:leading-[38px] mq1050:text-19xl mq1050:leading-[51px]"
                                            >
                                                {detail.title}
                                            </h1>
                                            <div
                                                className="flex flex-row items-start justify-start gap-[15.5px] text-base text-mediumseagreen-100"
                                            >
                                                <div
                                                    className="w-[69px] [backdrop-filter:blur(8px)] rounded-xl box-border flex flex-row items-center justify-center py-0.5 px-[11px] text-sm border-[1px] border-solid border-mediumseagreen-100"
                                                >
                                                    <div
                                                        className="relative tracking-[0.01em] leading-[20px] font-medium inline-block min-w-[45px]"
                                                    >
                                                        Travel
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div
                                    className="h-[568px] w-[1220px] px-[10px] rounded-2xl flex flex-row items-start justify-center bg-no-repeat bg-[top] max-w-full mq500:h-[280px] mq500:items-center"
                                >
                                    <img
                                        className="w-[1200px] mq1050:w-[768px] relative rounded-2xl max-h-full object-cover max-w-full"
                                        alt=""
                                        src={detail.imageUrl}
                                    />
                                </div>
                                <div
                                    className="self-stretch flex flex-row items-start justify-start gap-[88px] py-[10px] px-[20px] max-w-full text-13xl lg:gap-[44px] mq750:gap-[22px] mq1050:flex-wrap mq500:px-[40px]"
                                >
                                    <div
                                        className="flex-1 flex flex-col items-start justify-start gap-[72px] min-w-[451px] max-w-full mq450:gap-[18px] mq750:gap-[36px] mq750:min-w-full"
                                    >
                                        <div
                                            className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]"
                                        >
                                            <div
                                                className="flex flex-col items-start justify-start gap-[24px] max-w-full"
                                            >
                                                <h1
                                                    className="m-0 h-10 relative text-inherit tracking-[0.01em] leading-[40px] font-semibold font-inherit inline-block mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]"
                                                >
                                                    {detail.title}
                                                </h1>
                                                <h1>{detail.description}</h1>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start gap-[32px] text-center text-base mq750:flex-wrap"
                                            >
                                                <div
                                                    className="flex-1 flex flex-row items-start justify-center gap-[12px] min-w-[169px]"
                                                >
                                                    <img
                                                        className="h-6 w-6 relative"
                                                        loading="lazy"
                                                        alt=""
                                                        src="/buildings1.svg"
                                                    />

                                                    <div
                                                        className="flex-1 flex flex-col items-start justify-center gap-[8px]"
                                                    >
                                                        <div
                                                            className="relative tracking-[0.01em] leading-[24px] font-semibold whitespace-nowrap"
                                                        >
                                                            Terms and Condition                                                    </div>
                                                        <div
                                                            className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] text-grayscale-300-400 text-left"
                                                        >
                                                            {detail.terms_condition}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="w-[199px] flex flex-row items-start justify-start gap-[12px]"
                                                >
                                                    <img
                                                        className="h-6 w-6 relative"
                                                        loading="lazy"
                                                        alt=""
                                                        src="/profiletick.svg"
                                                    />

                                                    <div
                                                        className="flex-1 flex flex-col items-start justify-center gap-[8px]"
                                                    >
                                                        <div
                                                            className="relative tracking-[0.01em] leading-[24px] font-semibold inline-block min-w-[104px]"
                                                        >
                                                            Promo Code
                                                        </div>
                                                        <div
                                                            className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] text-grayscale-300-400 text-left"
                                                        >
                                                            {detail.promo_code}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="w-[203px] flex flex-row items-start justify-start gap-[12px]"
                                                >
                                                    <img
                                                        className="h-6 w-6 relative"
                                                        loading="lazy"
                                                        alt=""
                                                        src="/calendar-remove.png"
                                                    />

                                                    <div
                                                        className="flex-1 flex flex-col items-start justify-center gap-[8px]"
                                                    >
                                                        <div
                                                            className="relative tracking-[0.01em] leading-[24px] font-semibold"
                                                        >
                                                            Free cancellation
                                                        </div>
                                                        <div
                                                            className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] text-grayscale-300-400 text-left"
                                                        >
                                                            Places in free cancellation for 48 hours.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[418px] rounded-xl bg-base-colors-background box-border flex flex-col items-start justify-center py-[22px] pl-[23px] gap-[32px] min-w-[418px] max-w-full text-base text-grayscale-200 border-[1px] border-solid border-base-line mq450:gap-[16px] mq450:pt-5 mq450:pb-5 mq450:box-border mq750:min-w-full mq1050:flex-1 mq500:pl-0"
                                    >
                                        <div
                                            className="flex flex-col items-start justify-start text-13xl "
                                        >
                                            <div
                                                className="relative tracking-[0.01em] inline-block min-w-[121px] whitespace-nowrap"
                                            >
                                                <s>
                                                    {formatter.format(detail?.minimum_claim_price)}
                                                </s>
                                                <span className="text-sm text-gray-700 leading-[20px] font-medium"
                                                >/Night</span>
                                            </div>
                                            <div
                                                className="relative tracking-[0.01em] text-grayscale-900 inline-block min-w-[121px] whitespace-nowrap"
                                            >
                                                <span className="text-[30px] font-semibold">
                                                    {formatter.format(detail?.promo_discount_price)}
                                                </span>
                                                <span className="text-sm leading-[20px] font-medium"
                                                >/Night</span>
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch flex flex-row items-start justify-start max-w-full text-base-colors-background"
                                        >
                                            <div
                                                className="flex-1 rounded-13xl bg-primary-1 overflow-hidden flex flex-row items-center justify-center py-4 px-5 box-border max-w-full"
                                            >
                                                <div
                                                    className="relative tracking-[0.01em] leading-[24px] font-medium inline-block min-w-[62px]"
                                                >
                                                    Reserve
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-29xl text-grayscale-900 font-large-regular"
                    >
                        <div
                            className="pt-[80px] mq500:pt-[30px] pb-[120px] w-[1200px] flex flex-col items-center justify-start gap-[48px] max-w-full mq750:gap-[24px] mq500:mt-[40px]"
                        >
                            <h1
                                className=" w-[1200px] mq500:pl-[20px] flex items-start m-0 h-16 relative text-inherit tracking-[0.01em] leading-[64px] font-semibold font-inherit max-w-full mq450:text-10xl mq450:leading-[38px] mq1050:text-19xl mq1050:leading-[51px]"
                            >
                                Discover more
                            </h1>
                            <div className="mq1050:max-w-[740px] mq1050:overflow-hidden mq500:max-w-[375px]">
                                <ActivitySliderPromoDetail></ActivitySliderPromoDetail>
                            </div>
                            <div
                                className="self-stretch flex flex-row items-start justify-center py-0 px-5"
                            >
                                <button
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start"
                                >
                                    <div
                                        className="rounded-13xl overflow-hidden flex flex-row items-start justify-start py-3.5 pr-[30px] pl-[31px] whitespace-nowrap border-[1px] border-solid border-base-line"
                                    >
                                        <a
                                            className="[text-decoration:none] relative text-base tracking-[0.01em] leading-[24px] font-medium font-large-regular text-grayscale-900 text-left inline-block min-w-[58px]"
                                        >View all
                                        </a>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                    {SignupSuccessModalopen ? <SignupSuccessModal onClose={() => setSignupSuccessModal(false)} openLogin={() => setLoginModalOpen(true)} ></SignupSuccessModal> : null}
                    {LogOutSuccessModal ? <LogOutSuccess onClose={() => setlogOutSuccessModal(false)}></LogOutSuccess> : null}
                    <Navbar logoutmodal={() => setlogOutSuccessModal(true)} onClose={() => setIsUserModalOpen(false)} onOpen={() => setIsUserModalOpen(true)} onOpenSignupModal={() => setSignupModalOpen(true)} onOpenLoginModal={() => setLoginModalOpen(true)} ></Navbar>
                    {userModalOpen ? <UserModal onOpenSignupModal={() => setSignupModalOpen(true)} logoutmodal={() => setlogOutSuccessModal(true)} onOpenLoginModal={() => setLoginModalOpen(true)} onClose={() => setIsUserModalOpen(false)}></UserModal> : null}
                    {loginModalOpen ? <LoginModal openSignup={() => setSignupModalOpen(true)} onClose={() => setLoginModalOpen(false)}></LoginModal> : null}
                    {SignupModalOpen ? <SignupModal onOpenSuccessModal={() => setSignupSuccessModal(true)} openLogin={() => setLoginModalOpen(true)} onClose={() => setSignupModalOpen(false)}></SignupModal> : null}
                </div>
            </div>
        </div >
    );
}