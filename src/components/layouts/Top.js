import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export const Top = () => {
    return (
        <Box
            borderBottom="3px solid #154c79"
            m={0} 
            mb={5}
            height={80}
            sx={{color: '#333', bgcolor: 'white'}}
            alignItems="center"
        >
            <Box display="flex" justifyContent="space-around" alignItems="center"
                component={motion.div}
                initial={{ opacity: 0, y: -150}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1}} 
            >
                <Box fontSize={65} fontWeight={500} fontFamily="Satisfy" lineHeight={1.3} sx={{display:{xs:"none", sm:"block" }}} >
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
                            R
                        </Link>
                    </Box>
                </Box>
                <Box sx={{display:{xs:"flex", sm:"none"}, alignItems:"center", gap:"10px"}}>
                    <Button sx={{color:'white', bgcolor:'#154c79'}}>Book now</Button>
                    <MenuIcon sx={{fontSize:30}}/>
                </Box>
            </Box>
        </Box>
    );
}