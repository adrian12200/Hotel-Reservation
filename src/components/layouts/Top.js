import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
                <Box fontSize={65} fontWeight={500} fontFamily="Satisfy" lineHeight={1.3} >
                    Casa Hotel
                </Box>
                <Box display="flex" justifyContent="space-between" width={700} fontSize={27}>
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
            </Box>
        </Box>
    );
}