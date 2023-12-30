import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import s1 from "./Img/s1.jpg";
import s2 from "./Img/s2.jpg";
import s3 from "./Img/s3.jpg";
import s4 from "./Img/s4.jpg";
import s5 from "./Img/s5.jpg";
import s6 from "./Img/s6.jpg";

import ServiceComment from "./ServiceComment";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const myStyle = {
  backgroundColor:"#89CFF0",
  marginTop: "16px",
  fontSize: "30px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
};

export default function ServiceBody() {
  const [value, setValue] = React.useState(0);
  return (
    <div style={myStyle}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>

          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <h1 style={{  textAlign: "center" }}>Services</h1>
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={3}></Grid>
          <Grid item xs={8} md={6} lg={6}>
            <Item>
              <AwesomeSlider>
                <div data-src={s1} />
                <div data-src={s2} />
                <div data-src={s3} />
                <div data-src={s4} />
                <div data-src={s5} />
                <div data-src={s6} />
              </AwesomeSlider>
            </Item>
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={12} md={6} lg={8}>
            <div
              style={{  fontSize: "18px", paddingLeft: "40px" }}
            >
              <h1>Services</h1>
              <h2>Normal Service</h2>
              <h4>
                In here You can choose a place and time to get a service from
                us. You can make the payment after receiving the service.
              </h4>
              <h2>Mobile Services</h2>
              <h4>
                in mobile service, if you are a busy person you don't need to
                visit us to get your vehicle repaired. We will come to you and
                repair your vehicle. you should pay an advance payment for that.
              </h4>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div
              style={{
                backgroundColor: "white",
                fontSize: "15px",
                paddingLeft: "30px",
                paddingRight: "30px",
                borderRadius: "30px",
              }}
            >
              <ServiceComment />
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={8}
            style={{
              color: "red",
              paddingTop: "15px",
              paddingLeft: "70px",
              paddingBottom: "100",
            }}
          >
            GIVE YOUR REVIEW
          </Grid>
          <Grid
            item
            xs={4}
            style={{ paddingBottom: "100px", paddingTop: "15px" }}
          >
            <Item
              style={{
                backgroundColor: "#808080",
                borderRadius: "60px 15px",
                width: "90%",
              }}
            >
              <Box
                sx={{
                  "& > legend": { mt: 0 },
                }}
              >
                <Typography component="legend">Review</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
