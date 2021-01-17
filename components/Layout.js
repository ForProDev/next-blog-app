import Head from "next/head"

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto pt-8 min-h-screen">{children}</div>
    </div>
  )
}
