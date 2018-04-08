import React from 'react'

import Name from '../components/Name';
import Price from '../components/Price';
import Features from '../components/Features';

const Home = ({changeView, tariffs, selectTariff}) => 
    <div>
        <Cards tariffs={tariffs} selectTariff={selectTariff} />
    </div>

export default Home

const Cards = ({tariffs, selectTariff}) => 
    <div className="Cards">
        {tariffs && tariffs.map(tariff => 
            <Card key={tariff.id} tariff={tariff} selectTariff={selectTariff}/>)
        }
    </div>

const Card = ({tariff: { special, price, features, name, id}, selectTariff}) => 
    <div className={`Card ${special ? 'special' : ''}`}>
        <Name name={name}/>
        <Features features={features} />
        <Price price={price} />
        <Btn selectTariff={()=>selectTariff(id)}/>
    </div>

const Btn = ({selectTariff}) => <div onClick={()=>selectTariff()} className="Btn"><h2>La quiero</h2></div>
        