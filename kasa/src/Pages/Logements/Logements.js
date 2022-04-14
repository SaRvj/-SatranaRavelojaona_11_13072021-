import { Component } from 'react'
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Accomodation from '../../components/Logement/Logement.js'
import axios from 'axios'
//import data from '../../Data/data.json'
import { withRouter } from 'react-router'
import Carousel from '../../components/Carrousel/Carrousel'

class Accomodations extends Component {
  url = process.env.PUBLIC_URL + '/logements.json';

  constructor(props) {
    super(props)

    this.state = {
      accomodation: null,
    }
  }

  /**
   * Récupère les données.
   * Voir syntaxe async functions ici: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function.
   * 
   * @param {any} id 
   * @return {object | null}
   */
  async getAccomodation(id) {
    try {
      const response = await axios.get(`${this.url}`);
      const accomodation = response.data.find((item) => id === item.id);
      if (!accomodation) {
        this.props.history.push('/error404')
        return null
      }
      return accomodation
    } catch (error) {
      console.error(`Error: ${error}`)
    }
  }

  async componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const accomodation = await this.getAccomodation(searchParams.get('id'));
    this.setState({
      accomodation,
    });
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Carousel accomodation={this.state.accomodation} />
          <Accomodation accomodation={this.state.accomodation} />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}

export default withRouter(Accomodations)