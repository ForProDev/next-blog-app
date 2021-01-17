import Document, { Head, Html, Main, NextScript } from "next/document"

export default class myDocuemnt extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
