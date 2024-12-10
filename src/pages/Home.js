import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import DeveloperProfile from "./Components/DeveloperProfile/DeveloperProfile";
import HiringSteps from "./Components/HiringSteps/HiringSteps";

const Home = () => {
  const developers = [
    {
      name: "Amir Yaqood",
      role: "Python Developer",
      skills: [
        "Python",
        "AI",
        "Computer Vision",
        "Natural Language Processing",
      ],
      image: "/path-to-image",
    },
    // Add more developers...
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <section style={{ padding: "80px 0", background: "#0a0b1c" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "white",
              marginBottom: "40px",
            }}
          >
            Meet Our Talent Network
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {developers.map((dev, index) => (
              <DeveloperProfile key={index} {...dev} />
            ))}
          </div>
        </div>
      </section>
      <HiringSteps />
    </>
  );
};

export default Home;
