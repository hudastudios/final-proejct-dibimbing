import ActivitySlide from "./ActivitySLide";

export default function Activity() {
    return (
        <div
            className="self-stretch flex flex-row mq750:flex-col items-start justify-center pt-0 pb-[150px] pr-[21px] pl-5 box-border max-w-full text-left text-lg text-mediumseagreen-200 font-large-regular mq750:pb-[101px] mq750:box-border mq1050:pb-[120px] mq1050:box-border"
        >
            <div
                className="w-[1199px] flex flex-row items-start justify-center gap-[96px] max-w-full lg:gap-[48px] mq1050:gap-0 mq750:gap-[0px] mq1050:flex-wrap"
            >
                <div
                    className="h-[583px] w-[530px] mq750:hidden flex flex-row items-start justify-start relative min-w-[530px] max-w-full mq750:min-w-full mq1050:flex-1"
                >
                    <ActivitySlide></ActivitySlide>
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
    );
}