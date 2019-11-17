import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

import Text from '../components/Text';
import BidSteps from '../containers/BidSteps';
import SecondaryDescription from '../containers/SecondaryDescription';
import Faq from '../components/Faq';
import MainPageForm from '../containers/MainPageForm';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div style={{ marginBottom: '15px' }}>
      <Text variant="h1">
        Оформи страховку <span style={{ color: '#dd5656' }}>ОГПО</span> и
        выиграй один из 20 автомобилей и еще 1000 призов
      </Text>
      <Link href="/hgg">Подробнее</Link>
    </div>
    <BidSteps />
    <MainPageForm />
    <SecondaryDescription />
    <Faq />
  </>
);

export default Layout(Home);
