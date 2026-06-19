'use client';
import '../../../style/FeatureSection/featureSection.css';
import { useState, useEffect } from 'react';


type FeatureSectionProps = {
    title: string,
    titleSpan: string
    para: string,
    list: string[],
    active: boolean,
    image: string,
    bgColor: string
}

const FeatureSection = ({title, titleSpan, para, list, active, image, bgColor}: FeatureSectionProps)=>{
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return(
        <>
            {active && !isMobile?
            <div className="feature-section-container" style={{backgroundColor:`${bgColor}`}}>
                <div className="feature-section-text">
                    <h2>{title} <span>{titleSpan}</span></h2>
                    <p>{para}</p>
                    
                    <ul className="feature-list">
                        {list.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="feature-section-image">
                        <img src={image} alt="img" />
                </div>
            </div>:
            <div className="feature-section-container" style={{backgroundColor:`${bgColor}`}}>
                <div className="feature-section-image">
                        <img src={image} alt="img" />
                </div>
                <div className="feature-section-text">
                    <h2>{title} <span>{titleSpan}</span></h2>
                    <p>{para}</p>
                    
                    <ul className="feature-list">
                        {list.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            }
        </>
    )
};

export default FeatureSection;