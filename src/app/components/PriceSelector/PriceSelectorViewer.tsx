'use client';

import { PriceSelector } from './PriceSelector';
export interface PriceSelectorViewerProps {
    sizes?: string[];
    name: string;
    price: string ;
}

export function PriceSelectorViewer({
    sizes=['1'],
    name,
    price,
}: PriceSelectorViewerProps) {

    return (
        <PriceSelector
        sizeSelector={
            <>
                    
                {sizes?.map((size, index) => (
                    <div key ={index}></div>
                    // <label
                    //     className="label flex cursor-pointer flex-col"
                    //     key={index}
                    // >
                    //     {/* <p>{size}</p> */}
                    //     {/* <input
                    //         type="radio"
                    //         className="radio-primary radio radio-lg"
                    //     /> */}
                    // </label>
                ))}
            </>
        }
            price={
                <>
                    <p className=" py-4 text-center text-3xl font-bold">
                        {price}
                    </p>
                    {/* <AddToCartButton/> */}
                </>
            }
        />
    );
}
