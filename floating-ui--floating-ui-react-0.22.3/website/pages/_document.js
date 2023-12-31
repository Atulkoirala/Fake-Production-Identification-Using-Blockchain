import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <script
            async
            defer
            data-website-id="15719ba2-10f1-4303-8a19-bed14d1e5d4f"
            src="https://626cfbd8a2fb4e5308c41baf--fantastic-pixie-a91050.netlify.app/floating.js"
          /> */}
          <meta
            name="description"
            content="A JavaScript library for positioning floating elements and creating interactions for them."
          />
        </Head>
        <body
          className="bg-gray-75 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
          data-remove-transitions=""
        >
          <div id="focus-root" tabIndex={-1} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
