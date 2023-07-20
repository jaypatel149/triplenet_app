import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  rem,
  Card,
} from "@mantine/core";
import styles from "./Hero.module.css";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    height:"100vh",
    maxHeight:"70vh",
    position: "relative",
    alignItems: "center",
    paddingLeft: "160px",
    paddingTop: "30px",
    backgroundColor: "#e1f4f5",
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    [theme.fn.smallerThan("sm")]: {
      paddingLeft: 0,
      textAlign: "center",
      flexDirection: "column",
    },
  },

  container: {
    paddingLeft: 0,
    paddingRight: 0,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl}*3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "#1d5e6d",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.fn.smallerThan("sm")]: {
      fontSize: "30px",
      justifyContent: "center",
      gap: "10px",
    },
  },
  paragraph: {
    fontSize: "18px",
    color: "#616161",
    [theme.fn.smallerThan("xs")]: {
      fontSize: "14px",
    },
  },
  pipe: {
    fontSize: "35px",
    [theme.fn.smallerThan("xs")]: {
      fontSize: "20px",
    },
  },

  control: {
    backgroundColor: "#00d095",
    "&:hover": {
      background: "#00d095",
    },
  },
  groupbtn: {
    [theme.fn.smallerThan("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  hero: {
    objectFit:"cover",
    height: "450px",
    width: "100%",
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth:"40%",
    borderBottomRightRadius:"50px",
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      maxWidth: "100%",
      height: "300px",
      borderBottomLeftRadius: "50px",
    },
  },
  sent: {
    fontSize: "12px",
    backgroundColor: "#00d095",
    "&:hover": {
      background: "#00d095",
    },
  },
  card: {
    borderRadius: "20px",
    width: "200px",
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
    },

  },
  notification: {
    position: "absolute",
    right: "294px",
    top: "245px",
    zIndex: 999,
    [theme.fn.smallerThan("xs")]: {
      right: "0px",
      top:"300px"
    },
  },
  profile: {
    position: "absolute",
    zIndex: 99,
    top: "-20px",
    left: "-30px",
    width: "80px",
    height: "80px",
  },
  makepayment: {
    position: "absolute",
    bottom: "50px",
    right: "580px",
    zIndex: 99,
    [theme.fn.smallerThan("xs")]: {
      right: "auto",
    },
  },
  text: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#332c30",
  },
}));

const Hero = () => {
  const { classes } = useStyles();

  return (
    <>
      <Container fluid className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span>Manage </span>
              <span className={classes.pipe}>&#10072;</span>
              <span>Maintain</span>
            </Title>
            <Text className={classes.paragraph} mt="md">
              A rental management web application where landlord and tenant can
              register themself, and the landlord will manage the tenant and
              their property, and the tenant pays the rent and manage their rent
              transactions.
            </Text>

            <Group mt={30} className={classes.groupbtn}>
              <Button radius="xl" size="md" className={classes.control}>
                Get Free Demo
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={styles.learn}
              >
                Learn More
              </Button>
            </Group>
          </div>
          <div className={styles.hero_box}>
            <img
              src="https://www.triplenet-us.com/static/media/building.a4839acedbca71f8820c.png"
              alt="hero"
              className={classes.hero}
            />
            <div className={classes.notification}>
              <Card padding="xl" className={classes.card}>
                <Group
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0px",
                  }}
                >
                  <Text>Payment Due</Text>&nbsp;&nbsp;
                  <img
                    src="https://www.triplenet-us.com/static/media/warning2.bfd637336d6d2316581e51a3f93737f3.svg"
                    alt=""
                  />
                </Group>
                <Button
                  fullWidth
                  radius="xl"
                  mt="md"
                  size="md"
                  className={classes.sent}
                >
                  Sent Notification
                </Button>
              </Card>
              <img
                src="https://www.triplenet-us.com/static/media/demoUser.fdd5fa298d1a2f7ee0476642a68f783f.svg"
                alt=""
                className={classes.profile}
              />
            </div>
            <div className={classes.makepayment}>
              <Card padding="xl" className={classes.card}>
                <Group style={{gap:"0px",display:"flex",justifyContent:"center"}}>
                  <Title variant="default" className={classes.text}>January  2023</Title>
                  <Text variant="p" style={{color:"#08d4be",fontSize:"12px",fontWeight:"bold",paddingBottom:"10px"}}>Payment Done</Text>
                </Group>
                <Group style={{gap:"0px",display:"flex",justifyContent:"center"}}>
                  <Title variant="default" className={classes.text}>February 2023</Title>
                  <Text variant="p" style={{color:"#08d4be",fontSize:"12px",fontWeight:"bold",paddingBottom:"10px"}}>Payment Done</Text>
                </Group>
                <Group style={{gap:"0px",display:"flex",justifyContent:"center"}}>
                  <Title variant="default" className={classes.text}>March 2023</Title>&nbsp;&nbsp;
                  <img
                    src="https://www.triplenet-us.com/static/media/warning.a3614c1de92bdaef37d496ede90d1764.svg"
                    alt=""
                  />
                  <Text variant="p" style={{color:"#ed2424",fontSize:"12px",fontWeight:"bold",paddingBottom:"10px"}}>Payment Due</Text>
                </Group>
                <Button fullWidth radius="xl" mt="md" size="md">
                  Make Payment
                </Button>
              </Card>
              <img
                src="https://www.triplenet-us.com/static/media/demoUser.fdd5fa298d1a2f7ee0476642a68f783f.svg"
                alt=""
                className={classes.profile}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
