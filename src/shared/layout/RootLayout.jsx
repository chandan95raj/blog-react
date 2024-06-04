import { Box, Container } from "@mui/material"
import NavBar from "../components/NavBar"

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>
        <Box sx={{ mt: 4 }} />
        {children}
      </Container>
    </>
  )
}

export default RootLayout