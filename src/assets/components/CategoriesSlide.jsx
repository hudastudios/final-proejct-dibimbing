import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useState, useEffect } from "react";

function CategoriesSlide() {

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

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className="flex justify-center items-center">
            <div className="h-[150px] w-[1120px] ">
                <Slider {...settings}>
                    {detail.map((item) => (<div className="hover:scale-[1.2]"
                    >
                        <div className=" flex items-center justify-center gap-6 pl-[80px] pt-4">
                            <div className="z-[2] h-[120px] w-[120px] rounded-[50%] bg-green-700 bg-opacity-20">
                                <img
                                    className="z-[1] h-[120px] w-[120px] relative rounded-[50%] mq750:flex-1 object-cover mix-blend-overlay"
                                    loading="lazy"
                                    alt=""
                                    src={item.imageUrl}
                                />
                            </div>
                            <div
                                className="flex-1 flex flex-col items-start mq1050:items-center mq750:items-start justify-start min-w-[88px]"
                            >
                                <div
                                    className="font-medium text-[18px]"
                                >
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    </div>))}
                </Slider>
            </div>
        </div>
    );
}

export default CategoriesSlide;
