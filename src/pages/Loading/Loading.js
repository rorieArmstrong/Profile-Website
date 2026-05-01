import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Lottie from 'react-lottie';
import animationData from '../../lotties/loading.json';

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <Layout user={user}>
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
      </Layout>
    );
}

export default Loading;