import { Box, Grid, Paper, Typography, FormControl, TextField, Button } from "@mui/material"
import { LogIn } from "lucide-react"

const LoginPage = () => {
  return (
    <Box >
      <Grid container>
        <Grid item xs={12} md={6}>
          <img src="/login.png" width='100%' alt="login" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h3">Login</Typography>
            <hr />
            <form>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="outlined-required"
                      label="Email"
                      placeholder="Enter Email"
                      variant="standard"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="outlined-required"
                      label="Password"
                      placeholder="Enter Password"
                      variant="standard"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Button variant="contained" color="success"
                      startIcon={<LogIn />}>
                      Login
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LoginPage