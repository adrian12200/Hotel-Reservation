import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import "../../assets/css/global.css"
import beachFront from "../../assets/images/beach-front.jpg"
import desserts from "../../assets/images/desserts.jpg"
import cocktail from "../../assets/images/cocktail.jpg"
import lobby from "../../assets/images/lobby.jpg"
import pool from "../../assets/images/pool.jpg"

export const About = () => {
    return (  
        <Box maxWidth={1500} m="0 auto" p={3} height="100vh"
            component={motion.div}
            initial={{ opacity: 0, y: 150}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1}} >
            <Box textAlign="center" display="flex" flexDirection="column">
                <Box fontSize={40} color="#333">Happy to see you here!</Box>
                <Box height={7} width={"50%"} bgcolor={"#154c79"} m={"0 auto"} mt="1rem" mb="1rem"></Box>
                <Box fontSize={18} color="#333" text-align="justify" width="90%" m={"0 auto"}>
                    Casa Hotel is a premier boutique hotel located in the heart of the city, offering an exceptional experience that combines the best of contemporary design and timeless elegance. Our hotel boasts a unique blend of luxurious accommodations, top-notch amenities, and personalized service that is sure to make your stay a memorable one.
                </Box>
            </Box>
            <Grid container spacing={4} className="gallery-images">
                <Grid item xl={9}>
                    <img src={beachFront} className="image-one"  alt="beach-front"></img>
                    <img src={desserts} className="image-two" alt="desserts"></img>
                    <img src={cocktail} className="image-three" alt="cocktail"></img>
                    <img src={lobby} className="image-four" alt="lobby"></img>
                    <img src={pool} className="image-five" alt="pool"></img>
                </Grid>
            </Grid>
        </Box>
    );
}
