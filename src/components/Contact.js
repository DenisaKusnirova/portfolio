import React from "react"

const Contact = ({ contactComponentId }) => {
  return (
    <div className="contactContainer" id={contactComponentId}>
      <hr />
      <h2 className="contactTitle">CONTACT ME</h2>
      <h2 className="email">
        Email:{" "}
        <a href="mailto:deniskakusnirova@gmail.com">
          deniskakusnirova@gmail.com
        </a>
      </h2>
      <div className="socials">
        <a
          className="link"
          href="https://github.com/DenisaKusnirova"
          target="_blank"
        >
          github
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/denisa-kusnirova-6a801a132/"
          target="_blank"
        >
          linkedin
        </a>
        <a
          className="link"
          href="https://www.instagram.com/denisakusnirova/"
          target="_blank"
        >
          instagram
        </a>
      </div>
    </div>
  )
}

export default Contact
