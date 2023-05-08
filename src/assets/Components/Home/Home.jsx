import React from "react";

const Home = () => {
  return (
    <div className="mx-0">
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0,0 , 0.4) , rgba(0, 0, 0, 0.3)), url('https://media.barchart.com/contributors-admin/common-images/images/Soft%20Commodities/Coffee/shutterstock_1727031229.jpg')",
          height: "500px",
        }}
      >
        <div className=" text-start px-4" style={{ fontFamily: "cursive" }}>
          <h1 className="text-white text-3xl  px-4 font-bold w-1/2">
            Fuel up with our freshly brewed coffee and cozy vibes
          </h1>
          <p className="text-white text-xl mt-4 px-4  w-1/2">
            "Indulge in our rich coffee blends, delectable pastries, and
            inviting atmosphere. Join us for your daily dose of caffeine and
            relaxation
          </p>
          <button className="btn bg-orange-900 ms-4 mt-8"> Read more</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
