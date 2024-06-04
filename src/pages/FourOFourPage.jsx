import { Box, Typography } from "@mui/material"

const FourOFourPage = () => {
  return (
    <>
      <Box sx={{ height: '100vh' }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box>
          <img src="/notfound.svg" width="100%" alt="" />
          <Box>
            <Typography variant="h2" sx={{textAlign:'center'}}>Page Not found!</Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default FourOFourPage