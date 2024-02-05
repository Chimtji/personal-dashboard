import { Container, Grid, Skeleton } from "@mantine/core";

export default function HomePage() {
  return (
    <Container>
      <Grid>
        <Grid.Col span={4}>
          <Skeleton height="30em" radius="md" animate={false} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
