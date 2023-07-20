
import { Link } from "react-router-dom";
import {
  createStyles,
  Header,
  Group,
  Container,
  Burger,
  Image,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Hero from "./Hero";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    marginLeft: "45%",
    justifyContent: "left",
    columnGap: "45%",
    alignItems: "center",
    paddingTop:"20px",
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
      marginLeft:"auto",
      columnGap:"0%",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  button: {
    [theme.fn.smallerThan('xs')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },
  control: {
    background: "#1d5e6d",
    "&:hover": {
      background: "#00d095",
    },
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },
  header: {
    backgroundColor: "#e1f4f5",
    borderBottom:"none",
  },
}));

const Navbar = () => {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
    <Header height={70} className={classes.header}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
          />
        <Link to="/">
        <Image
          src="https://www.triplenet-us.com/static/media/tripleNet.895f03de31b8bc9a9621f54ae7e2d179.svg"
          style={{ width: "150px", height: "auto" }}
          alt="logo"
          />
        </Link>
        <Group spacing={0} className={classes.button} position="right" noWrap>
          <Button radius="xl" size="md" className={classes.control} component={Link} to="/login">
            Login
          </Button>
        </Group>
      </Container>
    </Header>
        <Hero/>
          </>
  );
};

export default Navbar;
