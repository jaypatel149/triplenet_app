import {
  createStyles,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  Button,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";


const data = [
  {
    title: "Standard Plans",
    description: "Lorem ipsum text here",
    icon: IconX,
  },
  {
    title: "Standard Plus Plans",
    description: "Lorem ipsum text here",
    icon: IconX,
  },
  {
    title: "Executive Plans",
    description: "Lorem ipsum text here",
    icon: IconX,
  },
];

const useStyles = createStyles((theme) => ({
  inner: {
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontSize: "50px",
    fontWeight: 900,
    color: "white",
    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    fontSize: "17px",
    color: "white",
  },

  card: {
    borderRadius: "20px",
    padding: "30px 20px 70px",
  },
  bgCard: {
    backgroundColor: "#1d5e6d",
    padding: "50px 80px 90px",
    borderRadius: "40px",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    textAlign: "center",
  },
  close: {
    width: "20px",
    height: "20px",
    objectFit: "contain",
    color: "red",
  },
  icontext: {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
    fontSize: "14px",
  },
  doller:{
    fontSize:"60px",
    color:"#1D5E6D",
  },
  headtext:{
    fontSize:"19px",
    textAlign:"center",
    color:"#1D5E6D",
    fontWeight:"bold",
  },
  button:{
    backgroundColor:"#00D095",
    width:"50%",
    margin:"20px auto",
    '&:hover':{
      backgroundColor:"#00D095",
    }
  }
}));

const Plan = () => {
  const { classes } = useStyles();

  return (
    <Container size="lg" py="xl">
      <div className={classes.inner}>
        <div className={classes.bgCard}>
          <Title order={2} className={classes.title} ta="center" mt="sm">
            Our Plans
          </Title>
          <Text className={classes.description} ta="center" mt="md">
            Plans details that landlords needs to buy like
          </Text>
          <SimpleGrid
            cols={3}
            spacing="xl"
            mt={50}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {data.map((item, ind) => {
              return (
                <Card key={ind} shadow="md" className={classes.card}>
                  <Text  mt="sm" className={classes.headtext}>
                    {item.title}
                  </Text>
                  <Text className={classes.cardTitle} mt="md">
                    <span className={classes.doller}>&#36;10</span>&nbsp;&nbsp;&nbsp;Per annum
                  </Text>
                  <div className={classes.text}>
                    <Text fz="sm" mt="sm" className={classes.icontext}>
                      <item.icon stroke={2} className={classes.close} />
                      {item.description}
                    </Text>
                    <Text fz="sm" mt="sm" className={classes.icontext}>
                      <item.icon stroke={2} className={classes.close} />
                      {item.description}
                    </Text>
                    <Text fz="sm" mt="sm" className={classes.icontext}>
                      <item.icon stroke={2} className={classes.close} />
                      {item.description}
                    </Text>
                    <Text fz="sm" mt="sm" className={classes.icontext}>
                      <item.icon stroke={2} className={classes.close} />
                      {item.description}
                    </Text>
                  </div>
                  <Button fullWidth radius="xl" mt="md" size="md" className={classes.button}>Select</Button>
                </Card>
              );
            })}
          </SimpleGrid>
        </div>
      </div>
    </Container>
  );
};

export default Plan;
