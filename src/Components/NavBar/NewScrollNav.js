import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { Button, Container, Toolbar, Box, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const pages = ['Home', 'About', 'Blog']

const NewScrollNav = () => {

    const { currentTheme, toggleTheme } = useContext(ThemeContext);
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <AppBar position="fixed" sx={{ width: '100%' }}>
            <Container>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
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
                                sx={{
                                    color: "primary.contrastText",
                                    padding: "0 20px"
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    {toggleMenu
                        ?
                        <IconButton sx={{ display: { sx: 'flex', sm: 'none' }, color: "primary.contrastText" }}>
                            <RiCloseLine size={30} onClick={() => setToggleMenu(false)} />
                        </IconButton>
                        :
                        <IconButton sx={{ display: { sx: 'flex', sm: 'none' }, color: "primary.contrastText" }}>
                            <RiMenu3Line size={30} onClick={() => setToggleMenu(true)} />
                        </IconButton>
                    }
                    {toggleMenu && (
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, borderRadius: '2%', paddingTop: '1rem' }}
                            flexDirection={"column"}
                            gap={2}
                            position={'absolute'}
                            top={'56px'}
                            right={0}
                            zIndex={1}
                            bgcolor={'primary.main'}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{
                                        color: "primary.contrastText",
                                        padding: "0px 50px"
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                            <IconButton onClick={toggleTheme} color='secondary' sx={{paddingBottom: '1.5rem'}}>
                                {currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                            </IconButton>
                        </Box>
                    )}
                    <IconButton onClick={toggleTheme} color='secondary' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}


// .header__navbar-menu_container {
//     display: flex;
//     justify-content: flex-end;
//     align-items: flex-end;
//     flex-direction: column;
//     text-align: end;
//     background: rgb(7, 6, 48);
//     padding: 2rem;
//     position: absolute;
//     gap: 20px;
//     right: -2rem;
//     top: 40px;
//     margin-top: 1rem;
//     min-width: 210px;
//     border-radius: 5px;
//     box-shadow: 0px 0px 5px rgba(0,0, 0,0.2);
//     z-index: 1;
// }

export default NewScrollNav;