import React from "react";
import { Card,CardMedia,CardActions,CardContent, Typography,Button } from "@mui/material";
export default function CourseCard({img,alt,course,courseDetails}){
    return(
        <Card sx={{maxWidth:400}}>
            <CardMedia
            component='img'
            height='200'
            image={img}
            alt={alt}
            />
            <CardContent>
                <Typography variant="h5">
                    {course}
                </Typography>
                <Typography variant="body2">
                    {courseDetails}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined">DOWNLOAD BROCHURE</Button>
                <Button variant="contained">LEARN MORE</Button>
            </CardActions>
        </Card>
    );
}