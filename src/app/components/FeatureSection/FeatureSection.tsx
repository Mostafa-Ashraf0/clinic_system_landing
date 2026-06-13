import '../../../style/FeatureSection/featureSection.css';

type FeatureSectionProps = {
    title: string,
    titleSpan: string
    para: string,
    list: string[],
    active: boolean,
    image: string
}

const FeatureSection = ({title, titleSpan, para, list, active, image}: FeatureSectionProps)=>{
    return(
        <>
            {active?
            <div className="feature-section-container">
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
            <div className="feature-section-container">
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