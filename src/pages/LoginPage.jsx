import { Box, Grid, Paper, Typography, FormControl, TextField, Button } from "@mui/material"
import { LogIn } from "lucide-react"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from '../modules/user/redux';
import { toast } from "react-toastify";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register,handleSubmit} = useForm();

  const onSubmit  = async(data)=>{
  
    try {
      const response = await dispatch(login(data));

      if(response.type.match(login.fulfilled)){
        toast.success("Logged In !");
        navigate("/dashboard");
      }
        
    } catch (error) {
      toast.error(error)
      
    }

  }
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
            <form onSubmit={handleSubmit(onSubmit)}  >
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="outlined-required"
                      label="Email"
                      placeholder="Enter Email"
                      variant="standard"
                      type="email"
                      {...register("email")}
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
                      type="password"
                      {...register("password")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Button type="submit" variant="contained" color="success"
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