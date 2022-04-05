import React from 'react';
import '../styles/sass/pages/Home.scss';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import ListLogements from '../components/ListLogements'
import img from './../assets/bannerHomepage.png'

class Home extends React.Component {
  render(){
    return(
      <div className="Home">
      <Header />
      <Banner background={img} title="Chez vous, partout et ailleurs"/>
      <ListLogements />
      <Footer />
    </div>
    )
  }
}

export default Home;
