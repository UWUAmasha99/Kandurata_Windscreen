import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "react-bootstrap/Card";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));
const myStyle = {
 
  backgroundColor:"#89CFF0",
  marginTop: "24px",
  fontSize: "30px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
};

export default function AboutBody() {
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
            <h1 style={{ textAlign: "center" }}>ABOUT US</h1>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Item>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "210px" }}
                  src="https://bkpsdm.sanggau.go.id/wp-content/uploads/2021/07/kisspng-vision-statement-mission-statement-organization-ma-vision-mission-5b0d17a50695b2.520055351527584677027.png"
                />
                <Card.Body>
                  <Card.Title>
                    <h1>Mission & Vision </h1>
                  </Card.Title>
                  <Card.Text>
                    <h3>Misson</h3>
                    <br></br>
                    <br></br>Our vision is to lead the windscreen & accessory
                    parts market as the most dependable supplier.<br></br>
                    <br></br> Our goal is to become a successful, globally
                    renowned manufacturer firm that is acclaimed<br></br><br></br> for its
                    innovation, exceptional customer service, and affordable
                    premium products.<br></br>
                    <br></br>
                    <h3>Vission</h3>
                    <br></br>
                    “To become the worlds leading provider of Windscreen &
                    Accessory Parts.”
                  </Card.Text>
                </Card.Body>
              </Card>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "100%" }}
                  src="https://specco-int.com/assets/img/whoarewe-1.png"
                />
                <Card.Body>
                  <Card.Title>
                    <h1>Who Are We</h1>
                  </Card.Title>
                  <Card.Text>
                    Since 2010, Kandurata Windscreen and accessory Parts has
                    delivered the quickest and best windscreen and spare parts
                    to Sri Lanka. <br></br>Several centers of our company are located all
                    over Sri Lanka. Kadura Windscreen has suppliers all over Sri
                    Lanka, giving customers the security of knowing that we are
                    there wherever you are. This is a very famous and successful
                    independent company in many parts of Sri Lanka.<br></br> Our
                    objective of always offering our clients outstanding,
                    individualized customer service, fair pricing, and a level
                    of quality craftsmanship unmatched by any other is something
                    we take great pleasure in. We also take pride in our local
                    expertise and experience.<br></br> So much so that our unrivaled
                    lifetime warranty applies to all of our work. We serve our
                    customers 24 hours a day, 7 days a week at our company's
                    centers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Item>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "100%" }}
                  src="https://efinancebank.com/assets/templates/bank/frontend/images/awards/1.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    <h1>Awards</h1>
                  </Card.Title>
                  <Card.Text>
                    <h3>
                      1. Business Awards 2016 Best windscreen supplier of the
                      year.
                    </h3>
                    <h3>2. Customer Service Award – 2019</h3>
                    <h3>3. Service Provider of the Year - 2018</h3>
                    <h3>4. Placed 53th in top 100 SL brands – 2020</h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "223px" }}
                  src="https://tse3.mm.bing.net/th?id=OIP.wH4vGtm1uHWAepgrjGuOmgAAAA&pid=Api&P=0"
                />
                <Card.Body>
                  <Card.Title>
                    <h1>OUR LOCATIONS</h1>
                  </Card.Title>
                  <Card.Text>
                    <h3>HEAD OFFICE</h3>
                    147 Kandy RD,Matale<br></br>
                    <h3>Kelaniya Showroom / Stores</h3>
                    <br></br>
                    638/2, Kandy Road, Kelaniya<br></br>
                    <h3>Matara Showroom</h3>
                    <br></br>
                    185, New Town Road, Matara<br></br>
                    <h3>Kandy Showroom/Stores</h3> <br></br>
                    437, Pilimathalawa Road, Kandy
                  </Card.Text>
                </Card.Body>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid
            item
            xs={12}
            style={{
              fontSize: "18px",
              paddingLeft: "50px",
              paddingBottom: "100px",
            }}
          >
            <h1>NEWS</h1>
            Recent News and the updates of the Kandurata Windscreen House.
            <br></br>
            <h3>
              {" "}
              01. Sponsorships:<br></br>
              Kandurata Windscreens and Spareparts (pvt) ltd are delighted to
              have agreed a deal to continue their sponsorship of Lions Club.
            </h3>
            Together with Sri Lanka's largest independent windscreen repair and
            replacement company, the club has planned to sponsor the Sinha Club
            for the coming season.<br></br>
            <h3>
              02. Investing in youth to develop skills and build resilience.
            </h3>
            <br></br>
            The goal of World Youth Skills Day is to spread the idea that by
            giving young people the skills they need, they can improve both
            their own lives and the communities in which they live. The emphasis
            of this year's topic is on the value of providing young people with
            appropriate training. refers to developing skills necessary for
            suitable employment. In order to do this, Kadura Windscreen
            collaborated with the Ministry of Skill Development and developed a
            number of programs for young people to hone their abilities.
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
