import { useSelector, useDispatch } from "react-redux";
import { addProduct, updateProductStatus } from "./productSlice";
import productsData from "./productList.json";
import Header from "./components/Header";
import { Box, Container, Stack } from "@mui/material";
import OrderHeader from "./components/order/OrderHeader";
import OrderTable from "./components/order/OrderTable";

function App() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    for (let index = 0; index < productsData.products.length; index++) {
      dispatch(addProduct(productsData.products[index]));
    }
  };

  const handleUpdateStatus = (product_id, status) => {
    dispatch(updateProductStatus({ product_id, status }));
  };

  return (
    <Box bgcolor={"#fbfbfb"}>
      <Header />
      <OrderHeader />

      <Box mt={4}>
        <Container maxWidth="xl">
          <Stack direction={"column"} spacing={4}>
            <OrderTable />
          </Stack>
        </Container>
      </Box>
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
