import * as React from "react";
import Grid from "@mui/material/Grid";
import banner1 from "./Img/1.jpeg";


export default function Banner() {
  return (
    <Grid item sm={6} md={10}>
      
        <img src={banner1} alt="banner" height="400" width="100%" />
      
    </Grid>
  );
}
