import CategoriesSlide from "./CategoriesSlide";

export default function Categories() {
    return (
        <div
            className="flex-1 flex flex-col items-center justify-center pt-[150px] mq500:pt-0 mq1050:pt-[80px] pb-0 px-5 box-border gap-[40px] max-w-full mq750:gap-[20px] mq750:pt-[78px] mq750:pb-[78px] mq750:box-border mq500:scale-[.8] mq500:-mt-0 mq1050:scale-[.6] mq1050:-mt-[160px] mq2560:pt-[40px]"
        >
            <div
                className="w-[634px] mq750:max-w-[320px] flex flex-col items-center justify-start gap-[16px] max-w-full"
            >
                <h1
                    className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[64px] font-semibold font-inherit mq750:text-[26px] mq750:leading-8 mq1050:text-19xl mq1050:leading-[51px]"
                >
                    Explore the site through travel categories
                </h1>
                <div
                    className="relative text-base tracking-[0.01em] leading-[24px] text-left"
                >
                    Find and book a great experience.
                </div>
            </div>
            <CategoriesSlide></CategoriesSlide>
        </div>
    );
}