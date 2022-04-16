import React from "react";
import Navbar from "../components/global/Navbar";

const Home = () => {
  return (
    <div className="bg-mygreen-1 min-h-screen">
      <Navbar />
      <section className="pt-16 container  flex items-center justify-center min-h-screen flex-col gap-y-10">
        <h1 className="text-center text-white text-7xl font-extrabold">
          Don't think you have ever <br /> lost thing that never <br /> back
          again
        </h1>
        <p className="text-xl text-white text-center">
          Connect between founder and owner
          <br />
          that have been lost their thing with
          <br />
          safety, fast, efficient and <span className="underline">FREE</span>.
        </p>
        <button className="btn rounded-full bg-myblue border-none text-white hover:bg-mydarkblue">
          Join Us
        </button>
        <span className="text-white text-2xl">or</span>
        <a
          href="/#"
          className="text-myblue underline text-lg hover:text-mydarkblue"
        >
          Learn How To Use It
        </a>
      </section>
    </div>
  );
};

export default Home;
