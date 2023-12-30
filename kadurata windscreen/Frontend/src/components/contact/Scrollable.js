import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/LocationOn";
import PersonPinIcon from "@material-ui/icons/MailOutline";
import HelpIcon from "@material-ui/icons/SmsFailed";
import ShoppingBasket from "@material-ui/icons/Facebook";
import ThumbDown from "@material-ui/icons/Instagram";
import ThumbUp from "@material-ui/icons/WhatsApp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#00FFFF",
    borderRadius: "15px",
    textAlign: "center",
  },
}));

export default function Scrollable() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<PhoneIcon />} aria-label="phone" {...a11yProps(0)}/>
          <Tab
            icon={<FavoriteIcon />}
            aria-label="LocationOn"
            {...a11yProps(1)}
          />
          <Tab
            icon={<PersonPinIcon />}
            aria-label="MailOutline"
            {...a11yProps(2)}
          />
          <Tab icon={<HelpIcon />} aria-label="Sms" {...a11yProps(3)} />
          <Tab
            icon={<ShoppingBasket />}
            aria-label="Facebook"
            {...a11yProps(4)}
          />
          <Tab icon={<ThumbDown />} aria-label="Instagram" {...a11yProps(5)} />
          <Tab icon={<ThumbUp />} aria-label="WhatsApp" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h1 style={{ fontFamily: "serif" }}>
          HOTLINE:077-1126419 / 077-3136048
        </h1>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3 style={{ fontFamily: "serif" }}>
          Mathale branch :NO 159/B,Kandy Road,Kohobiliwela,Mathale<br></br>
          Kandy Branch :No103/C,Mawilmada Road,Katugasthota,Kandy
        </h3>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1 style={{ fontFamily: "serif" }}>
          WWW.kaduratawindscreen@gmail.com
        </h1>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h1 style={{ fontFamily: "serif" }}>Imo/viber-0773136048</h1>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Click this link Go to our official page<br></br>
        <a href="https://www.facebook.com/Kandurata-Windscreen-House-100167031863820/">
          <h4>FaceBook</h4>
        </a>
      </TabPanel>
      <TabPanel value={value} index={5}>
        Click this link Go to our official page<br></br>
        <a href="">
          <h4>Instagram</h4>
        </a>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <h4 value={value} index={4}>
          Whatsapp:<br></br>077-2088598/077-8062517/071-0449503/071-1035155
        </h4>
      </TabPanel>
    </div>
  );
}
