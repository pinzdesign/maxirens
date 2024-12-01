import React from 'react';
import Image from "next/image";

interface ContentBlock {
    title: string;
    text: string; 
}

interface ArticleProps {
    imagePath: string;
    imageAlt?: string;
    imageCircle?: boolean;
    content: ContentBlock[];
}

const IntroArticle: React.FC<ArticleProps> = ({ 
    imagePath, 
    imageAlt = "", 
    imageCircle = false, 
    content 
}) => {

    const imageClass = imageCircle ? 'img-round' : '';

    return (
        <div className='container'>
            <div className='row'>
                <div className={`col-md-4 ${imageClass}`}>
                    <Image src={imagePath} alt={imageAlt} width={600} height={600} />
                </div>
                <div className='col-md-8'>
                    {content.map((block, index) => (
                        <div key={index}>
                            <h3>{block.title}</h3>
                            <p>{block.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IntroArticle;
