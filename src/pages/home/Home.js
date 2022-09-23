import React from 'react'
import Navbar from "../../components/browse/navbar/Navbar";
import Featured from "../../components/browse/featured/Featured";
import "./home.scss";
import List from '../../components/browse/list/List';
import Recent from '../../components/browse/recent/Recent';
import Trend from '../../components/browse/trend/Trend';
import Pick from '../../components/browse/pick/Pick';
import Manga from '../../components/browse/manga/Manga';
import Ten from '../../components/browse/top ten/Ten';
import Ten1 from '../../components/browse/top ten1/Ten';
import Footer from '../../components/browse/footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <List/>
      <Recent/>
      <Ten/>
      <Trend/>
      <Manga/>
      <Ten1/>
      <Pick/>
      <Footer/>

    </div>
  );
};

export default Home;
