'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';

const GetBrowserInfo = async () => {
  let browserName;


    const userAgent = navigator.userAgent;
    let name = '';

    if (userAgent.includes('Chrome')) {
      name = 'Goolge Chrome';
    } else if (userAgent.includes('Firefox')) {
      name = 'Firefox';
    } else if (userAgent.includes('Safari')) {
      name = 'Safari';
    } else if (userAgent.includes('MSIE') || userAgent.includes('Trident/')) {
      name = 'Internet Explorer';
    } else {
      name = 'Unknown';
    }

    browserName = name
    console.log(browserName);


  return browserName;
};

export default GetBrowserInfo