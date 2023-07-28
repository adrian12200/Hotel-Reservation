import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const About = () => {
    return (  
        <Box textAlign="center" maxWidth={1200} m="0 auto" border="2px solid #154c79" borderRadius={10} p={3}
            component={motion.div}
                initial={{ opacity: 0, y: 150}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1}} >
                <Box mb={2} fontSize={40} color="#154c79">Overview</Box>
                <Box fontSize={18}>
                    Casa Hotel is a premier boutique hotel located in the heart of the city, offering an exceptional experience that combines the best of contemporary design and timeless elegance. Our hotel boasts a unique blend of luxurious accommodations, top-notch amenities, and personalized service that is sure to make your stay a memorable one. From our beautifully appointed guest rooms and suites to our exquisite dining options and state-of-the-art facilities, we are committed to providing our guests with an unforgettable experience. Whether you're traveling for business or pleasure, our team of dedicated professionals is here to ensure that your stay with us is nothing short of exceptional. Welcome to Casa Hotel, where comfort, style, and sophistication converge to create the ultimate luxury experience.
                </Box>
        </Box>
    );
}
