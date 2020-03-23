import React from "react"
import RekonstrukcieImg from "../images/rekonstrukcie-vychod.png"
import DoveraEP from "../images/dovera-ep.png"
import MojaDovera from "../images/moja-dovera.png"

const Work = () => {
  return (
    <div className="workContainer">
      <h2>WORK</h2>
      <div className="workItems">
        <div className="workItem">
          <img src={RekonstrukcieImg} alt="rekonstrukcie-vychod.png" />
        </div>
        <div className="workItem">
          <img src={DoveraEP} alt="dovera-ep.png" />
        </div>
        <div className="workItem">
          <img src={MojaDovera} alt="moja-dovera.png" />
        </div>
      </div>
    </div>
  )
}

export default Work
