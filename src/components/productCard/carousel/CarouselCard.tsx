'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
interface ICarouselCard { }
interface IImages {
    image: string;
}

const images: IImages[] = [
    {
        image: '/chair01.jpg'
    },
    {
        image: '/chair02.jpg'
    },
    {
        image: '/chair03.jpg'
    },
    {
        image: '/chair04.jpg'
    },
    {
        image: '/chair05.jpg'
    },
];

export default function CarouselCard() {
    const settings = {
        customPaging: function (i: number) {
            return (
                <div className="relative w-[80px] h-[80px] ">
                    <Image src={`/chair0${i + 1}.jpg`} className="rounded-lg" fill alt={images[i].image} />
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    images.map((el, index) => (
                        <div key={index} className="relative w-[300px] h-[500px]">
                            <Image src={el.image} className="rounded-lg" fill alt={el.image} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}
