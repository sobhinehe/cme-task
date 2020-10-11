import React from 'react';
import FetchRandomUser from './FetchRandomUser';
import { Container, Row, Col} from 'react-bootstrap'

const FetchedUsers = () => {
    return (
       <div>
            <Container>
                <Row>
                    <Col>
                        <FetchRandomUser />
                    </Col>
                </Row>
             </Container>        
       </div>
    );
}
 
export default FetchedUsers;
