import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useState, useEffect } from "react";


function ActivitySlide() {

    const [detail, setDetail] = useState([])

    const getCategories = async () => {

        try {
            const response = await axios.get(
                'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities',
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                }
            );
            setDetail(response.data.data);
            console.log(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
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
        <div className="">
            <Slider {...settings} className="!w-[460px]">
                {detail.map((item) => (<div
                    className="!w-[460px] h-[583px]"
                >

                    <div className="w-[460px] h-[583px] z-[1] bg-green-700 bg-opacity-20 rounded-211xl">
                        <img
                            className="z-[2] opacity-100 mix-blend-overlay absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-211xl max-h-full w-[460px] object-cover"
                            alt=""
                            src={item.imageUrls}
                        />
                    </div>

                </div>))}
            </Slider>
        </div>
    );
}

export default ActivitySlide;
