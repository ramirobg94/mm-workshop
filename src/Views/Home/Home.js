import React from 'react'
import logo from '../../../src/DHub_logo.png'

const Home = ({changeView, tariffs, selectTariff}) => 
    <div>
        <Header/>
        <Cards tariffs={tariffs} />
    </div>

export default Home

const Header = () => (
  <header className="App-header">
    <div className="Header-over">
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  </header>
)

const Cards = ({tariffs}) => 
    <div className="Cards">
        {tariffs && tariffs.map(tariff => 
            <Card key={tariff.id} tariff={tariff}/>)
        }
    </div>

const Card = ({tariff: { special, price, features, name}}) => 
    <div className={`Card ${special ? 'special' : ''}`}>
        <Name name={name}/>
        <Features features={features} />
        <Price price={price} />
        <Btn />
    </div>

const Name = ({name}) =>  <div><h3>{name}</h3></div>
const Features = ({ features }) => 
    <div className="Price">
        {features.map((feature) => 
            <Feature feature={feature} key={feature.id} />
        )}
    </div>

const Feature = ({feature: {type, value, units}}) => 
    <div className="Feature">
        <p>{type}</p>
        <p className="value">{value}<small>{units}</small></p>
    </div>

const Price = ({price}) => <div className="Price"><h2>{price}<span>€</span></h2><small>IVA incluido</small></div>

const Btn = () => <div className="Btn"><h2>La quiero</h2></div>
        