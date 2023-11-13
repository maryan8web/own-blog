import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
import myself from "@/public/images/site/myself.jpg";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={myself}
          alt="An image showing Maryan"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I&aposm Maryan</h1>
      <p>
        I blog about web development - especially frontend frameworks like Next
        and React.
      </p>
    </section>
  );
};

export default Hero;
