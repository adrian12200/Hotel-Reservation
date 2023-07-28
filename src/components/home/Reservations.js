import { Box, Button, Table, TableCell, TableBody, TableRow, TableContainer, TableHead, Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ToolContext } from "../../core/context/ToolContext";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { ModalDelete } from "../layouts/ModalDelete";

const FormatDate = (date) => {
    return new Date(date).toLocaleDateString('en-us', {weekday: "long", year: "numeric", month: "short", day: "numeric"})
}

const GetDays = (inDate, outDate) => {
    const d1 = new Date(inDate)
    const d2 = new Date(outDate)
    const diffTime = Math.abs(d2 - d1)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
}

const Total = (num1,num2) => {
    const totalDays = num1 * num2
    return totalDays
}

const Format = (num) => {
    return num.toLocaleString('en-US');
}

export const Reservations = () => {
    const history = useHistory()
    const {list_state} = useContext(ToolContext)
    let reservationList = list_state.reservationList.data
    let setReservationList = list_state.reservationList.set
    const [isShow, setIsShow] = useState(false)
    const [ids, setIds] = useState(0)

    const updateHandler = (id) => {
        const filtered = reservationList.filter((a) => a.id === id )
        console.log(filtered[0])
        const hide = window.btoa(JSON.stringify(filtered[0]))
        history.push(`/reservation/update/${hide}`)
    }

    const deleteFromList = () =>{
        const deleteThis = reservationList.filter((li) => li.id !== ids);
        setIsShow(false)
        setReservationList([...deleteThis]);
    }

    const showAlert = (id) => {
        setIsShow(true)
        setIds(id)
    }

    const cancelHandler = () => {
        setIsShow(false)
    }

    return (  
        <Box p={3} alignItems="center">
            <Box fontSize={25} mb={2}>Reservation List</Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{fontSize: 20, width: 150, color: "#154c79"}}>Check in</TableCell>
                            <TableCell align="left" sx={{fontSize: 20, width: 150, color: "#154c79"}}>Check out</TableCell>
                            <TableCell align="left" sx={{fontSize: 20, width: 150, color: "#154c79"}}>Days</TableCell>
                            <TableCell align="left" sx={{fontSize: 20, width: 150, color: "#154c79"}}>Price</TableCell>
                            <TableCell align="left" sx={{fontSize: 20, width: 150, color: "#154c79"}}>First name</TableCell>
                            <TableCell align="left" sx={{fontSize: 20, width: 150, color: "#154c79"}}>Last name</TableCell>
                            <TableCell align="left" sx={{fontSize: 20, width: 150, color: "#154c79"}}>Email</TableCell>
                            <TableCell align="left" sx={{fontSize: 20, width: 150, color: "#154c79"}}>Contact</TableCell>
                            <TableCell align="left" sx={{fontSize: 20, width: 150, color: "#154c79"}}>Room type</TableCell>
                            <TableCell align="left" sx={{fontSize: 20, width: 150, color: "#154c79"}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            reservationList.map((reservationList, k) => (
                                <TableRow key={reservationList.id}>
                                    <TableCell component="th" scope="row">{FormatDate(reservationList.in)}</TableCell>
                                    <TableCell align="left">{FormatDate(reservationList.out)}</TableCell>
                                    <TableCell align="left">{GetDays(reservationList.in, reservationList.out)}</TableCell>
                                    <TableCell align="left">₱{Format(Total(GetDays(reservationList.in, reservationList.out),parseInt(reservationList.price)))}</TableCell>
                                    <TableCell align="left">{reservationList.fname}</TableCell>
                                    <TableCell align="left">{reservationList.lname}</TableCell>
                                    <TableCell align="left">{reservationList.email}</TableCell>
                                    <TableCell align="left">0{reservationList.contact}</TableCell>
                                    <TableCell align="left">{reservationList.room}</TableCell>
                                    <TableCell align="left">
                                        <Box display="flex">
                                            <Button 
                                                component={motion.div} 
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    default: {
                                                        duration: 3,
                                                        ease: [0, 0.71, 0.2, 1.01]
                                                    },
                                                    scale: {
                                                        type: "spring",
                                                        damping: 20,
                                                        stiffness: 100,
                                                        restDelta: 0.001
                                                    }
                                                }} 
                                                whileHover={{ scale: 1.1 }} 
                                                whileTap={{ scale: 0.8 }}
                                                onClick={() => updateHandler(reservationList.id)}
                                                sx={{mr: 2,bgcolor: "#154c79", color: "white", ':hover': {bgcolor:"#154c79", color: "white"}}}>Update
                                            </Button>
                                            <Button 
                                                component={motion.div} 
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    default: {
                                                        duration: 3,
                                                        ease: [0, 0.71, 0.2, 1.01]
                                                    },
                                                    scale: {
                                                        type: "spring",
                                                        damping: 20,
                                                        stiffness: 100,
                                                        restDelta: 0.001
                                                    }
                                                }} 
                                                whileHover={{ scale: 1.1 }} 
                                                whileTap={{ scale: 0.8 }}
                                                onClick={() => showAlert(reservationList.id)}
                                                sx={{bgcolor: "#154c79", color: "white", ':hover': {bgcolor:"#154c79", color: "white"}}}>Delete
                                            </Button>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <ModalDelete isShow={isShow} cancelHandler={cancelHandler} deleteFromList={deleteFromList}/>
        </Box>
    );
}