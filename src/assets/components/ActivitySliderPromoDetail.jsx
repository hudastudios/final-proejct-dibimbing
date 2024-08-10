import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function ActivitySliderPromoDetail({ onOpenLoginModal }) {
    const [detail, setDetail] = useState([])
    const token = localStorage.getItem('access_token');
    const getPromo = async () => {

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
            // console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPromo();
    }, []);

    const currency = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })

    const breakpoint = {
        // Small screen / phone
        sm: 576,
        // Medium screen / tablet
        md: 768,
        // Large screen / desktop
        lg: 992,
        // Extra large screen / wide desktop
        xl: 1200
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 520,
                settings: {
                    className: "center",
                    infinite: true,
                    centerPadding: "120px",
                    slidesToShow: 3,
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
        <div className="flex items-center justify-center ">
            <div className=" w-[1160px] h-[420px] [mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-20px),transparent_100%)]">
                <Slider {...settings}>
                    {detail.map((item) => (
                        <Link to={`/ActivityDetail/${item?.id}`} className="flex flex-col items-center justify-center scale-[0.9] hover:scale-[1.01] mq660:hover:scale-[1.01]">
                            <div className="flex flex-col items-center gap-2 mq500:w-[282px] mq500:ml-[50px]">
                                <div className="z-[2] w-[282px] h-[282px] overflow-hidden rounded-xl bg-green-700 bg-opacity-20">
                                    <img
                                        className="z-[1] w-[282px] h-[282px] mix-blend-overlay rounded-xl object-cover"
                                        loading="lazy"
                                        alt=""
                                        src={item.imageUrls}
                                    />
                                </div>

                                <div
                                    className="self-stretch flex flex-row items-start justify-start py-0 px-4"
                                >
                                    <div
                                        className="flex-1 flex flex-col justify-start gap-[4px]"
                                    >
                                        <div
                                            className="self-stretch flex flex-row items-start justify-between gap-[20px]"
                                        >
                                            <div
                                                className="text-[20px] truncate w-[200px] tracking-[0.01em] leading-[28px] font-medium mq750:text-base mq750:leading-[22px]"
                                            >
                                                {item.title}
                                            </div>
                                            <div
                                                className="flex flex-row items-start justify-start gap-[3px] text-base"
                                            >
                                                <div
                                                    className="flex flex-col items-start justify-start pt-1 px-0 pb-0"
                                                >
                                                    <img
                                                        className="w-4 h-4 relative"
                                                        loading="lazy"
                                                        alt=""
                                                        src="/star.svg"
                                                    />
                                                </div>
                                                <div
                                                    className="relative tracking-[0.01em] leading-[24px] font-medium inline-block min-w-[24px]"
                                                >
                                                    4.8
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className=" text-[16px] truncate w-[250px] tracking-[0.01em] leading-[24px] text-gray-400 inline-block min-w-[72px]"
                                        >
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="self-stretch flex flex-row items-start justify-start py-0 px-4"
                                >
                                    <div className="h-px flex-1 relative bg-whitesmoke-200"></div>
                                </div>
                                <div
                                    className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-base text-grayscale-400"
                                >
                                    <div
                                        className="flex flex-col items-start justify-between gap-[0px]"
                                    >
                                        <div
                                            className="flex flex-col items-start justify-start pt-1 px-0 pb-0"
                                        >
                                            <div
                                                className="relative tracking-[0.01em] leading-[24px] inline-block min-w-[67px]"
                                            >
                                                <s>{(item.price).toLocaleString('id-ID', {
                                                    style: 'currency',
                                                    currency: 'IDR'
                                                })}</s>
                                            </div>
                                        </div>
                                        <div
                                            className="relative tracking-[0.01em] font-medium text-grayscale-900 inline-block min-w-[94px] whitespace-nowrap text-5xl"
                                        >
                                            <span className="text-[20px]">{(item.price_discount).toLocaleString('id-ID', {
                                                style: 'currency',
                                                currency: 'IDR'
                                            })}</span>
                                            <span className="text-xs leading-[18px]"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>))}
                </Slider>
            </div>
        </div>
    );
}
