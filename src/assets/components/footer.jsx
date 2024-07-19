export default function Footer() {
    return (
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
    );
}