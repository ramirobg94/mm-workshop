import React from 'react'

import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';

class Funnel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isCartOpen: true
        }
    }

    render(){

            console.log(this.props)
        return(
            <div>
                <Form personalInfo={this.props.personalInfo} changeInfo={this.props.changeInfo} onSubmit={()=>this.props.changeView()}/>
                {this.state.isCartOpen && <Cart tariff={this.props.tariff} /> }
               
            </div>
        )
    }

}


export default Funnel
