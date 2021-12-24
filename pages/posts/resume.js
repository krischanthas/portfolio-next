import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Resume() {
    return (
      <>
        <Head>
          <title>Resume</title>
        </Head>
        
        <div className="container">
          <header>
            <h1>Resume</h1>
            
            <Link href="/">
              <button>Back to home</button>
            </Link>
          </header>

          <div>
            
            <iframe src="/images/Resume-CURRENT.docx.pdf#toolbar=0&navpanes=0" width="800" height="700"></iframe>
          </div>
        </div>
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          header {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }

          button {
            margin: 1rem 0;
            border: none;
            border-radius: 1rem;
            background-color: lightblue;
            cursor: pointer;
          }
        `}</style>
      </>
    )
  }