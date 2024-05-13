import React, { useEffect, useState } from "react";
import ShowTestimonial from "../ShowTestimonial/ShowTestimonial";

const Testimonial = () => {
  const [allTestimonials, setAllTestimonials] = useState([]);
  useEffect(() => {
    fetch("https://sneaky-care-server.onrender.com/getTestimonial")
      .then((res) => res.json())
      .then((data) => setAllTestimonials(data));
  }, []);
  return (
    <section style={{ backgroundColor: "#eef1fa" }}>
      <div className="mt-5 pt-5 pb-5">
        <div className="container pb-5">
          <h4 className="text-center text-uppercase mb-4 text-color2">
            Testimonials
          </h4>
          <div className="row mt-5">
            {allTestimonials.map((testimonial) => (
              <ShowTestimonial
                key={testimonial._id}
                testimonial={testimonial}
              ></ShowTestimonial>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
