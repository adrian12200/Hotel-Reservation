import { AppBar, Box, Button, Icon, styled, Toolbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

export const Top = ({ homeComponent, aboutComponent, roomComponent }) => {
    const [color,setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 500){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        transition: ".5s ease",
        alignItems: "center",
        "&:hover": {
            backgroundColor: "#f5f5f5",
            color: "black",
            transition: ".8s ease",
        }
    })

    const Menu = styled(Typography)(({ theme }) => ({
        display: "none",
        [theme.breakpoints.up("laptop")]:{
            display: "flex",
            marginRight: "auto",
            justifyContent:"space-around", 
            gap:"50px",
            padding: "0 50px"
        }
    }));

    const Icons = styled(Icon)(({ theme }) => ({
        display: "none",
        [theme.breakpoints.down("laptop")]:{
            display: "flex",
            marginRight: "auto",
        }
    }));

    const Buttons = styled(Button)(({ theme }) => ({
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
        padding: "8px 12px",
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        }
    }));

    const scrollToElement = (elmRef) => {
        window.scrollTo({ top: elmRef.current.offsetTop - 50, behavior: 'smooth' });
    };

    return (
        <AppBar sx={{backgroundColor: color ? "white" : "transparent", color: color ? "black" : "white", position: 'fixed'}} 
        component={motion.div}
        initial={{ opacity: 0, y: -150}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: .9}}>
            <StyledToolbar>
                <Menu>
                    <Box onClick={() => scrollToElement(homeComponent)} sx={{cursor: "pointer"}}>
                        Home
                    </Box>
                    <Box onClick={() => scrollToElement(aboutComponent)} sx={{cursor: "pointer"}}>
                        About
                    </Box>
                    <Link to="/reservations">
                        Reservations
                    </Link>
                    <Box onClick={() => scrollToElement(roomComponent)} sx={{cursor: "pointer"}}>
                        Rooms
                    </Box>
                    <Link to="/">
                        Contact
                    </Link>
                    <Link to="/">
                        Location
                    </Link>
                </Menu>
                <Icons>
                    <MenuIcon/>
                </Icons>
                <Buttons sx={{marginRight:{mobile:"0", laptop: "50px"}}}>
                    Book now
                </Buttons>
            </StyledToolbar>
        </AppBar>
    );
}


//mr="auto" sx={{display:{mobile:"none", tablet:"none", laptop: "flex"}, justifyContent:"space-around", gap:"50px", alignItems: "center"}}

//sx={{display:{mobile:"flex", tablet: "none"}, alignItems:"center", marginRight: "auto"}}