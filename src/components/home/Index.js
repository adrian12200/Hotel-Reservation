import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useContext } from "react"; 
import { useHistory } from "react-router-dom";
import { ToolContext } from "../../core/context/ToolContext";
import { List } from "./List";
import bgimage from "../../assets/images/bg.jpg"

export const Home = () => {
    const history = useHistory()
    const {list_state} = useContext(ToolContext)
    let roomList = list_state.availableList.data

    const addHandler = (id) => {
        const filtered = roomList.filter((a) => a.id === id)
        const hide = window.btoa(JSON.stringify(filtered[0]))
        console.log(hide)
        history.push(`/book/${hide}`)
    }

    return (  
        <Box p={3} alignItems="center" sx={{backgroundImage:`url(${bgimage})`, backgroundSize:"cover"}}>
            <Box maxWidth={1000} height={150} textAlign="center" pt={15} m="0 auto" 
                component={motion.div}
                initial={{ opacity: 0, y: -50}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1}}
            >
                <Box fontSize={50}>Welcome to Casa Hotel</Box>
                <Box><Typography fontSize={22} fontStyle="italic">Experience the comfort of home away from home</Typography></Box>
            </Box>
            <Box mb={2} mt={5} fontSize={30} 
                component={motion.div}
                initial={{ opacity: 0, x: 150}}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 1}}
            >Check out our rooms!
            </Box>
            <Grid container spacing={4}>
                {
                    roomList.map((roomList, k) => (
                        <List key={k} roomList={roomList} id={roomList.id} img={roomList.img} name={roomList.name} price={roomList.price} desc={roomList.desc} addHandler={addHandler}/>
                    ))
                }
            </Grid>
        </Box>
    );
}