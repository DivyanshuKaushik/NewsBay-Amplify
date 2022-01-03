import Head from 'next/head'
import Header from '../components/Header'
import useAuthenticatedUser from '../hooks/authenticatedUser'

export default function Home() {
  const user = useAuthenticatedUser()
  console.log('index page',user)
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
