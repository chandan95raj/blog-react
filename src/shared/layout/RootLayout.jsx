import { Box, Container } from "@mui/material";
import NavBar from "../components/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>
        <Box sx={{ mt: 4 }} />
        {children}
      </Container>
      <ToastContainer/>
    </>
  )
}

export default RootLayout