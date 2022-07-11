import Stars from './components/Stars'
import './App.css'
import logo from './assets/images/logo.jpg'

function App() {
  const count = 5;
  return (
    <div className="cards">
        <div className="card">
            <div className="card__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="card_description">
                <div className="card__info">
                    <h2 className="card__title">Аватар 2</h2>

                    <Stars count={count} />

                </div>
                <div className="card__buttons">
                    <button className="card__buy">999р</button>
                    <a href="_">Подробнее...</a>
                </div>                
            </div>
        </div>
    </div>    
  )
}

export default App;
