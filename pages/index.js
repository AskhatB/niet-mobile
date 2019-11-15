import React from 'react';
import Head from 'next/head';

const Home = props => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {props.userAgent}
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Home;
