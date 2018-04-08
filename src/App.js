import React, { Component } from 'react';
import logo from './DHub_logo.png'
import './App.css';

import Home from './Views/Home/Home'
import Funnel from './Views/Funnel/Funnel'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentView: 'home',
      tariffSelected: null,
      tariffs: [
        {
          id: 0,
          name: 'Solo voz',
          price: 5,
          features: [
            {
              id: 0,
              type: 'habla',
              value: '0',
              units: 'cents/min'
            }
          ]
        },
        {
          id: 1,
          name: 'Mucha voz y pocos datos',
          price: 8,
          features: [
            {
              id: 1,
              type: 'habla',
              value: '500',
              units: 'min'
            },
            {
              id: 2,
              type: 'navega',
              value: '5',
              units: 'GB'
            }
          ]
        },
        {
          id: 2,
          name: 'Poca voz y muchos datos',
          price: 12,
          features: [
            {
              id: 3,
              type: 'habla',
              value: '100',
              units: 'min'
            },
            {
              id: 4,
              type: 'navega',
              value: '15',
              units: 'GB'
            }
          ]
        },
        {
          id: 3,
          name: 'Damelo tó!!!',
          price: 20,
          special: true,
          features: [
            {
              id: 5,
              type: 'habla',
              value: 'ilimitada',
              units: ''
            },
            {
              id: 6,
              type: 'datos',
              value: 'ilimitados',
              units: ''
            },
            {
              id: 7,
              type: 'sms',
              value: 'ilimitados',
              units: ''
            }
          ]
        }
      ],
      personalInfo: {
        info: {
          name: '',
          surname: '',
          birthdate: '',
          phone: '',
          company: '',
          mail: ''
        },
        errors: []
      }
    }

    this.renderView = this.renderView.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  changeView(view){
    this.setState({currentView: view})
  }

  selectTariff(id){
    this.setState({tariffSelected: id, currentView: 'funnel'})
  }


  renderView(){
    switch(this.state.currentView){
      case 'home':
        return <Home
            tariffs={this.state.tariffs}
            selectTariff={(id)=>this.selectTariff(id)}
          />
        break
      case 'funnel':
        return <Funnel changeView={()=>this.changeView('thankYou')}/>
        break
      case 'thankYou':
        return <ThankYou changeView={()=>this.changeView('home')}/>
        break
      default:
        return <Home />
    }
  }


  render() {
    return (
      <div className="App">
       <Header/>
        {this.renderView()}
      </div>
    );
  }
}

const ThankYou = ({changeView}) => <div><p>ThankYou</p><div onClick={()=>changeView()}>To Home</div></div>

export default App;


const Header = () => (
  <header className="App-header">
    <div className="Header-over">
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  </header>
)
