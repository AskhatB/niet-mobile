import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Text from '../components/Text';
import BidSteps from '../containers/BidSteps';
import SecondaryDescription from '../containers/SecondaryDescription';
import Faq from '../components/Faq';
import MainPageForm from '../containers/MainPageForm';
import BidSandingForm from '../containers/BidSandingForm';

const Home = () => {
  const [fullUserInfo, setFullUserInfo] = React.useState();

  const onSubmit = data => {
    setFullUserInfo(data);
  };

  const onCloseBidSandingForm = () => {
    setFullUserInfo(false);
  };

  return (
    <>
      <Head>
        <title>Niet Insurance</title>
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
      {fullUserInfo && (
        <BidSandingForm data={fullUserInfo} onClose={onCloseBidSandingForm} />
      )}
      <MainPageForm onSubmit={onSubmit} />
      <SecondaryDescription />
      <Faq />
    </>
  );
};

export default Layout(Home);
