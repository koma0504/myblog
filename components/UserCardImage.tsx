import { createStyles, Card, Avatar, Text, Group, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

export function UserCardImage(props: { user }) {
  console.log(props.user.user[0]);
  const { classes, theme } = useStyles();
  // const items = user.map((user) => (
  //   <div key={user.label}>
  //     <Text align="center" size="lg" weight={500}>
  //       {stat.value}
  //     </Text>
  //     <Text align="center" size="sm" color="dimmed">
  //       {stat.label}
  //     </Text>
  //   </div>
  // ));
  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section
        sx={{
          backgroundImage: `url(${props.user.user[0].header.url})`,
          height: 140,
        }}
      />
      <Avatar
        src={props.user.user[0].profile.url}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text align="center" size="lg" weight={500} mt="sm">
        {props.user.user[0].name}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {props.user.user[0].body}
      </Text>
      {/* <Group mt="md" position="center" spacing={30}>
        {items}
      </Group> */}
    </Card>
  );
}
