import React from 'react';
import Image from "next/image";

interface PriceBlock {
    title: string;
    price: number;
}

interface ArticleProps {
    content: PriceBlock[];
}

export default function Pricebox({ content }: ArticleProps) {
    return (
        <div className="col-md-4">
            <div className="pricebox">
                {content.map((item, index) => (
                    <div className="row pricerow" key={index}>
                        <div className="col-md-8">
                            <span className="price" >{item.title}</span>
                        </div>
                        <div className="col-md-4 text-end">
                            <span className="price" >{item.price},-</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}