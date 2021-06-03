import React, { useEffect, useContext } from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import { AuthContext } from '../store/FirebaseContext';
import './Home.css';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

function Home(props) {
  const {user} = useContext(AuthContext);
  
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 