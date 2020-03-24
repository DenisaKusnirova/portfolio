import React from "react"
import RekonstrukcieImg from "../images/rekonstrukcie-vychod.png"
import DoveraEP from "../images/dovera-ep.png"
import MojaDovera from "../images/moja-dovera.png"
import WouldYouRather from "../images/would-you-rather.png"
import FeedbackCollection from "../images/feedback-collection.png"
import Twitter from "../images/twitter.png"
import DrMaxSurvey from "../images/drmaxsurvey.png"

const Work = () => {
  return (
    <div className="workContainer">
      <h2>A FEW PROJECTS THAT I WORKED ON</h2>
      <div className="workItems">
        <div className="workItem">
          <img src={RekonstrukcieImg} alt="rekonstrukcie-vychod.png" />
          <div className="description">
            <p>A one page website developed for a local family business.</p>
            <a href="https://rekonstrukcievychod.sk/" target="_blank">
              Click here to see it live!
            </a>
          </div>
        </div>
        <div className="workItem">
          <img src={DoveraEP} alt="dovera-ep.png" />
          <div className="description">
            <p>
              This app was built for a leading private health insurance company
              in Slovakia - Dôvera. It is intended to be used by more than 100
              thousand clients. It handles large amount of data regarding the
              day to day operations between the insurance company and the
              clients. It allows clients to work with their documents, invoices,
              messages and much more.
            </p>
            <span>React 16.8+, Redux, CSS in JS and Typescript</span>
          </div>
        </div>
        <div className="workItem">
          <img src={MojaDovera} alt="moja-dovera.png" />
          <div className="description">
            <p>
              Moja Dôvera is an informational and supportive web application for
              the parents of newborns and toddlers. It includes a high volume of
              data and information for the users. It keeps appointment calendar,
              charts and reminds about mandatory vaccination and a track of
              medical record. It informs about the milestones in the growth
              process of a child as well.
            </p>
            <span>React 16.8+, Redux, CSS in JS and Typescript</span>
            <a href="https://www.mojadovera.sk/uvod" target="_blank">
              Click here to see it live!
            </a>
          </div>
        </div>
        <div className="workItems">
          <div className="workItem">
            <img src={DrMaxSurvey} alt="survey.png" />
            <div className="description">
              <p>
                An online survey editor which allows to create, edit, distribute
                and analyze surveys. It provides detailed reports with charts to
                help visualize the results. This app was developed for DrMax.
              </p>
              <span>React 16.8+, Redux, CSS in JS</span>
            </div>
          </div>
        </div>
        <div className="workItem">
          <img src={WouldYouRather} alt="would-you-rather.png" />
          <div className="description">
            <p>
              A web app where users are able to answer questions,see which
              questions they haven’t answered, see how other people have voted,
              post questions, and see the ranking of users on the leaderboard.
              The app combines the state management features of Redux and
              component model of React.
            </p>
            <span>React & Redux</span>
            <a
              href="https://denisakusnirova.github.io/would-you-rather-reactnd-udacity/"
              target="_blank"
            >
              Click here to see it live!
            </a>
          </div>
        </div>
        <div className="workItem">
          <img src={Twitter} alt="twitter.png" />
          <div className="description">
            <p>
              A simple twitter like app created using React and Redux. Users can
              add new tweets, like or respond to existing ones.
            </p>
            <span>React & Redux</span>
            <a href="https://m4l9nv4j.herokuapp.com/" target="_blank">
              Click here to see it live!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
