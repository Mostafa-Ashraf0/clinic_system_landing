import '../../../style/PricingSection/pricingSection.css';

type CardProps = {
    name: string,
    price: number,
    per: string,
    plan: string,
    list: string[],
    badge: boolean
}


const PricingCard = ({name, price, per, plan, list, badge}: CardProps)=>{
    return(
        <div className={badge?"pricing-card featured":"pricing-card"}>
            {badge && (
            <span className="badge">
                Most Popular
            </span>
            )}
            <span className="plan-name">{name}</span>

      <div className="price">
        <h3>{price}$</h3>
        <span>{per}</span>
      </div>

      <p className="plan-desc">
        {plan}
      </p>

      <ul className="features-list">
        {list.map((feature,index)=>(
            <li key={index}>{feature}</li>
        ))}
      </ul>

      <button className="pricing-btn">
        Get Started
      </button>
    </div>
    )
}

export default PricingCard;