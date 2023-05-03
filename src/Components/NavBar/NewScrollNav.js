import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { Button, Container, Toolbar, Box, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const pages = ['Home', 'About', 'Blog']

const NewScrollNav = () => {

    const { currentTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <AppBar position="static" sx={{width: '100%'}}>
            <Container>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Typography 
                        variant="h6"
                        href="/"
                        component="a"
                        sx={{
                            fontWeight: 600
                        }}
                    >
                        Ryan Bruton
                    </Typography>
                    <Box sx={{
                        display: {
                            xs: 'none',
                            sm: 'flex'
                        }
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => console.log("hello")}
                                sx={{
                                    color: "primary.contrastText",
                                    padding: "0 20px"
                                }}
                            >
                                {page}
                            </Button> 
                        ))}
                    </Box>
                    <IconButton onClick={toggleTheme} color='secondary'>
                        {currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon/>}            
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NewScrollNav;