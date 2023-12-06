import Head from 'next/head';
import React from 'react';

const MetaHead = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

MetaHead.defaultProps = {
  title: 'Webflow Tech',
  keywords: 'next.js, react, web, ui, tailwindcss',
  description: 'Webflow tech home 1 website',
};

export default MetaHead;
