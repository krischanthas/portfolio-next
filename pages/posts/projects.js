import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";

export default function Projects() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Projects</title>
        </Head>

        <header>
          <h1>Projects</h1>

          <Link href="/">
            <button>Back to home</button>
          </Link>
        </header>

        <div className="grid">
          <div className="card">
            <div className="desc">
              <h2>IIFYMTRACKER.ME</h2>
              <p>
                A straight foward macronutrient and exercise tracker powered by
                Nutritionix. Technologies: MongoDB, Express, React + Redux,
                Node.js, Docker
              </p>
            </div>
            <a href="https://iifymtracker.me" target="_blank">
            <ReactPlayer
              url="/demo-iifymtracker.mov"
              playing={true}
              loop={true}
              width="100%"
            />
            </a>
          </div>

          <div className="card">
            <div className="desc">
              <h2>GRADEBOOK-CMS</h2>
              <p>
                Content management system for enrolling and grading students.
                Technologies: MongoDB, Express, React + Redux, Node.js
              </p>
            </div>
            <a href="https://gradebook-cms.herokuapp.com/" target="_blank">
            <ReactPlayer
              url="/demo-gradebook-cms.mov"
              playing={true}
              loop={true}
              width="100%"
            />
            </a>
          </div>

          <div className="card">
            <div className="desc">
              <h2>TIP-CALCULATOR</h2>
              <p>
                This is a user friendly tip calculator designed with mobile
                first responsiveness in mind. Technologies: HTML/CSS and
                JavaScript
              </p>
            </div>

            <a href="https://jovial-jepsen-aed601.netlify.app/" target="_blank">
            <ReactPlayer
              url="/demo-tipcalculator.mov"
              playing={true}
              loop={true}
              width="100%"
            />
            </a>
          </div>

          <div className="card">
            <div className="desc">
              <h2>Project #4</h2>
              <p>Coming soon</p>
            </div>
            {/* <ReactPlayer
                url="/demo-tip-calculator.mov"
                playing={true}
                loop={true}
                width="100%"
              /> */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        header {
          display: flex;
          justify-content: space-around;
          width: 100vw;
        }

        h1 {
          letter-spacing: 4px;
        }

        button {
          margin: 10px 5px;
          padding: 0 10px;
          border: none;
          border-radius: 15px;
          cursor: pointer;
          letter-spacing: 2px;
          background-color: #fff;
          border: 1px solid #eaeaea;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        button:hover {
          color: #0070f3;
          border-color: #0070f3;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          grid-template-areas:
            "project1 project2"
            "project3 project4";
          grid-gap: 20px;
        }
        .grid > .card {
          border: none;
          border-radius: 15px;
          padding: 2rem 2rem;
        }
        .grid:nth-child(1) {
          grid-area: project1;
          background-color: #ccc;
        }
        .grid:nth-child(2) {
          grid-area: project2;
        }
        .grid:nth-child(3) {
          grid-area: project3;
        }
        .grid:nth-child(4) {
          grid-area: project4;
        }
        .desc {
          width: 60%;
          margin: 0 auto;
        }

        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            grid-template-areas:
              "project1"
              "project2"
              "project3"
              "project4";
          }
        }
      `}</style>
    </>
  );
}
