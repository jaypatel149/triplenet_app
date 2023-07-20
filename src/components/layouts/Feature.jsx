import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  rem,
  Group,
//   Checkbox,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    display:"flex",
    flexDirection:"column",
    rowGap:"10px",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },
  container: {
    width: "100%",
    maxWidth: "65%",
  },

  title: {
    fontSize: "45px",
    fontWeight:"bold",
    color:"#00d095",

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },
  icons: {
    width: "125px",
    height: "125px",
    padding: "35px",
    backgroundColor: "#e1f4f5",
    borderRadius: "20px",
    cursor: "pointer",
  },
  allIcon: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    width: "450px",
  },
}));

const Feature = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.allIcon}>
            <Group className={classes.icons}>
              <Image
                src="/images/alert.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
            <Group className={classes.icons}>
              <Image
                src="/images/save-money.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
            <Group className={classes.icons}>
              <Image
                src="/images/alert.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
            <Group className={classes.icons}>
              <Image
                src="/images/contact-book.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
            <Group className={classes.icons}>
              <Image
                src="/images/notification.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
            <Group className={classes.icons}>
              <Image
                src="/images/settings.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
            <Group className={classes.icons}>
              <Image src="/images/conversation.png" alt="" width="55px" height="55px" />
            </Group>
            <Group className={classes.icons}>
              <Image
                src="/images/add-user.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
            <Group className={classes.icons}>
              <Image
                src="/images/history.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
          </div>
          <div className={classes.content}>
            <Title className={classes.title}>Tenant Features</Title>
            <Group>
              {/* <Checkbox/> */}
              <Text  mt="md" style={{marginTop:"0",color:"#616161"}}>Payment Due</Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{marginTop:"0",color:"#616161"}}>Option to pay the amount</Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{marginTop:"0",color:"#616161"}}>See all transactions</Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{marginTop:"0",color:"#616161"}}>List of my landlords</Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{marginTop:"0",color:"#616161"}}>Option to set reminder via email/text message</Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{marginTop:"0",color:"#616161"}}>Option to setup autopay via the portal</Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{marginTop:"0",color:"#616161"}}>Options to ask/request to landlord via the portal</Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{marginTop:"0",color:"#616161"}}>Options to add the users to manage the account</Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{marginTop:"0",color:"#616161"}}>Options to view recent activity in the account</Text>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Feature;
