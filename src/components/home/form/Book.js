import { Alert, Box, Button, Grid, Snackbar, TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useHistory } from "react-router-dom";
import { ToolContext } from "../../../core/context/ToolContext";
import InputAdornment from '@mui/material/InputAdornment';
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Book  = ({ match }) => {
    const history = useHistory()
    const {list_state} = useContext(ToolContext)
    let reservationList = list_state.reservationList.data
    let setReservationList = list_state.reservationList.set

    const [inf, setInf] = useState({})

    useEffect(() => {
        const unhide = JSON.parse(window.atob(match.params.reservation))
        setInf(unhide)
    }, [])

    const [fname, setFname] = useState({value: '', error: false, msg: ''})
    const [lname, setLname] = useState({value: '', error: false, msg: ''})
    const [email, setEmail] = useState({value: '', error: false, msg: ''})
    const [contact, setContact] = useState({value: '', error: false, msg: ''})
    const [inDate, setInDate] = useState(null);
    const [outDate, setOutDate] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false)

    const handleIn = (newvalue) => {
        let notAvailableDates = reservationList.map(r => [r.in.$d,r.out.$d])
        let checkDates = notAvailableDates.map(element => {
            if(newvalue.$d >= element[0] && newvalue.$d <= element[1]){
                return false;
            }
            return true;
        });
        console.log(checkDates.includes(false))
        if(checkDates.includes(false)){
            setInDate(null)
            return 
        }
        setInDate(newvalue)
    }

    const handleOut = (newvalue) => {
        let notAvailableDates = reservationList.map(r => [r.in.$d,r.out.$d])
        let checkDates = notAvailableDates.map(element => {
            if(newvalue.$d >= element[0] && newvalue.$d <= element[1]){
                return false;
            }
            return true;
        });
        console.log(checkDates.includes(false))
        if(checkDates.includes(false)){
            setOutDate(null)
            return 
        }
        setOutDate(newvalue)
    }

    const inputHandler = (i) => {
        const {name, value} = i.target

        if (name === 'fname') return setFname({value: value, error: false, msg: ''})
        if (name === 'lname') return setLname({value: value, error: false, msg: ''})
        if (name === 'email') return setEmail({value: value, error: false, msg: ''})
        if (name === 'contact') return setContact({value: value, error: false, msg: ''})
    }

    const submitHandler = () => {
        if (fname.value === '') return setFname({...fname, error: true, msg: 'Field Required'})
        if (lname.value === '') return setLname({...lname, error: true, msg: 'Field Required'})
        if (email.value === '') return setEmail({...email, error: true, msg: 'Field Required'})
        if (contact.value === '') return setContact({...contact, error: true, msg: 'Field Required'})

        const newAdd = {id: reservationList.length + 1, in: inDate, out: outDate, price: inf.price, fname: fname.value, lname: lname.value, email: email.value, contact: contact.value, room: inf.name}
        console.log(newAdd)
        setReservationList([...reservationList, newAdd])
        setIsSuccess(true)
        setTimeout(() => {
            history.push('/')
        }, 1000);
    }

    return (  
        <Box maxWidth={550} border="2px solid #154c79" borderRadius={10} p={4} margin="0 auto">
            <Snackbar open={isSuccess} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                <Alert variant="filled" severity="success">
                    Successfully Reserved!
                </Alert>
            </Snackbar>
            <Box mb={4} fontSize={30} color="#154c79">
                Reservation Details
            </Box>
            <Grid container space={3} sx={{ mb: 3}}>
                <Grid item xs={12} mb={3}>
                    <TextField label="Room Type" value={inf.name} fullWidth/>
                </Grid>
                <Grid item xs={12} mb={3}>
                    <TextField label="Price" value={'₱ '+parseInt(inf.price).toLocaleString('en-US')} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box mb={1}>Check-In Date</Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker disablePast={true} value={inDate} onChange={handleIn} fullWidth/>
                    </LocalizationProvider> 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box mb={1}>Check-Out Date</Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker disablePast={true} value={outDate} onChange={handleOut} fullWidth/>
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Box mb={1}>Personal Details</Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField label="First Name" name="fname" value={fname.value} error={fname.error} helperText={fname.msg} onChange={(e) => {inputHandler(e)}} fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Last Name" name="lname" value={lname.value} error={lname.error} helperText={lname.msg} onChange={(e) => {inputHandler(e)}} fullWidth></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Email" name="email" value={email.value} error={email.error} helperText={email.msg} onChange={(e) => {inputHandler(e)}} fullWidth></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Contact Number" name="contact" value={contact.value} error={contact.error} helperText={contact.msg} onChange={(e) => {inputHandler(e)}} type="number" InputProps={{startAdornment: <InputAdornment position="start">+63</InputAdornment>,}}fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Button fullWidth onClick={submitHandler} 
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
                    whileTap={{ scale: 0.8 }}  sx={{bgcolor: "#154c79", color: "white", ':hover': {bgcolor:"#154c79", color: "white"}}}>Reserve</Button>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Button fullWidth onClick={() => history.push('/')}
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
                    sx={{border: "1px solid #154c79", color: "#154c79"}}>Cancel</Button>
                </Grid>
            </Grid>
        </Box>
    );
}