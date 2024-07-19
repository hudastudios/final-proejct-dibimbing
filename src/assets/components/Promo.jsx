import AutoPlay from "./PromoSlider";
import { Link } from "react-router-dom";

export default function Promo({ onOpenLoginModal }) {

    return (
        <div
            className="w-[1200px] flex flex-col items-start mq500:items-center justify-start gap-[48px] max-w-full mq750:gap-[24px] px-[20px] mq500:px-0 "
        >
            < div
                className="self-stretch flex flex-row items-start justify-between mq1050:justify-center max-w-full gap-[20px] mq1050:flex-wrap"
            >
                <h1
                    className="m-0 w-[431px] relative text-inherit tracking-[0.01em] leading-[64px] font-semibold font-inherit inline-block shrink-0 min-w-[431px] max-w-full mq750:text-[26px] mq750:leading-[30px] mq750:min-w-full mq1050:text-19xl mq1050:leading-[51px] mq1050:flex-1 mq1050:text-center"
                >
                    Don't miss out on our latest promo!
                </h1>
                <div
                    className="w-[540px] flex flex-col items-start justify-start pt-10 mq1050:pt-0 px-0 pb-0 box-border max-w-full text-base text-gray-400"
                >
                    <div
                        className="self-stretch relative tracking-[0.01em] leading-[24px] mq1050:text-center"
                    >
                        <span
                        >All-inclusive vacations and flights to the Caribbean,
                            Indonesian, and more than
                        </span>
                        <span className="font-medium">1,300 destinations worldwide</span>
                        <span>. Now with Xplore Vacations.</span>
                    </div>
                </div>

            </div>
            <AutoPlay onOpenLoginModal={onOpenLoginModal}></AutoPlay>
            <div
                className="self-stretch flex flex-row items-start justify-center py-0 px-5"
            >
                <Link to='/Promo'>
                    <button
                        className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start"
                    >
                        <div
                            className="rounded-13xl overflow-hidden flex flex-row items-start justify-start py-3.5 pr-[30px] pl-[31px] whitespace-nowrap border-[1px] border-solid border-whitesmoke-200"
                        >
                            <div
                                className="relative text-base tracking-[0.01em] leading-[24px] font-medium font-large-regular text-grayscale-900 text-left inline-block min-w-[58px]"
                            >
                                View All Promo
                            </div>
                        </div>
                    </button>
                </Link>
            </div>
        </div >
    );
}