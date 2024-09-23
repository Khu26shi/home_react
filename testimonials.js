import React from 'react';
import './Testimonials.css';

const testimonials = [
  { name: 'John Doe', feedback: 'Great service and quality products!' },
  { name: 'Jane Smith', feedback: 'I love the customizable options!' },
  { name: 'Cathey Andrews', feedback:' I loved the on time delivery and reasonable prices'},
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>"{testimonial.feedback}"</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
