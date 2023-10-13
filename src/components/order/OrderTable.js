import { Check, Close, Print } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Icon,
  IconButton,
  Modal,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const OrderTable = ({ products, handleAddItem, handleUpdateStatus }) => {


  const [product, setProduct] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(false);
  };


  const missingUrgent = (id, name) => {
    setProduct({ id, name });
    setModalOpen(true)
  }


  const handleUpdateStatusHere = (product_id, status) => {
    setModalOpen(false);
    handleUpdateStatus(product_id, status);
  }

  return (
    <Paper>

      <Modal
        open={modalOpen}
        onClose={modalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Missing Product</h2>

          <Typography variant="body2">Is '{product.name}'...urgent?</Typography>

          <Box display={'flex'} justifyContent={'end'}>
            <>
              <Button onClick={() => handleUpdateStatusHere(product.id, 2)}>No</Button>
              <Button onClick={() => handleUpdateStatusHere(product.id, 3)}>Yes</Button>
            </>
          </Box>

        </Box>
      </Modal>

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
              <Button onClick={handleAddItem} variant="outlined" sx={{ borderRadius: 30 }}>
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
                    <TableCell>Brand</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {products && products.map((item, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {console.log(products)}
                      <TableCell><Box display={'flex'} alignItems={'center'}><img src={`/assets/${item.image_name}`} height={50} width={50} />{item.product_name}</Box></TableCell>
                      <TableCell>{item.brand}</TableCell>
                      <TableCell>${item.price}</TableCell>
                      <TableCell>{1}</TableCell>
                      <TableCell>${item.price * 1}</TableCell>
                      <TableCell align="right">
                        <Box display={'flex'} justifyContent={(item.status && item.status !== 0) ? 'space-between' : 'end'}>

                          {(item.status && item.status !== 0) ? (
                            <Button sx={{ borderRadius: 30 }} variant="contained" color={item.status === 1 ? 'success' : (item.status === 2 ? 'warning' : 'error')}>{item.status === 1 ? 'Approved' : (item.status === 2 ? 'Missing' : 'Missing – Urgent')}</Button>
                          ) : ""}

                          <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button onClick={() => handleUpdateStatus(item.product_id, 1)}><Check /></Button>
                            <Button onClick={() => missingUrgent(item.product_id, item.product_name)}><Close /></Button>
                          </ButtonGroup>
                        </Box>

                      </TableCell>
                    </TableRow>
                  ))}

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
