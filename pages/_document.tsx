import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="max-h-screen h-full flex flex-col text-sm bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
