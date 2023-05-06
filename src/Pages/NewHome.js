import React, {useState, useEffect} from 'react';
import NewScrollNav from '../Components/NavBar/NewScrollNav';
import { Container, Box, Typography, useMediaQuery, useTheme, Paper } from '@mui/material';
import HeroImage from '../Assets/SeatedPortrait.png';
import Socials from '../Components/Socials/Socials';
import NewFooter from '../Components/NewFooter';
import Timeline from '../Components/Timeline/Timeline';

const NewHome = () => {

    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.only('sm'));
    const isXSmallScreen = useMediaQuery(theme => theme.breakpoints.only('xs'));
    const [imgWidth, setImgWidth] = useState(isSmallScreen ? '50%' : '70%');

    useEffect(() => {
        const handleResize = () => {

            if(isXSmallScreen){
                setImgWidth('80%');
            }
            else if(isSmallScreen){
                setImgWidth('60%');
            }
            else{
                setImgWidth('70%');
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSmallScreen]);

    return (
        <Container maxWidth={false} disableGutters>
            <NewScrollNav />
            <Container sx={{paddingTop: { xs: '5rem', md: '7rem' }}}>
                <Box sx={{display: 'flex', gap: '2rem', flexDirection: { xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'start'}}}>
                            <Typography variant='h1' color={'primary.contrastText'} fontWeight={400} pb={'0.5rem'} sx={{ textAlign: { xs: 'center', md: 'left'}, fontSize: { xs: "5rem", sm: "6rem"}}}>
                                Ryan <br/> Bruton
                            </Typography>
                            <Typography variant='h2' color={'secondary'} fontWeight={400} pb={'1rem'} sx={{ fontSize: {xs: "3rem", sm: "3.75rem"}}}>
                                Developer
                            </Typography>
                            <Typography variant='h6' color={'primary.contrastText'} pb={'1rem'} sx={{ textAlign: {xs: 'center', md: 'left'}}}>
                                Calisthenics &#8226; Guitar &#8226; Self Improvement
                            </Typography>
                            <Socials size="2rem"/>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center', flex: 1}}>
                        <img src={HeroImage}
                        style={{ 
                            width: `${imgWidth}`,
                            height: 'auto', 
                            borderRadius: '1%', 
                            filter: 'drop-shadow(10px 15px 4px rgba(0,0,0, 0.25))'
                        }}/>
                    </Box>
                </Box>
            </Container>
            <Container sx={{paddingTop: "3rem"}}>
                    <Paper elevation={3} sx={{width: "100%", backgroundColor: "primary.dark"}}>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                            <Typography variant='h2' color={'primary.contrastText'} fontWeight={400} py={'4rem'}>
                                About Me
                            </Typography>
                            <Timeline />
                        </Box>
                    </Paper>         
            </Container>
            <NewFooter/>
        </Container>
    );
}

export default NewHome;