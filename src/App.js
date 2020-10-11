import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navigation from './components/navigation'
import plusMinus from './components/plusMinus';
import Error from './components/error';

import './App.css';
import FetchedUsers from './components/FetchedUsers';
import { Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    
    <div className="App">
      <Container>
              <Row>
                    {/* first row  */}
                    <Col>
                        <BrowserRouter>
                                <div>
                                <Navigation />
                                <Switch>
                                <Route exact path="/">
                                        <Redirect to="/FetchedUsers" />
                                </Route>
                                    <Route path="/FetchedUsers" component={FetchedUsers}/>
                                    <Route path="/plusMinus" component={plusMinus}/>
                                    <Route component={Error}/>
                                </Switch>
                                </div> 
                        </BrowserRouter>
                    </Col>
                    </Row>

      </Container>
                  
    </div>
  );
}

export default App;
