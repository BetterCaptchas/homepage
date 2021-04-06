import Head from 'next/head'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BetterCaptcha</title>
        <link rel="icon" href="/bettercaptcha.png" />
      </Head>

      <main>
        <h1 className="title Gradient">
          404
        </h1>

        <p className="description">
          Sorry, we couldn't find the requested page.
        </p>
      </main>

      <footer>
       
      </footer>

      <style jsx>{`


        
.Gradient {
  background: linear-gradient(to right, #d386a4, #f00d0d);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          font-size: 4.5em;
          font-weight: 500;
          margin-bottom: 0;
          background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }

        p {
          font-size: 1.6em;
          font-weight: 300;
          line-height: 1.4;
          max-width: 28em;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: left;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
        .card:active {
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

        .logo {
          height: 1em;
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
          font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: calc(10px + 0.33vw);
        -webkit-font-smoothing: antialiased;
        padding: 5vh 10vw;
        color: white;
        background-color: black;
        }

        * {
          box-sizing: border-box;
        }
        
      `}</style>
    </div>
  )
}
