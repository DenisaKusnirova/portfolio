import React from "react"

const Contact = () => {
  return (
    <div className="contactContainer">
      <hr />
      <h2 className="contactTitle">CONTACT ME</h2>
      <h2>
        Email:{" "}
        <a href="mailto:deniskakusnirova@gmail.com">
          deniskakusnirova@gmail.com
        </a>
      </h2>
      <div className="socials">
        <a className="link" href="https://github.com/DenisaKusnirova">
          github
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/denisa-kusnirova-6a801a132/"
        >
          linkedin
        </a>
        <a className="link" href="https://www.instagram.com/denisakusnirova/">
          instagram
        </a>
      </div>
    </div>
  )
}

export default Contact
