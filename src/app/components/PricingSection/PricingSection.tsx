import '../../../style/PricingSection/pricingSection.css';
import {pricing} from '../../../data/pricingSection';
import PricingCard from './PricingCard';

const PricingSection = ()=>{
    return(
        <section className="pricing-section">
          <div className="section-header">
            <h2>Simple Pricing</h2>
            <p>Choose the perfect plan for your clinic.</p>
          </div>

          <div className="pricing-grid">
            {pricing.map((p, index)=>(
              <PricingCard 
              key={index}
              name={p.name}
              price = {p.price}
              per= {p.per}
              plan= {p.plan}
              list={p.list}
              badge = {p.badge}
              />
            ))}
          </div>
        </section>
    )
}


export default PricingSection;