import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import bgimage from "../../assets/images/bg.jpg"
import { Top } from "../layouts/Top";
import { About } from "./About";
import { Room } from "./Rooms";

export const Home = () => {
    const homeComponent = useRef();
    const aboutComponent = useRef();
    const roomComponent = useRef();
  
    return (
        <>
            <Top homeComponent={homeComponent} aboutComponent={aboutComponent} roomComponent={roomComponent}/>
            <Box ref={homeComponent} alignItems="center" sx={{backgroundImage: `linear-gradient(rgba(100,100,100,0.7),rgba(100,100,100,0.7)),url(${bgimage})`, backgroundSize:"cover", backgroundPosition:"center", height: "100vh"}}>
                <Box maxWidth={1000} height={"100vh"} textAlign="center" m="0 auto" pt={20}
                    component={motion.div} 
                    initial={{ opacity: 0, y: -50}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 1}}
                >
                    <Box fontSize={80} fontWeight={430}>Casa Hotel</Box>
                    <Box><Typography fontSize={25} fontfontStyle="italic">Experience the comfort of home away from home</Typography></Box>
                </Box>
            </Box>
            <Box ref={aboutComponent}>
                <About/>
            </Box>
            <Box ref={roomComponent}>
                <Room/>
            </Box>
        </>  
    );
}