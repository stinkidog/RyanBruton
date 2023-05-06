import './App.css';
import React, {createContext, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import NewHome from './Pages/NewHome';

export const ThemeContext = createContext();

const darkTheme = createTheme({
    components: {
        MuiCssBaseline:{
            styleOverrides:{
                body: {
                    backgroundImage: 'linear-gradient(90deg, #08062a 0%, #1c1e3c 53.12%, #08062a 100%)'
                }
            }
        }
    },
    palette:{
        primary: {
            main: 'rgb(7, 6, 48)',
            dark: 'rgba(9,9,24,.5)',
            contrastText: '#FFFFFF',
            contrastTextAlpha: "rgb(255 255 255 / 22%)"
        },
        secondary: {
            main: '#00FFF0'
        }
    },
    typography: {
        fontFamily: [
            'Matter'
        ]
    }
});

const lightTheme = createTheme({
    palette: {
        background: {
            default: '#FFFFFF'
        },
        primary: {
            main: '#FFFFFF',
            contrastText: '#000000',
            contrastTextAlpha: '#000000'
        },
        secondary: {
            main: '#000000'
        }
    },
    typography: {
        fontFamily: [
            'Matter'
        ]
    }
})

const App = () => {

    const [currentTheme, setCurrentTheme] = useState('dark');

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            <ThemeProvider theme={currentTheme  === 'dark' ? darkTheme : lightTheme}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<NewHome />} />
                        {/* <Route path="/blog/:id" element={<Blog />} /> */}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
