import Banner from '../../components/Banner/Banner.js'
import Header from '../../components/Header/Header.js'
import Gallery from '../../components/Gallery/Gallery.js'
import Footer from '../../components/Footer/Footer.js'
import axios from 'axios';
// import data from '../../Data/data.json'
import bannerUrl from '../../assets/bannerHomepage.png'
import { Component } from 'react'
import './home.css'

//Ce composant est la vue de la page Home
export default class Home extends Component {

  url = process.env.PUBLIC_URL + '/logements.json';
  constructor(props) {
    super(props)
    this.state = {
      bannerUrl: bannerUrl,
      text: 'Chez vous, partout et ailleurs',
      className: 'home',
      data: [],
    }
  }

  componentDidMount() {
    this.getAllLogements();
  }

  getAllLogements = () => {
    axios.get(`${this.url}`)
    .then ((response) => {
        //console.log("response", response.data);
        this.setState({ data: response.data });
    })
    .catch(error => console.error(`Error: ${error}`));
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
