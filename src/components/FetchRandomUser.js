import React from"react";
import {Row, Col, Card} from 'react-bootstrap'
import {Spinner, Alert} from 'react-bootstrap'

export default class FetchRandomUser extends React.Component {
    
    state = {
        loading: true,
        people: [],
    }

    async componentDidMount(){
            const url = "https://api.randomuser.me/?results=5";
            const response = await fetch(url);
            const data = await response.json();
            this.setState({people: data.results, loading: false})
            

   }

   render() {
    if (this.state.loading) {
        return <div>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    }
    if (!this.state.people) {
        return <div>
            <Alert variant="danger">
                <Alert.Heading>Oh snap! We have no users!</Alert.Heading>
                <p>
                Try to take some time while we solve the Problem <br/>
                thank you for ur understanding
                 </p>
            </Alert>
        </div>
    }


        return ( 

            <Row>
            <Col>
              <Card>
                    <div>
                        {this.state.people.map(person => (
                            <div key={person.login.uuid}>
                                
                                <div className="card">
                                        <div className="row no-gutters">
                                            <div className="col-auto">
                                                <img src={person.picture.large} className="img-fluid" alt="" />
                                            </div>
                                            <div className="col">
                                                <div className="card-block px-2">
                                                    <h4 className="card-title">{person.name.title}</h4>
                                                    <p className="card-text">{person.name.first}{' '}{person.name.last}</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div> 
                                        
                        ))}     
                    </div>
              </Card>
            </Col>
  
                <Col style={{backgroundColor: "green"}}>
                    2 of 3
                </Col>
          </Row>
            
            
        );
    
    }
}