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
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    className: "center",
                    infinite: true,
                    centerPadding: "120px",
                    slidesToShow: 6,
                    swipeToSlide: true,
                    autoplay: true,
                    afterChange: function (index) {
                        console.log(
                            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                        );
                    }
                }
            },
            {
                breakpoint: 460,
                settings: {
                    className: "center",
                    infinite: true,
                    centerPadding: "120px",
                    slidesToShow: 4,
                    swipeToSlide: true,
                    autoplay: true,
                    afterChange: function (index) {
                        console.log(
                            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                        );
                    }
                }
            }
        ]


    };
    return (
        <div className="flex justify-center items-center gap-[200px] ">
            <div className="h-[150px] w-[1120px] mq500:w-[600px] mq1050:w-[px]">
                <Slider {...settings} className="">
                    {detail.map((item) => (<div className="hover:scale-[1.2] mq500:hover:scale-100"
                    >
                        <div className=" flex items-center justify-center gap-6 pl-[80px] mq500:pl-0 mq500:flex-col pt-4">
                            <div className="z-[2] h-[120px] w-[120px] rounded-[50%] bg-green-700 bg-opacity-20">
                                <img
                                    className="z-[1] h-[120px] w-[120px] relative rounded-[50%] mq750:flex-1 object-cover mix-blend-overlay"
                                    loading="lazy"
                                    alt=""
                                    src={item.imageUrl}
                                />
                            </div>
                            <div
                                className="flex-1 flex flex-col items-start mq500:items-center mq500:justify-center mq1050:items-start mq750:items-start justify-start min-w-[88px]"
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
