import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Carousel from "react-elastic-carousel";
import discount from "./Img/a.png";
import {  Link } from "react-router-dom";
import see from "./Img/see.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Body() {
  const [, setPriceRange] = React.useState([0, 100]);

  const myStyle = {
    backgroundColor:"#89CFF0",
    marginTop: "-70px",
    fontSize: "15px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  

  return (
    <div style={myStyle}>
      

      <Grid item sm={2}>
        
        <Grid item sm={2}>
         
        </Grid>
      </Grid>
      <br></br>
      <Grid item sm={2}><center> <h2>Windscreen</h2> </center></Grid>
      <Carousel itemsToShow={4}>
        
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://lankatropicalwonders.com/uploads/tgallery/kdh_flat_011.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  KDH
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of kdh vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <a href="/Add" style={{textDecoration:'none'}}><Button size="small" color="primary">
                see mor..
              </Button></a>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.toyota.com.sg/showroom/new-models/-/media/5ed08b7b7d43406fa888645c2ba9dca9.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TOYOTA DAYANA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of DAYANA lory. Brand new and reconditioned windscreens with heater is currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <a href="/Add" style={{textDecoration:'none'}}><Button size="small" color="primary">
                See mor..
              </Button></a>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/5/55/Nissan_NV350_Caravan_VR2E26.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  NISsAN NV100
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of NISAN vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <a href="/Add" style={{textDecoration:'none'}}><Button size="small" color="primary">
                See mor..
              </Button></a>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/nissan-patrol-my22-index-1.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TOYOTA Land Cruiser
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Land Cruiser. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <a href="/Add" style={{textDecoration:'none'}}><Button size="small" color="primary">
                See mor..
              </Button></a>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/5/52/BMW_G30_FL_IMG_5351.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  BMW
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of BMW cars. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <a href="/Add" style={{textDecoration:'none'}}><Button size="small" color="primary">
                See mor..
              </Button></a>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://senda.us/autocraft/avisnew/images/veh_images/16171584545image_2.JPG"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  SUZUKI every
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of SUZUKI vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <a href="/Add" style={{textDecoration:'none'}}><Button size="small" color="primary">
                See mor..
              </Button></a>
            </CardActions>
          </Card>
        </Item>
        
      
        
       
      </Carousel>
     

      
      <Grid item sm={2}><center> <h2>Accesory parts</h2> </center></Grid>
      <Carousel itemsToShow={4}>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://m.media-amazon.com/images/I/81lxzv+YsRL._SL1500_.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Wiper Blades
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We have all type of wiper blades & all Size of wiper blades.
                  <br></br>
                  <br></br>
                  These can be obtained from us from Rs 1000 and above.<br></br>
                  10% discount on every item.
                  <h1 style={{ color: "red", fontFamily: "serif" }}>
                    PRICE Rs:1000/=
                  </h1>
                  <img src={discount} alt="discount" height="70" width="70" />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button size="small" color="primary">
                  Buy
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://glasspolish.com/image/cache/catalog/DIY%20kits/21005-1200x1200.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Windscreen Polish
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Safe and easy to use on any type of windscreen or car glass,
                  removes wiper blade marks, very fine scratches, water marks,
                  limescale mineral deposits, chemical stains, surface marks,
                  light scuffs, tree sap and acid rain residue.
                  <h1 style={{ color: "red", fontFamily: "serif" }}>
                    PRICE Rs:1500/=
                  </h1>
                  <img src={discount} alt="discount" height="70" width="70" />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button size="small" color="primary">
                  Buy
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://5.imimg.com/data5/CM/YB/MY-6906050/windows-glass-run-channel-beading-250x250.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Beadings & Moldings
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Press Beading, Side beading, Lock Beading, Dickey Beading,
                  Front & Rear Windscreen Beading<br></br> including all type of
                  beadings, moldings, channeling to suit for any old or latest
                  models
                  <h1 style={{ color: "red", fontFamily: "serif" }}>
                    {" "}
                    Avove Rs:1000/=
                  </h1>
                  <img src={discount} alt="discount" height="70" width="70" />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button size="small" color="primary">
                  Buy
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://sc04.alicdn.com/kf/HTB1cfljD29TBuNjy0Fcq6zeiFXao.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Silicone
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  These efficient and rigid quality windscreen silicone are made
                  from the finest quality<br></br>
                  materials for superior efficacy and bonding that is capable of
                  holding things together precisely.
                  <h1 style={{ color: "red", fontFamily: "serif" }}>
                    PRICE Rs:2000/=
                  </h1>
                  <img src={discount} alt="discount" height="70" width="70" />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button size="small" color="primary">
                  Buy
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://5.imimg.com/data5/BI/UR/MY-9929755/manual-car-side-mirrors-500x500.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Side-view mirror
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We have all types off Inter Side Mirror with best quality.
                  <br></br>You can purchase from Rs:5000/= to higher from us.
                  <h1 style={{ color: "red", fontFamily: "serif" }}>
                    Above Rs:5000/=
                  </h1>
                  <br></br>
                  <br></br>
                  <img src={discount} alt="discount" height="70" width="70" />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button size="small" color="primary">
                  Buy
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://static-01.daraz.lk/p/e40ecc2dabae69d2e2173d403bb0cf58.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Interior Rear View Mirror
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We have all types off Inter Rear View Mirrors with best
                  quality. <br></br>You can purchase from Rs:3000/= to higher
                  from us.
                  <h1 style={{ color: "red", fontFamily: "serif" }}>
                    Above Rs:3000/=
                  </h1>
                  <br></br>
                  <br></br>
                  <img src={discount} alt="discount" height="70" width="70" />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button size="small" color="primary">
                  Buy
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://image.made-in-china.com/44f3j00LynRBYNobUzr/Car-Exterior-Accessories-Sun-Visor-Door-Rain-Guard-Window-Visor-for-Isuzu-D-Max-2020-on.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sun Visor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We have all types off Inter Sun Viser with best quality.{" "}
                  <br></br>You can purchase from Rs:2000/= to higher from us.
                  <h1 style={{ color: "red", fontFamily: "serif" }}>
                    Above Rs:2000/=
                  </h1>
                  <br></br>
                  <br></br>
                  <img src={discount} alt="discount" height="70" width="70" />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button size="small" color="primary">
                  Buy
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://5.imimg.com/data5/HS/EU/MY-44641433/car-back-glass-500x500.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Rear windshields
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We have all types off Inter Rear Wind Screen with best
                  quality. <br></br>You can purchase from Rs:15000/= to higher
                  from us.
                  <h1 style={{ color: "red", fontFamily: "serif" }}>
                    Above Rs:150000/=
                  </h1>
                  <br></br>
                  <br></br>
                  <img src={discount} alt="discount" height="70" width="70" />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button size="small" color="primary">
                  Buy
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Item>
      </Carousel>
    </div>
  );
}
