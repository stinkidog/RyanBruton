import './App.css';
import Header from './Layout/Header';
import Body from './Layout/Main';
import Footer from './Layout/Footer';
import Container from 'react-bootstrap/Container';

function App() {
    return (
        <Container fluid className="app-main">
            <Header />
            <Body />
            <Footer />
        </Container>
    );
}

export default App;
