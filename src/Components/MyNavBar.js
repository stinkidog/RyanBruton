import './MyNavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavBar() {
    return (
        //<Container>
        //    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        //        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //        <Navbar.Collapse id="basic-navbar-nav">
        //            <Nav className="justify-content-center" style={{ flex: 1 }}>
        //                <Nav.Link href="#home">Home</Nav.Link>
        //                <Nav.Link href="#link">About</Nav.Link>
        //                <Nav.Link hred="#link">Contact</Nav.Link>
        //            </Nav>
        //        </Navbar.Collapse>
        //    </Navbar>
        //</Container>

        <Container>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Nav className="justify-content-center" style={{ flex: 1 }}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link hred="#link">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
}

export default MyNavBar;