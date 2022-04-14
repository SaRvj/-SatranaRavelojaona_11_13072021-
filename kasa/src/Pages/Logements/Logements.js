import { Component } from 'react'
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Accomodation from '../../components/Logement/Logement.js'
import axios from 'axios'
//import data from '../../Data/data.json'
import { withRouter } from 'react-router'
import Carousel from '../../components/Carrousel/Carrousel'

class Accomodations extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accomodation: null,
    }
  }

  getAccomodation(id) {
    const accomodation = data.find((item) => id === item.id)
    if (!accomodation) {
      this.props.history.push('/error404')
      return null
    }
    return accomodation
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search)
    this.setState({
      accomodation: this.getAccomodation(searchParams.get('id')),
    })
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
