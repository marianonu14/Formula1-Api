import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Formula 1 | History Information</title>
        <meta name="description" content="Formula 1 App, about history information" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Header/>
    </div>
  )
}
