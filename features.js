import React,{useEffect,useState} from 'react';
import './Features.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

const features = [
  { title: 'Fast Delivery', description: 'Quick production and fast delivery.', image: image1},
  { title: 'Customizable', description: 'Fully customizable products to suit your brand.',image:image2 },
  { title: '24/7 Support', description: 'We’re always here to help you with any issues.', image: image3 },
];

const Features = () => {
  const [visible,setVisible]=useState(false);

  useEffect(()=>{
    const timer =setTimeout(()=>{
      setVisible(true);

    },100);
    return ()=>clearTimeout(timer);
  },[]);
  return (
    <section className="features-section">
      <h2>Our Features</h2>
      
      <div className="features">
        {features.map((feature) => (
          <div key={feature.id} className={`feature-item ${visible?'visible':''}`}>
            <img src={feature.image} alt={feature.description} className="feature-image"/>
            
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
        
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
