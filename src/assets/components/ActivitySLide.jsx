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
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };

    return (

        <div>
            {detail.map((item) => (<div
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] mq1050:scale-75 mq750:scale-50"
            >
                <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-211xl max-h-full w-[460px] object-cover"
                    alt=""
                    src={item.imageUrls}
                />
            </div>))}
        </div>

    );
}

export default ActivitySlide;
