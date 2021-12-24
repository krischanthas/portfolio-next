import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kris C</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Kris C.</h1>

        {/* profile image */}
        <div className="profile">
          <Image
            src="/images/profile-photo1.png"
            height={144}
            width={144}
            alt="Kris C"
            className="profile"
          />
        </div>

        <p className="description">Software Developer</p>

        {/* grid of cards */}
        <div className="grid">
            <a className="card" href="/images/Resume-CURRENT.docx.pdf" download>
              <h3>Resume &nbsp;
              <img src="/images/download.svg" className="icons"/>
              </h3>
              <p>Click to download</p>
            </a>

          <Link href="/posts/projects">
            <a className="card">
              <h3>Projects &nbsp;<img src="/images/layers.svg" className="icons"/></h3>
              <p>Check out my apps</p>
            </a>
          </Link>

          <Link href="https://github.com/krischanthas">
            <a target="_blank" className="card">
              <h3>GitHub &nbsp;<img src="/images/github.svg" className="icons"/></h3>
              <p>See my code</p>
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/krischanthas">
            <a target="_blank" className="card">
              <h3>LinkedIn &nbsp; <img src="/images/linkedin.svg" className="icons"/></h3>
              <p>Connect with me</p>
            </a>
          </Link>
        </div>
      </main>

      <footer>
          Powered by cold brew
          <img src="/images/mouse.svg" width="25" />
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }


        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }


        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          letter-spacing:0.5rem;
          font-size: 1.5rem;
        }

        .profile div:first-of-type {
          border-radius: 4rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          min-width: 220px;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active,
        svg:hover {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        
        .icons {
          width: 20px;
        }

        @keyframes slideinleft {
          from {
            transform: translateX(-50%);
          }
          50% {
            transform: translateX(50%);
          }
          to {
            tranform: translateX(0%);
          }
        }

        .description {
          animation-duration: 1.5s;
          animation-name: slideinleft;
        }

        @keyframes slideinright {
          from {
            transform: translateX(50%);
          }
          50% {
            transform: translateX(-50%);
          }
          to {
            tranform: translateX(0%);
          }
        }
        .title {
          animation-duration: 1.5s;
          animation-name: slideinright;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
