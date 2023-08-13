import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

export const List = ({ id, img, name, price, desc, addHandler}) => {
    return ( 
        <Grid item xl={3} desktop={6} laptop={6} mobile={12}>
            <Box 
                component={motion.div}
                initial={{ opacity: 0, x: 150}}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 1}}
            >
                <Card sx={{ maxWidth: "auto"}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="170"
                        image={img}
                        alt={name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" >
                                {name}
                            </Typography>
                            <Box>
                                ₱ {parseInt(price).toLocaleString('en-US')}
                            </Box>
                            <Typography variant="body2" color="text.secondary" noWrap>
                                {desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => addHandler(id, name)}>
                            Reserve this room
                        </Button>
                    </CardActions>  
                </Card> 
            </Box>
        </Grid> 
    );
}