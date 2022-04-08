import Banner from '../../components/Banner/Banner.js'
import Header from '../../components/Header/Header.js'
import Gallery from '../../components/Gallery/Gallery.js'
import Footer from '../../components/Footer/Footer.js'
import data from '../../Data/Data.js'
import bannerUrl from '../../assets/bannerHomepage.png'
import { Component } from 'react'
import './home.css'

//Ce composant est la vue de la page Home
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerUrl: bannerUrl,
      text: 'Chez vous, partout et ailleurs',
      className: 'home',
      data: data,
    }
  }

  render() {
    return (
      <>
        <header>
          <Header />
          <Banner
            url={this.state.bannerUrl}
            text={this.state.text}
            className={this.state.className}
          />
        </header>
        <main>
          <Gallery data={this.state.data} />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}
