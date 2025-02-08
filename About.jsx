import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/2.jpg"; // You may want to update the image to one related to railways.
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Our Railway Reservation System" subtitle="Learn about our services and process" />

            <p>
              Welcome to our Railway Reservation System, where we offer an efficient and user-friendly platform for booking train tickets. Whether you're traveling for business or leisure, our system ensures a smooth and hassle-free experience. We are committed to providing reliable and convenient travel options for all passengers.
            </p>
            <p>
              Our system is designed to make booking tickets fast, easy, and secure. With real-time updates on train schedules, seat availability, and ticket prices, you can plan your journey with confidence. We are constantly working on improving our services to offer you the best possible travel experience.
            </p>
            <button className="btn2">Learn More About Our Services</button>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default About;
