import { Print } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrderTable = () => {
  return (
    <Paper>
      <Box p={3}>
        <Grid container>
          <Grid
            item
            xs={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Stack direction={"row"} spacing={2}>
              <Button variant="outlined" sx={{ borderRadius: 30 }}>
                Add item
              </Button>
              <IconButton>
                <Print color="primary" fontSize="large" />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} mt={4}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell align="right">Brand</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell >
                      asd
                    </TableCell>
                    <TableCell align="right">asd</TableCell>
                    <TableCell align="right">asd</TableCell>
                    <TableCell align="right">asd</TableCell>
                    <TableCell align="right">asd</TableCell>
                    <TableCell align="right">asd</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
export default OrderTable;
