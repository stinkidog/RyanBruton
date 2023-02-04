import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <h5 style={{ color: "white" }}>Ryan Bruton</h5>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <p style={{ color: "white" }}>&copy; 2023, Ryan Bruton</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;