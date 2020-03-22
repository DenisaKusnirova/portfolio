import React from "react"
import Dots from "./Particles"

const About = () => {
  return (
    <>
      <Dots />
      <div>
        <h1>
          hi, my name is Deny. <br />I am a self-taught front-end developer{" "}
          <br />
          currently based in Slovakia.
        </h1>
        <h3>
          I love designing simple & clean UI and bringing my designs to life
          with HTML, CSS and JS. I have recently completed
          <a
            target="_blank"
            href="https://eu.udacity.com/course/react-nanodegree--nd019"
          >
            &nbsp;Udacity React Nanodegree Program.
          </a>
        </h3>
        <h3>
          Currently I'm working for
          <a target="_blank" href="https://mediworx.sk/">
            &nbsp;Mediworx&nbsp;
          </a>
          where I'm developing web apps for
          <a target="_blank" href="https://www.dovera.sk/">
            &nbsp;Dovera.&nbsp;
          </a>
          In the past I worked on more than 20 simple personal projects that you
          can find on my
          <a target="_blank" href="https://github.com/DenisaKusnirova">
            &nbsp;Github.&nbsp;
          </a>
          I also developed a
          <a target="_blank" href="https://rekonstrukcievychod.sk/">
            &nbsp;website&nbsp;
          </a>
          for a renovation company.
        </h3>
      </div>
    </>
  )
}

export default About
