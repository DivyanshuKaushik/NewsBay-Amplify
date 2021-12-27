import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h3 className="">
          hola
        </h3>
      </main>
    </div>
  )
}
