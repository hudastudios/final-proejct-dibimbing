import axios from "axios";
import { useState, useEffect } from "react";

export function Categories() {
    const [detail, setDetail] = useState([])

    const getCategories = async () => {

        try {
            const response = await axios.get(
                'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories',
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                }
            );
            setDetail(response.data.data);
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div
            className="flex-1 flex flex-col items-center justify-center pt-[150px] mq414:pt-0 mq1050:pt-[80px] pb-0 px-5 box-border gap-[40px] max-w-full mq750:gap-[20px] mq750:pt-[78px] mq750:pb-[78px] mq750:box-border"
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

            <div
                className="w-[1100px] overflow-scroll flex mq750:flex-col mq750:justify-start items-center justify-center gap-[32px] max-w-full text-left text-lg mq750:gap-[16px]"
            >

                {detail.map((item) => (<div className="rounded-xl flex mq1050:flex-col mq750:flex-row items-center justify-center box-border gap-[16px] min-w-[229px] max-w-full mq750:flex-wrap mq750:pr-5 mq750:box-border"
                >
                    <div className="z-[2] h-[120px] w-[120px] rounded-[50%] bg-green-700 bg-opacity-20">
                        <img
                            className="z-[1] h-[120px] w-[120px] relative rounded-[50%] mq750:flex-1 object-cover mix-blend-overlay"
                            loading="lazy"
                            alt=""
                            src={item.imageUrl}
                        />
                    </div>
                    <div
                        className="flex-1 flex flex-col items-start mq1050:items-center mq750:items-start justify-start gap-[16px] min-w-[88px]"
                    >
                        <div
                            className="self-stretch relative tracking-[0.01em] leading-[26px] font-medium"
                        >
                            {item.name}
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}