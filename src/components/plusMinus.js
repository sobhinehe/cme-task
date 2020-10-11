import React from 'react';
import {Button, ButtonGroup, Badge} from 'react-bootstrap'

export default class plusMinus extends React.Component {
    state ={
        count: 0
    };
    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };
    
   
    render(){
        
    return (
        <div>
            <ButtonGroup size="lg" className="mb-2">
                <Button onClick={this.decrement}>decrement</Button>
                <h3><Badge variant="secondary">count: {this.state.count}</Badge></h3>
                <Button onClick={this.increment}>Increment</Button>
            </ButtonGroup>
        </div>
     )

    }
   
}
 