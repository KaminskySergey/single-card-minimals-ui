'use client'

interface IPriceCard {
    oldPrice: string
    newPrice: string
    stock: boolean
}

export default function PriceCard({ oldPrice, newPrice, stock }: IPriceCard) {
    return <div className="flex flex-col justify-start">
        <div className="line-through text-[14px] font-semibold text-[#A7B0C8]">
            <p>${oldPrice}</p>
        </div>
        <div className="flex gap-2 items-center">
            <div className="text-[32px] text-[#101D62] font-bold">
                <h3>${newPrice}</h3>
            </div>
            {stock ? (<div>
                <div className="bg-[#E6FAF5] font-semibold text-[#56CFA3] uppercase rounded-xl px-[4px] py-[2px]">
                    <span style={{ padding: '2px 4px' }}>in stock</span>
                </div>
            </div>) :
                (<div>
                    <div className="bg-[#FFDADA] font-semibold text-[#FF0000] uppercase rounded-xl px-[4px] py-[2px]">
                        <span style={{ padding: '2px 4px' }}>out of stock</span>
                    </div>
                </div>)}
        </div>
    </div>
}
