import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentView: 'home'
    }

    this.renderView = this.renderView.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  changeView(view){
    this.setState({currentView: view})
  }

  renderView(){
    switch(this.state.currentView){
      case 'home':
        return <Home changeView={()=>this.changeView('funnel')}/>
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
        {this.renderView()}
      </div>
    );
  }
}

const Home = ({changeView}) => <div><p>home</p><div onClick={()=>changeView()}>To funnel</div></div>
const Funnel = ({changeView}) => <div><p>Funnel</p><div onClick={()=>changeView()}>To ThankYou</div></div>
const ThankYou = ({changeView}) => <div><p>ThankYou</p><div onClick={()=>changeView()}>To Home</div></div>

export default App;
