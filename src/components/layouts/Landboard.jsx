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
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
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
    fontWeight: "bold",
    color: "#1d5e6d",

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

const Landboard = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Landlord Features</Title>
            <Group>
              {/* <Checkbox/> */}
              <Text mt="md" style={{ marginTop: "0", color: "#616161" }}>
              Add multiple properties
              </Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{ marginTop: "0", color: "#616161" }}>
              Add multiple tenants
              </Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{ marginTop: "0", color: "#616161" }}>
              Payment dashboard
              </Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{ marginTop: "0", color: "#616161" }}>
              Payment due notice
              </Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{ marginTop: "0", color: "#616161" }}>
              Set notification and late payment fee via email/text
              </Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{ marginTop: "0", color: "#616161" }}>
                Send a custom message to the tenant
              </Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{ marginTop: "0", color: "#616161" }}>
              Add the users to manage the account
              </Text>
            </Group>
            <Group>
              {/* <Checkbox /> */}
              <Text mt="md" style={{ marginTop: "0", color: "#616161" }}>
              Send a custom notice to the tenant via paper mail(courier service)
              </Text>
            </Group>
          </div>
          <div className={classes.allIcon}>
            <Group className={classes.icons}>
              <Image
                src="/images/add.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
            <Group className={classes.icons}>
              <Image
                src="/images/people.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
            <Group className={classes.icons}>
              <Image
                src="/images/worldwide.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
            <Group className={classes.icons}>
              <Image
                src="/images/danger.png"
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
                src="/images/message.png"
                alt=""
                width="55px"
                height="55px"
              />
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
                src="/images/pick-up-truck.png"
                alt=""
                width="55px"
                height="55px"
              />
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Landboard;
