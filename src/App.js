import React from 'react'
import { Root, Routes, Head } from 'react-static'
import './app.css'

function App() {
  return (
    <Root>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mapreti Studio Links V3 - Modern Clean</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Routes />
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
