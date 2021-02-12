import React from 'react'
import logo from './logo.svg';
import './App.css';

const ALLCATEGORIESURL = 'https://api.chucknorris.io/jokes/categories'
const RANDOMJOKEBYCATURL = 'https://api.chucknorris.io/jokes/random?category=' // remember to fill this
const ALLLJOKESBYKEYWORD = 'https://api.chucknorris.io/jokes/search?query=' // remember to fill this
const launchErrorAlert = () => setTimeout(() => window.alert('errore!'), 500) 

// classe 'App-logo-spinning' durante il caricamento, altrimenti classe 'App-logo'
const Logo = ({ loading }) => {
  return (
    <img
      src={logo}
      alt='interactive-logo'
      // ... 
    />
  )
}

const Joke = ({ value, categories }) => {
  return null
  // <div className="Joke">
  //   <code className="Joke-Value">{value}</code>
  //     per ciascun elemento di 'categories', renderizzare:
  //     <span className="Selected-Cat" ... >
  //       <code>{* QUI LA STRINGA DELLA SINGOLA CATEGORIA *}</code>
  //     </span>
  // </div>
}

// class App extends React.Component {
function App() {
  // qui tutto ciò che serve al componente per essere inizializzato

  // getJokeByKeyword
  // funzione che recupera le barzellette contenenti la parola chiave
  // digitata nel campo di testo

  // onInputTextChange
  // handler per l'input di testo

  // qui i lifecycle methods

  // render () {
    return (
      <div className="App">
        <div className="App-header">
          <Logo
            // ...
          />
          <input
            type="search"
            id="search" name="search"
            placeholder="Enter keyword here"
            // ...
          />
          <button
            className="Search-Button"
            // ...
          >
            <code>CLICK TO SEARCH!</code>
          </button>
        </div>
        <div className="Content">
          <img
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" 
            className="Chuck-Logo"
            alt="chuck-logo"
          />
          {/* <Joke ... /> */}
        </div>
        <div className="footer">
        <code>Esame di React per cfp-futura. Grazie ad <a href="https://api.chucknorris.io">api.chucknorris.io</a> per l'immagine e le api. Docente: Vito Vitale. Studente: </code>
        </div>
      </div>
    );
  // }
};

export default App;
