import { Box, Button, Dialog } from "@mui/material";
import { motion } from "framer-motion"

export const ModalDelete = ({isShow, cancelHandler, deleteFromList}) => {
    return (  
        <Dialog open={isShow}>
            <Box height="100%" width="100%">
                <Box p={3}>
                    <Box>Complete this reservation?</Box> 
                    <Box display="flex" justifyContent="center" gap={1} pt={2}>
                        <Button component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => deleteFromList()} variant="contained" color="success">Yes</Button>
                        <Button component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={cancelHandler} variant="outlined" color="error">Cancel</Button>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
}