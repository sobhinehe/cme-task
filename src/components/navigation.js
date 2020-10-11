import React from 'react';
import {Nav} from 'react-bootstrap'
import {Row, Col, Navbar, Form, InputGroup, FormControl, Button} from 'react-bootstrap'

 
const Navigation = () => {
    return (
       <div>
           <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/FetchedUsers">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/plusMinus">Plus Minus</Nav.Link>
                </Nav.Item>
            </Nav>
            <Row>
                    <Col>
                    <Navbar className="bg-light justify-content-between">
                        <Form inline>
                        <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary">Button</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                        </Navbar>
                      </Col>
                    </Row>
        
         
         
       </div>
    );
}
 
export default Navigation;