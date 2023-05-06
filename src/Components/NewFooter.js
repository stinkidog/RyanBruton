import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import Socials from "./Socials/Socials";

const NewFooter = () => {
    return (
        <Container disableGutters maxWidth={false} sx={{ backgroundColor: "primary.main", height: "60px" }}>
            <Container sx={{height: "100%"}}>
                <Grid container sx={{height: "100%"}}>
                    <Grid item xs={6} md={4}>
                        <Box display={"flex"} alignItems={"center"} height={"100%"}>
                            <Typography sx={{fontSize: {xs: "12px", sm: "14px"}}} color={"primary.contrastText"}>
                                Copyright Ryan Bruton &copy;
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={5}>
                        <Box display={"flex"} alignItems={"center"} sx={{ justifyContent: { xs: "end", md: "center"} }} height={"100%"}>
                            <Socials size="1.5rem" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default NewFooter;