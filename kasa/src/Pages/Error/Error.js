import { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer.js'
import Header from '../../components/Header/Header.js'
import './error.css'

//Ce composant est la vue de la page Error404
export default class Error extends Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <section>
          <div className="errorContent">
            <div className="errorNumber">404</div>
            <p className="errorText">
              Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className="backButton" to="/">
              Retourner sur la page d'accueil
            </Link>
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}
