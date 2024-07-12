import { useState, useEffect } from "react";
import axios from "axios";

export function HomeBanner() {
    const [detail, setDetail] = useState({})
    const [detailtwo, setDetailTwo] = useState({})
    const [detailthree, setDetailThree] = useState({})

    const getBanner = async () => {

        try {
            const response = await axios.get(
                'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners',
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                }
            );
            setDetail(response.data.data[0]);
            setDetailTwo(response.data.data[1])
            setDetailThree(response.data.data[4])

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBanner();
    }, []);

    return (
        <div className="h-[768px] mq450:h-[700px] w-[548.9px] relative shrink-0 max-w-full z-[1] flex items-end justify-center mq1050:scale-75 mq450:scale-[.68]">
            <div className=" animate-bounce overflow-hidden absolute z-[2] rounded-full bg-green-700 w-[230px] h-[230px] mb-[530px] ml-[100px] bg-opacity-20 border-8 border-white">
                <img
                    className=" scale-[2.5] mix-blend-overlay"
                    loading="lazy"
                    alt=""
                    src={detailtwo.imageUrl}
                />
            </div>
            <div className=" animate-bounce overflow-hidden absolute z-[2] rounded-full bg-green-700 w-[140px] h-[140px] mb-[400px] ml-[420px] mq414:ml-[360px] bg-opacity-20 border-8 border-white">
                <img
                    className=" scale-[2.5] mix-blend-overlay"
                    loading="lazy"
                    alt=""
                    src={detailthree.imageUrl}
                />
            </div>
            <div
                className=" overflow-hidden border-8 border-white h-[693px] w-[460px] relative shrink-0 max-w-full z-[1] flex items-center justify-center rounded-t-full bg-green-700 bg-opacity-20"
            >
                <img
                    className=" scale-[2.5] mix-blend-overlay mq450:scale-[3]"
                    loading="lazy"
                    alt=""
                    src={detail.imageUrl}
                />
            </div>
        </div>
    );
}