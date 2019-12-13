import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Text from '../components/Text';
import BidSteps from '../containers/BidSteps';
import SecondaryDescription from '../containers/SecondaryDescription';
import Faq from '../components/Faq';
import SocialNetworks from '../components/SocialNetworks';
import MainPageForm from '../containers/MainPageForm';
import BidSandingForm from '../containers/BidSandingForm';

const Home = () => {
  const [fullUserInfo, setFullUserInfo] = React.useState();

  const onSubmit = data => {
    setFullUserInfo(data);
    console.log(data)
  };

  const onCloseBidSandingForm = () => {
    setFullUserInfo(false);
  };

  return (
    <>
      <Head>
        <title>Niet Insurance</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <div style={{ marginBottom: '15px' }}>
        <Text variant="h1">
          Оформи страховку <span style={{ color: '#dd5656' }}>ОГПО</span> и
          выиграй один из 20 автомобилей и еще 1000 призов
        </Text>
        <Link href="/">
          <a>Подробнее</a>
        </Link>
      </div>
      <BidSteps />
      {fullUserInfo && (
        <BidSandingForm data={fullUserInfo} onClose={onCloseBidSandingForm} />
      )}
      <MainPageForm onSubmit={onSubmit} />
      <SecondaryDescription />
      <Faq />
      <SocialNetworks />
    </>
  );
};

export default Layout(Home);
