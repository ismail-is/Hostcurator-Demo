import Image from "next/image";
import Link from "next/link";
import CheckImg from "../../public/images/allimg/download.svg";
function PricingCard1({ plan: { title, description, price, features, highlighted }, frequency }) {
    return (
        <div className="aximo-pricing-wrap2">
            <div className="aximo-pricing-header2">
                <h5>{title}</h5>
            </div>
            <div className="aximo-pricing-description">
                <p style={{fontSize:'16px'}}>{description}</p>
            </div>
            <div className="aximo-pricing-price2">
                <h2 style={{color:'#7947DD',fontSize:'27px'}}> 
                    $
                    {price.map((item) => {
                        if (item.id === frequency.id) {
                            return item.value;
                        }
                    })}
                    .00 / Month
                </h2>
            </div>
        
            <div className="aximo-pricing-body2">
                <ul>
                    {features.map((feature) => (
                        <li key={feature}>
                            <Image src={CheckImg} alt="check"  />
                            {feature}
                        </li>
                    ))}
                </ul>
                
            </div>
            <div style={{display:'flex',justifyContent:'center',marginBottom:'-12px'}}>
            <div className={`aximo-pricing-btn2 "}`}>
                BUY NOW
            </div>
            </div>
        
        </div>
    );
}

export default PricingCard1;
