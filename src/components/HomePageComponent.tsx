

import { Button } from "@mui/material"
import CarouselCard from "./productCard/carousel/CarouselCard"
import PriceCard from "./productCard/price/PriceCard"
import RatingStar from "./productCard/rating/RatingStar"
import SelectField from "./productCard/select/SelectField"
import Text from "./productCard/text/Text"
import Title from "./productCard/title/Title"
import AccordionCard from "./productCard/accordion/AccordionCard"
import ProductCard from "./productCard/ProductCard"
import { IProductCard } from "../interface/card.interface"

interface IHomePageComponent { }

const colors = ['gray', 'blue', 'red', 'black'];

const quantities = ['1', '2', '3', '4', '5'];

const heights = ['45cm', '50cm', '55cm', '60cm'];

const CARD: IProductCard = {
    name: 'ZOE™ Elegant Chair',
    rating: {
        star: 4,
        quantity: 28
    },
    price: {
        oldPrice: '590.00',
        newPrice: '390.00'
    },
    colors: ['gray', 'blue', 'red', 'black'],

    quantities: ['1', '2', '3', '4', '5'],

    heights: ['45cm', '50cm', '55cm', '60cm'],
    description: 'ZOE™ Elegant Chair: a perfect blend of style and comfort. Elevate any space with its elegant design and luxurious feel. Available in various colors and sizes.',
    characteristics: [
        {
            name: 'Stylish and elegant design'
        },
        {
            name: 'High-quality materials'
        }, {
            name: 'Comfortable seating'
        },
        {
            name: 'Available in various colors and sizes'
        }, {
            name: 'Versatile for different spaces and purposes'
        }
    ],
    reviews: 'ZOE™ Elegant Chair has transformed my dining area! The design is simply stunning and the comfort level is unmatched. The quality of craftsmanship is evident in every detail. I highly recommend it to anyone looking for a stylish and comfortable seating option.'
}



export default function HomePageComponent({ }: IHomePageComponent) {
    return (
        <main className="flex min-h-screen flex-col bg-[#E9EBED] items-center justify-between px-24 pt-[32px] pb-[16px]">
            <ProductCard card={CARD}/>
        </main>
    )
}
