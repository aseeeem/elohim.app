import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen grid justfiy-center content-center bg-black">
      <Head>
        <title>Elohim.app</title>
      </Head>
      <Link href="/good-day-bad-day">
        <a className="text-center text-6xl text-white">
          <img
            className="inline object-center"
            src="https://linkstorage.linkfire.com/medialinks/images/69341b64-a148-4392-ba86-cace5546dd49/artwork-440x440.jpg"
            alt="good-day-bad-day"
          />
        </a>
      </Link>
    </div>
  )
}
