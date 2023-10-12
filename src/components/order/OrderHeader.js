import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const OrderHeader = () => {
  return (
    <Paper elevation={4}>
      <Box p={4}>
        <Container maxWidth="xl">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
          </Breadcrumbs>

          <Grid container mt={3}>
            <Grid item xs={6}>
              <Typography variant="h5">Order 32457ABC</Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
              <Stack direction={"row"} spacing={2}>
                <Button variant="outlined" sx={{ borderRadius: 30 }}>
                  Back
                </Button>
                <Button variant="contained" sx={{ borderRadius: 30 }}>
                  Approve order
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Paper>
  );
};
export default OrderHeader;
