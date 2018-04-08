import React from 'react'

import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';

class Funnel extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div>
                <Form />
                {true || <Cart /> }
                <div 
                    onClick={()=>this.props.changeView()}>
                    To ThankYou
                </div>
            </div>
        )
    }

}


export default Funnel
