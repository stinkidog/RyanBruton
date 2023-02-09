import './App.css';

import { AboutMe, Blog, Contact, Footer, Header, Home } from './Containers';
import { BlogPost, Hero, NavBar } from './Components';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Header />
                <Home />
                <Home />
                <AboutMe />
                <Blog />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
