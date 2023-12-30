import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {  Link } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Carousel from "react-elastic-carousel";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));
const myStyle = {
 
  backgroundColor:"#89CFF0",
  marginTop: "0px",
  fontSize: "30px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
};

export default function Addver() {
  return (
    <div style={myStyle}>
     <h2>Toyota</h2>
      <Carousel itemsToShow={4}>
        {/* <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://global.toyota/pages/news/images/2015/03/30/1330/002_2.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Axio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Axio car. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item> */}
        {/* <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.motorbeam.com/wp-content/uploads/2012_Toyota_Aqua_side-1200x900.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Aqua
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Aqua car. Brand new and reconditioned windscreens with heater is currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item> */}
        {/* <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://rental.timescar.jp/price/items/M2212.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Prius
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Prius car. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
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
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://global.toyota/pages/models/images/20191018/kv/allion_ogp_01.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Allion
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Allion cars. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://global.toyota/pages/models/images/20191018/kv/vitz_ogp_01.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Vits
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Vits car. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item> */}
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
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://image-cdn.beforward.jp/large/202008/1933116/BH404593_35b8bf.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  LH113
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of LH113 vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://image-cdn.beforward.jp/files/pictures/201305/123199/BF128368_1.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  LH50
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of LH50 vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Toyota_Hiace_%28second_generation%29_D_front.jpg/1280px-Toyota_Hiace_%28second_generation%29_D_front.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  LH30
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of LH30 vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>


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
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/f/f6/Toyota_TOWNACE_TRUCK_%28R50%29_front.JPG"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Townace
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Townace lory & vans. Brand new and reconditioned windscreens with heater is currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.enhance-auto.jp/catalog/images/562.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  LiteAce
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of liteace lory & van. Brand new and reconditioned windscreens with heater is currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tankwatours.com/wp-content/uploads/2021/08/coaster-01-660x330-1.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Coster
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of coster bus. Brand new and reconditioned windscreens with heater is currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://global.toyota/pages/news/images/2022/01/13/1330/20220113_01_001_s.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TOYOTA Noah
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Noah van. Brand new and reconditioned windscreens with heater is currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
      </Carousel>



      <h2>Nissan</h2>
      <Carousel itemsToShow={4}>
        {/* <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.hgmsites.net/lrg/2012-nissan-leaf-4-door-hb-sl-angular-front-exterior-view_100386730_l.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Nissan Leaf
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of kdh vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://live.staticflickr.com/1857/30832930238_cd9f9ea01d_b.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  AD Vagon
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of DAYANA lory. Brand new and reconditioned windscreens with heater is currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/d/dd/Nissan_Sunny_N17_China_2015-04-06.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  NISSAN N17
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of NISAN vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cardesignresearch.com/media/dbf367ab04c06632fe7afc438eab0cdc_hr3.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  K11
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Land Cruiser. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.motorbeam.com/wp-content/uploads/2013-Nissan-Micra-Headlamp.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  K16
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of BMW cars. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.mianmotorsjapan.com/wp-content/uploads/2020/09/RIMG7174.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  caraven
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of SUZUKI vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item> */}
      </Carousel>




      <h2>Suzuki</h2>
      <Carousel itemsToShow={4}>
        {/* <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://onecarsource.com/wp-content/uploads/2020/10/2021-Suzuki-Swift-Series-II-price-and-specs-revealed.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Swift
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of kdh vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.ccarprice.com/products/Suzuki-Alto-VXL-2020.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Alto
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of DAYANA lory. Brand new and reconditioned windscreens with heater is currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://360view.hum3d.com/zoom/Suzuki/Suzuki_Maruti_800_1986_1000_0001.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Maruti
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of NISAN vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.motorbeam.com/wp-content/uploads/2017-Suzuki-Wagon-R.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  WaganR
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Land Cruiser. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://fichasmotor.com/images/suzuki/suzuki-cultus-ii-hatchback-1-3-gti-3-dr-101-cv.webp"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cultus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of BMW cars. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://sbimotor.com/uploads/car/images/26561/5282618_carP_l_1_jpg20220225-1536-z5nvgi.jpg"
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
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item> */}
      </Carousel>




      <h2>Mazda</h2>
      <Carousel itemsToShow={4}>
        {/* <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Mazda_Familia_S-Wagon_001.jpg/1200px-Mazda_Familia_S-Wagon_001.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Familiya
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of kdh vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/0/09/2015_Mazda2_%28DJ%29_Genki_hatchback_%282018-08-27%29_01.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Demio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of DAYANA lory. Brand new and reconditioned windscreens with heater is currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://d1gymyavdvyjgt.cloudfront.net/drive/images/made/drive/images/remote/https_ssl.caranddriving.com/f2/images/used/big/mazda32319982_750_500_70.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  BJ10
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of NISAN vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.japanesecartrade.com/jct/vehicle_image/1_16081428655fda50111c846.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Axela
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Land Cruiser. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://image-cdn.beforward.jp/large/202203/3443941/BK932287_92971b.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bongo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of BMW cars. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://image-cdn.beforward.jp/files/pictures/201307/140658/BF145583_1.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Brawny
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of SUZUKI vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item> */}
      </Carousel>




      <h2>Isuzu</h2>
      <Carousel itemsToShow={4}>
        {/* <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://automobile-spec.com/cars/isuzu-74.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Gemini
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of kdh vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://i.ytimg.com/vi/JvTOfw2dsz8/maxresdefault.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fargo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of DAYANA lory. Brand new and reconditioned windscreens with heater is currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.trucksnl.com/pictures/ad-6001206-49b5ee9ddca1442d/platform_truck_isuzu_nkr_36_7_dot_500kg_manuell_euro0_1991_6001206.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 NKR
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of NISAN vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://sc04.alicdn.com/kf/Hde61024705194bd9b72a17bdb0e9c4b0P.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  NPR
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of Land Cruiser. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://media.karousell.com/media/photos/products/2021/2/21/isuzu_nkr_mini_dump_1613903211_abc68591_progressive"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ELF
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of BMW cars. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item>
        <Item> */}
          <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://sakuramotors.com/wp-content/uploads/2022/04/1-44.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Journey
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We have windscreens of all models of SUZUKI vans. Brand new and reconditioned windscreens with heater, sensor are currently available.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ backgroundColor: "#E5E4E2" }}>
            <Link to="/login">
              <Button size="small" color="primary">
               Buy
              </Button>
              </Link>
            </CardActions>
          </Card>
        {/* </Item> */}
      </Carousel>
    </div>
  );
}
