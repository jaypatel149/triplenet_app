import {
  createStyles,
  Group,
  ActionIcon,
  Text,
  Image
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconMailFilled,
} from "@tabler/icons-react";
import img from '../../assets/trip.png';

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: "#00d095",
    height: "160px",
    padding:"50px 30px 70px ",
    [theme.fn.smallerThan("sm")]: {
      height:"auto",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },
  looking: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap:"0",
  },
  email:{
    color:"white"
  },
  help:{
    display:"flex",
    alignItems:"center",
    marginTop:"0",
    fontSize:"20px",
    color:"#000000",
    fontWeight:"bold",
  },
  social:{
    backgroundColor: "#00d095",  
    '&:hover':{
      backgroundColor: "#00d095",  
    }
  },
  icon:{
    color:"white",
    fontSize:'50px'
  },
  trip:{
    display:"flex",
    flexDirection:"column",
    gap:"0",
  }
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.looking}>
          <Text style={{color:"#1D5E6D",fontSize:"16px"}}>Looking for help? Write us on</Text>
          <Text className={classes.help}><IconMailFilled stroke={2} className={classes.email}/>&nbsp;&nbsp;Looking for help? Write us on</Text>
        </Group>
        <Group className={classes.trip}>
          <Image src={img} alt="" width="150px" height="auto"/>
          <Text style={{color:"#1D5E6D",fontSize:"16px"}}>2023 Triplenet, All Rights Reserved</Text>
        </Group>
        <div>
          <Text style={{color:"#1D5E6D",fontSize:"18px"}}>Follow us on</Text>
          <Group spacing="xs" position="right" noWrap>
            <ActionIcon size="lg" className={classes.social}>
              <IconBrandFacebookFilled stroke={2} className={classes.icon}/>
            </ActionIcon>
            <ActionIcon size="lg" className={classes.social}>
              <IconBrandLinkedin stroke={2} className={classes.icon}/>
            </ActionIcon>
            <ActionIcon size="lg" className={classes.social}>
              <IconBrandInstagram  stroke={2} className={classes.icon}/>
            </ActionIcon>
            <ActionIcon size="lg" className={classes.social}>
              <IconBrandTwitter  stroke={2} className={classes.icon}/>
            </ActionIcon>
          </Group>
        </div>
      </div>
    </div>
  );
};
export default Footer;
