'use client'

import { Button } from "@mui/material"
import CarouselCard from "./carousel/CarouselCard"
import PriceCard from "./price/PriceCard"
import RatingStar from "./rating/RatingStar"
import SelectField from "./select/SelectField"
import Text from "./text/Text"
import Title from "./title/Title"
import AccordionCard from "./accordion/AccordionCard"
import { IProductCard } from "@/interface/card.interface"

interface ICard {
    card: IProductCard
}

const colors = ['gray', 'blue', 'red', 'black'];

const quantities = ['1', '2', '3', '4', '5'];

const heights = ['45cm', '50cm', '55cm', '60cm'];

export default function ProductCard({card}: ICard) {
    return (
        <div className="flex gap-11 w-[70%] bg-white rounded-md p-3 shadow-2xl">

                <div className="w-[50%]">
                    <CarouselCard />
                </div>
                <div className="w-[50%]">
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-3">
                            <Title />
                            <RatingStar value={card.rating.star} quantity={card.rating.quantity} />
                            <Text />
                        </div>
                        <div>
                            <PriceCard oldPrice={card.price.oldPrice} newPrice={card.price.newPrice} stock={true}/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex grow gap-3">
                            <SelectField name={'Color'} value={card.colors}/>
                            <SelectField name={'Quantity'} value={card.quantities}/>
                            <SelectField name={'Height'} value={card.heights}/>
                            </div>
                            <div className="w-[50%]">
                            <Button variant="contained" style={{backgroundColor: '#633AFF', borderRadius: '8px'}} className="w-full bg-[#633AFF]">Add to cart</Button>
                            </div>
                            
                        </div>
                        <div>
                            <AccordionCard description={card.description} characteristics={card.characteristics} reviews={card.reviews}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
