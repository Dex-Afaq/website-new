import React from 'react';
import Head from 'next/head';
import Mainpage from './Container/Mainpage/mainpage';
export default()=> {
  return (
    <div>
    <Head>
        <title>Tayyeb|Offical BlogSpot </title>
        {/* bulma Link */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"/>
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        {/* END */}
        {/* Fontawesome Link */}
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
    </Head>
    

    <Mainpage/>
    </div>
  );
}
