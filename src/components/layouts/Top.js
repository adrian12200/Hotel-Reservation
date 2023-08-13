import { AppBar, Box, Button, styled, Toolbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export const Top = () => {

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-around"
    })

    const Buttons = styled(Button)(({ theme }) => ({
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        }
    }));

    return (
        <AppBar sx={{backgroundColor:"transparent", position: 'fixed'}}>
            <StyledToolbar
                component={motion.div}
                initial={{ opacity: 0, y: -150}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1}} 
            >
                <Typography fontFamily="Satisfy" fontSize={50}>
                    Casa Hotel
                </Typography>
                <Typography sx={{display:{mobile:"none", tablet:"none", laptop: "flex"}, justifyContent:"space-around", gap:"50px", alignItems: "center"}}>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/reservations">
                        Reservations
                    </Link>
                    <Link to="/">
                        Rooms
                    </Link>
                    <Link to="/">
                        Contact
                    </Link>
                    <Link to="/">
                        Location
                    </Link>
                    <Link to="/">
                        <Buttons>Book Now</Buttons>
                    </Link>
                </Typography>
                <Box sx={{display:{mobile:"flex", tablet: "none"}, alignItems:"center", gap:"10px"}}>
                    <Buttons>Book now</Buttons>
                    <MenuIcon/>
                </Box> 
                {/* <Box fontSize={65} fontWeight={500} fontFamily="Satisfy" lineHeight={1.3} sx={{display:{xs:"none", sm:"block" }}} >
                    Casa Hotel
                </Box>
                <Box fontSize={35} fontWeight={500} fontFamily="Satisfy" lineHeight={2.5} sx={{display:{xs:"block", sm:"none" }}} >
                    Casa Hotel
                </Box>
                <Box justifyContent="space-between" width={700} fontSize={27} sx={{display:{xs:"none", sm:"flex" }}}>
                    <Box>
                        <Link to="/">
                            Home
                        </Link>
                    </Box>
                    <Box>
                        <Link to="/about">
                            About
                        </Link>
                    </Box>
                    <Box>
                        <Link to="/reservations">
                            Reservations
                        </Link>
                    </Box>
                </Box>
                <Box sx={{display:{xs:"flex", sm:"none"}, alignItems:"center", gap:"10px"}}>
                    <Button sx={{color:'white', bgcolor:'#154c79'}}>Book now</Button>
                    <MenuIcon sx={{fontSize:30}}/>
                </Box> */}
            </StyledToolbar>
        </AppBar>
    );
}