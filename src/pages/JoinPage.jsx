import { Box, Grid, Paper, Typography, FormControl, TextField, Button } from "@mui/material"
import { LogIn } from "lucide-react";
import { useForm } from 'react-hook-form';
import { auth, createUserWithEmailAndPassword } from '../config/fireBaseConfig';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const JoinPage = () => {
  const {register,handleSubmit} = useForm();

  const navigate = useNavigate();

  const onSubmit  = async (data)=>{
   

    try {

    const response =  await  createUserWithEmailAndPassword(auth,data.email,data.password);

    if(response.user !==undefined){
      toast.success("User Created Successfully");
      navigate("/login");
    }
      
    } catch (error) {
      toast.error(error.message.toString())
      console.log(error);
    }

  }
  return (
    <>
      <Box >
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/login.png" width='100%' alt="login" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h3">Register</Typography>
              <hr />
              <form onSubmit={handleSubmit(onSubmit)} >
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
                      <Button type="submit" variant="contained" color="primary"
                        startIcon={<LogIn />}>
                        Register
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default JoinPage