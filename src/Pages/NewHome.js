import React, {useState, useEffect} from 'react';
import NewScrollNav from '../Components/NavBar/NewScrollNav';
import { Container, Box, Typography, useMediaQuery } from '@mui/material';
import HeroImage from '../Assets/SeatedPortrait.png';
import Socials from '../Components/Socials/Socials';

const NewHome = () => {

    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('md'));
    const [imgWidth, setImgWidth] = useState(isSmallScreen ? '50%' : '70%');

    useEffect(() => {
        const handleResize = () => {
            setImgWidth(isSmallScreen ? '50%' : '70%');
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSmallScreen]);

    return (
        <Container maxWidth={false} disableGutters>
            <NewScrollNav />
            <Container sx={{paddingTop: '4rem'}}>
                <Box sx={{display: 'flex', gap: '3rem', flexDirection: { xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'start'}}}>
                            <Typography variant='h1' color={'primary.contrastText'} fontWeight={400} pb={'1rem'} sx={{ textAlign: { xs: 'center', md: 'left'}}}>
                                Ryan <br/> Bruton
                            </Typography>
                            <Typography variant='h2' color={'secondary'} fontWeight={400} pb={'1rem'}>
                                Developer
                            </Typography>
                            <Typography variant='h6' color={'primary.contrastText'} pb={'1rem'}>
                                Calisthenics &#8226; Guitar &#8226; Self Improvement
                            </Typography>
                            <Socials size="2rem"/>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center', flex: 1}}>
                        <img src={HeroImage} style={{ 
                            width: `${imgWidth}`, 
                            height: 'auto', 
                            borderRadius: '1%', 
                            filter: 'drop-shadow(10px 15px 4px rgba(0,0,0, 0.25))'
                        }}/>
                    </Box>
                </Box>
            </Container>
        </Container>
    );
}

export default NewHome;