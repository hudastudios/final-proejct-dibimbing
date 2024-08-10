import ActivitySlide from "./ActivitySlider";
import { Link } from "react-router-dom";

export default function Activity() {
    return (
        <div
            className="self-stretch flex flex-row mq750:flex-col items-start justify-center pt-0 pb-[150px] mq500:pb-0 pr-[21px] pl-5 box-border max-w-full text-left text-lg text-mediumseagreen-200 font-large-regular mq750:pb-[101px] mq750:box-border mq1050:pb-[120px] mq1050:box-border mq1050:scale-[.6] mq1050:-mt-[240px] mq500:scale-[1]  mq500:-mt-[120px]"
        >
            <div
                className="w-[1199px] mq500:h-[1100px] mq500:flex-col flex flex-row items-start justify-center gap-[96px] max-w-full lg:gap-[48px] mq1050:gap-[120px] mq750:gap-[0px] mq1050:flex-row"
            >
                <div
                    data-aos="fade-right" data-aos-duration="4000" data-aos-offset="300"
                    className="h-[583px] mq500:mt-[80px] w-[530px] flex flex-row items-start justify-center relative min-w-[530px] max-w-full mq750:min-w-full mq1050:flex-1 mq1050:scale-[0.9] mq500:scale-[1.2]"
                >
                    <ActivitySlide></ActivitySlide>
                </div>
                <div
                    className="flex-1 flex flex-col items-start justify-start pt-[110.5px] px-0 pb-0 box-border min-w-[372px] max-w-full mq750:min-w-full mq750:pt-[0px] mq750:box-border mq500:-mt-[120px] mq1050:scale-110 mq500:scale-[.9]"
                >
                    <div
                        data-aos="fade-left" data-aos-duration="4000" data-aos-offset="300"
                        className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full  mq1050:scale-75 mq750:gap-[20px] mq500:items-center mq500:gap-[30px]"
                    >
                        <div
                            className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full mq500:items-center mq500:justify-center mq500:gap-[30px] mq500:scale-75"
                        >
                            <div className="flex flex-row items-start justify-start gap-[11px]">
                                <div
                                    className="flex flex-col items-start justify-start pt-3 px-0 pb-0"
                                >
                                    <div className="w-8 h-0.5 relative bg-mediumseagreen-200"></div>
                                </div>
                                <div
                                    className="relative tracking-[0.01em] leading-[26px] font-medium mq500:text-center"
                                >
                                    Travel is your friend
                                </div>
                            </div>
                            <h1
                                className="m-0 self-stretch relative text-[40px] tracking-[0.01em] leading-[64px] font-semibold font-inherit text-grayscale-900 mq750:text-[40px] mq750:leading-[38px] mq1050:text-19xl mq1050:leading-[51px] mq500:text-center"
                            >
                                The best places to travel, curated by Activities
                            </h1>
                            <div
                                className="w-[473px] relative text-base tracking-[0.01em] leading-[24px] text-gray-400 inline-block max-w-full mq500:text-center"
                            >
                                Get the most out of your travel experience. At Gaskan.id, we
                                help you find the best travel deals through our simple and
                                transparent travel booking service. Find cheap flights, last
                                minute trips and hotels from a range of travel brands,
                            </div>
                        </div>
                        <Link to='/Activity'>
                            <button
                                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start"
                            >
                                <div
                                    className="rounded-13xl overflow-hidden flex flex-row items-start justify-start py-3.5 pr-[30px] pl-[31px] whitespace-nowrap border-[1px] border-solid border-whitesmoke-200 mq500:items-center mq500:justify-center"
                                >
                                    <div
                                        className="relative text-base tracking-[0.01em] leading-[24px] font-medium font-large-regular text-grayscale-900 text-left inline-block min-w-[58px]"
                                    >
                                        View All Activities
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}