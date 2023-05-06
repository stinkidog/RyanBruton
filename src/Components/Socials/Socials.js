import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Box, IconButton } from "@mui/material";
import { IconContext } from "react-icons";
import React from 'react';
import { useTheme } from "@mui/material";

const Socials = (props) => {

    const icons = [
        { Icon: FaGithub, href: 'https://github.com' },
        { Icon: FaYoutube, href: 'https://youtube.com' },
        { Icon: FaTwitter, href: 'https://twitter.com' },
        { Icon: FaLinkedin, href: 'https://linkedin.com' }
    ];

    const theme = useTheme();

    return (
        <IconContext.Provider value={{ size: props.size }}>
            <Box display={"flex"} gap={"1"}>
                {icons.map(( icon , Index) => (
                    <IconButton
                        key={Index}
                        component="a"
                        href={icon.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: theme.palette.primary.contrastTextAlpha,
                            transition: "all .2s ease-in-out",
                            "&:hover": {
                                color: theme.palette.primary.contrastText,
                                transform: "scale(1.2)"
                            }
                        }}
                    >
                        <icon.Icon />
                    </IconButton>
                ))}
            </Box>
        </IconContext.Provider>
    );
}

export default Socials;