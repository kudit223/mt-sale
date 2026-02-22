import React from "react";
import { AppBar,Box,Toolbar,Typography } from "@mui/material";
export default function Header(){
    return(
        <Box>
            <AppBar position="fixed" sx={{top:0}}>
                <Toolbar variant="dense">
                    <Typography>
                        India E-cart
                    </Typography>
                </Toolbar>  
            </AppBar>
            <Toolbar/>
        </Box>
    )
}