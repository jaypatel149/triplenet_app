import {
  createStyles,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  Image,
  Container,
  Text,
} from "@mantine/core";
import { useForm } from '@mantine/form';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
      paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    },
  },
  image: {
    width: "400px",
    objectFit: "contain",
  },
  button:{
    width:"25%",
    backgroundColor:"#00d095",
    '&:hover':{
        backgroundColor:"#00d095", 
    }
  }
}));

const Contact = () => {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Container size="lg" py="xl">
      <div className={classes.wrapper}>
        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <div className={classes.image}>
            <Image
              src="https://www.triplenet-us.com/static/media/LetUsKnowImage.ca30e2f75b83c99c653e34928b2262b1.svg"
              alt=""
            />
          </div>
          <form onSubmit={form.onSubmit(() => {})}>
            <Text style={{color:"#00d095"}}>Let Us Know...</Text>
            <Text style={{fontSize:"45px",color:"#1d5E6D"}}>
              How Can We Help You...!
            </Text>

            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
              <TextInput
                className={classes.inputfield}
                label="First Name"
                name="firstname"
                variant="filled"
                {...form.getInputProps("firstname")}
              />
              <TextInput
                label="Last Name"
                name="lastname"
                variant="filled"
                {...form.getInputProps("lastname")}
              />
            </SimpleGrid>
            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
              <TextInput
                label="Email"
                name="email"
                variant="filled"
                {...form.getInputProps("email")}
              />
              <TextInput
                label="Country"
                name="contry"
                variant="filled"
                {...form.getInputProps("country")}
              />
            </SimpleGrid>
            <Textarea
              mt="md"
              label="Message"
              placeholder="Your message"
              maxRows={10}
              minRows={5}
              autosize
              name="message"
              variant="filled"
              {...form.getInputProps("message")}
            />

            <Group position="center" mt="xl">
              <Button type="submit" size="md" radius="xl" className={classes.button}>
                Send
              </Button>
            </Group>
          </form>
        </SimpleGrid>
      </div>
    </Container>
  );
};

export default Contact;
