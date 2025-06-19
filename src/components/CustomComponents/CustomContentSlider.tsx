"use client";
import Slider from "react-slick";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomContentSlider = (props: any) => {
    const data = props.data;
    console.log(data, "sliderData")
    const settings = {
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: Number(props.items) || 1,
        slidesToScroll: Number(props.items) || 1, // <== Add this line
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: Number(props.items) < 3 ? Number(props.items) : 3,
                    slidesToScroll: Number(props.items) < 3 ? Number(props.items) : 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: Number(props.items) <= 1 ? Number(props.items) : 2,
                    slidesToScroll: Number(props.items) <= 1 ? Number(props.items) : 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
        ],
    };
    return (
        <>
            {data.length > 0 && (
                <div>
                    <Slider {...settings}>
                        {data
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            .filter((items: any) => items.props !== undefined)
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            .map((info: any) => {
                                return (
                                    <div className={info.props.className} key={info.id}>
                                        {info.props.children}
                                    </div>
                                )
                            })}
                    </Slider>
                </div>
            )}
        </>
    )
}

export default CustomContentSlider;