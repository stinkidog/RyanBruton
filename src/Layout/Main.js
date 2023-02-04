import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import headshot from '../Assets/StockHeadshot.jpg'

function Main() {
    return (
        <Container fluid>
            <Image fluid src={headshot} />
        </Container>
    );
}

export default Main;