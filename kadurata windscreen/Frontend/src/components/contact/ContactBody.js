import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Scrollable from "./Scrollable";
import c1 from "./Img/c1.png";
import c2 from "./Img/c2.png";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Map from "./ContactMap";

const Item = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  // padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const myStyle = {
  backgroundColor:"#89CFF0",
  marginTop: "24px",
  fontSize: "30px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function ContactBody() {
  const [value, setValue] = React.useState(0);
  return (
    <div style={myStyle}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>

          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <h1 style={{ textAlign: "center" }}>
              Contact US
            </h1>
          </Grid>
          <Grid item xs={4}></Grid>
          

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Item style={{ backgroundColor: "#151B54",borderRadius: "25px", }}>
                <img src={c1} height="100%" width="100%" />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item style={{ backgroundColor: "#151B54",borderRadius: "25px", }}>
                <img src={c2} height="100%" width="100%" />
              </Item>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>

         <Grid item xs={1}> 
          </Grid>
          <Grid item xs={5}>
            
            Kandurta windscreen & spare part acessories Here to provide you with
            more information , answer any question you may have and create and
            effective solution for your instructional needs..
            
          </Grid>

          <Grid item xs={6}>
           <Map />
            
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Scrollable />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
