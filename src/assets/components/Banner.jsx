import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeBanner() {
    const [detail, setDetail] = useState([])
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
            setDetail(response.data.data);
            setDetailTwo(response.data.data[1])
            setDetailThree(response.data.data[4])
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBanner();
    }, []);

    const settings = {
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 3000,

    };

    return (
        <div className="h-[768px] w-[548.9px] relative shrink-0 max-w-full flex items-end justify-center mw375:scale-[.70] mw375:h-[580px]">

            <Slider {...settings} className="!w-[460px]">
                {detail.map((item) => (<div
                    className=" overflow-hidden border-8 border-white h-[690px] w-[460px] relative shrink-0 max-w-full flex items-center justify-center rounded-t-full bg-green-700 bg-opacity-20"
                >
                    <div className="overflow-hidden border-8 border-white h-[693px] w-[460px] relative shrink-0 max-w-full flex items-center justify-center rounded-t-full bg-green-700 bg-opacity-20">
                        <img
                            className="h-[693px] w-[] mix-blend-overlay mq500:scale-[3] object-cover"
                            loading="lazy"
                            alt=""
                            src={item.imageUrl}
                        />
                    </div>
                </div>))}
            </Slider>
        </div>
    );
}