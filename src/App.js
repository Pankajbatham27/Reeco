import { useSelector, useDispatch } from "react-redux";
import { addProduct, updateProductStatus } from "./productSlice";
import productsData from "./productList.json";
import Header from "./components/Header";
import { Alert, Box, Container, Modal, Stack } from "@mui/material";
import OrderHeader from "./components/order/OrderHeader";
import OrderTable from "./components/order/OrderTable";
import Snackbar from '@mui/material/Snackbar';
import { useState } from "react";




function App() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (products.length <= 0) {
      for (let index = 0; index < productsData.products.length; index++) {
        dispatch(addProduct(productsData.products[index]));
      }
    } else {
      handleClick("All Products already added");
    }

  };

  const handleUpdateStatus = (product_id, status) => {
    dispatch(updateProductStatus({ product_id, status }));
  };



  const [alert, setAlert] = useState({ open: false, type: false, message: null });

  

  const handleClick = (message) => {
    setAlert({ open: true, type: false, message: message });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert({ open: false, type: false, message: null });

  };

  

  return (

    <Box bgcolor={"#fbfbfb"}>
      <Header />
      <OrderHeader />

      <Box mt={4}>
        <Container maxWidth="xl">
          <Stack direction={"column"} spacing={4}>
            <OrderTable products={products} handleAddItem={handleAddItem} handleUpdateStatus={handleUpdateStatus} />
          </Stack>
        </Container>
      </Box>



      <Snackbar
        open={alert.open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={alert.type === true ? 'success' : 'error'}>
          {alert.message}
        </Alert>
      </Snackbar>


      

    </Box>


    // <div className="App">
    //   <div>
    //     <button onClick={handleAddItem}>Add Item</button>
    //     {products.map((product) => (
    //       <div key={product.product_id}>
    //         <p>Product Name: {product.product_name}</p>
    //         <p>Current Status: {product.status}</p>
    //         <button
    //           onClick={() => handleUpdateStatus(product.product_id, "updated")}
    //         >
    //           Update Status
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default App;
