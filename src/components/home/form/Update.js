import { Alert, Box, Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, Snackbar, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToolContext } from "../../../core/context/ToolContext";

export const Update = ({match}) => {
    const history = useHistory()
    const {list_state} = useContext(ToolContext)
    let reservationList = list_state.reservationList.data
    let setReservationList = list_state.reservationList.set

    const [fname, setFname] = useState({value: '', error: false, msg: ''})
    const [lname, setLname] = useState({value: '', error: false, msg: ''})
    const [email, setEmail] = useState({value: '', error: false, msg: ''})
    const [contact, setContact] = useState({value: '', error: false, msg: ''})
    const [price, setPrice] = useState({value: '', error: false, msg: ''})
    const [room, setRoom] = useState({value: '', error: false, msg: ''})
    const [inDate, setInDate] = useState(null);
    const [outDate, setOutDate] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        const unhide = JSON.parse(window.atob(match.params.update))
        console.log(unhide)
        setFname({...fname, value: unhide.fname})
        setLname({...lname, value: unhide.lname})
        setEmail({...email, value: unhide.email})
        setContact({...contact, value: unhide.contact})
        setPrice({...price, value: unhide.price})
        setRoom({...room, value: unhide.room})
    }, [])

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
        if (name === 'price') return setPrice({value: value, error: false, msg: ''})
        if (name === 'room') return setRoom({value: value, error: false, msg: ''})
    }

    const submitHandler = () => {
        if (fname.value === '') return setFname({...fname, error: true, msg: 'Field Required'})
        if (lname.value === '') return setLname({...lname, error: true, msg: 'Field Required'})
        if (email.value === '') return setEmail({...email, error: true, msg: 'Field Required'})
        if (contact.value === '') return setContact({...contact, error: true, msg: 'Field Required'})

        const updated = reservationList.map((a) => a.id === JSON.parse(window.atob(match.params.update)).id ? {...a, price: price.value, fname: fname.value, lname: lname.value, email: email.value, contact: contact.value, room: room.value} : {...a})
        setReservationList(updated)
        setIsSuccess(true)
        setTimeout(() => {
            history.push('/')
        }, 1000);
    }

    return (  
        <Box maxWidth={550} border="2px solid #154c79" borderRadius={10} p={4} margin="0 auto">
            <Snackbar open={isSuccess} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                <Alert variant="filled" severity="success">
                    Successfully Updated!
                </Alert>
            </Snackbar>
            <Box mb={4} fontSize={30} color="#154c79">
                Update Information
            </Box>
            <Grid container space={3} sx={{ mb: 3}}>
                <Grid item xs={12} mb={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Room type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={room.value}
                            label="Room type"
                            onChange={(e) => {inputHandler(e)}}
                            name="room"
                        >
                            <MenuItem value={"Single"}>Single</MenuItem>
                            <MenuItem value={"Double"}>Double</MenuItem>
                            <MenuItem value={"Queen"}>Queen</MenuItem>
                            <MenuItem value={"King"}>King</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} mb={3}>
                    <TextField label="Price" name="price" value={'₱ '+parseInt(price.value).toLocaleString('en-US')} onChange={(e) => {inputHandler(e)}} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box mb={1}>Check-In Date</Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker disablePast={true} name="in" value={inDate} onChange={handleIn} fullWidth/>
                    </LocalizationProvider> 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box mb={1}>Check-Out Date</Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker disablePast={true} name="out" value={outDate} onChange={handleOut} fullWidth/>
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
                    whileTap={{ scale: 0.8 }}  sx={{bgcolor: "#154c79", color: "white", ':hover': {bgcolor:"#154c79", color: "white"}}}>Update</Button>
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