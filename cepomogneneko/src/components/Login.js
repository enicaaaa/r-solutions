import React from "react";
import { useForm } from "react-hook-form";

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    
      
        <div className="centerLoginDiv">
          <Card sx={{ width: "75%", minWidth: "320px" }}>
          <div className="centerElementsInLoginForm">
            <Typography gutterBottom variant="h5" component="div">
              Login
            </Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="centerElementsInLoginForm">
                  <div className="oneThird"></div>
                  <div>
                    <div>
                    <TextField id="username" label="Korisnicko ime" variant="standard" {...register("username")}/>
                    </div>
                    <div>
                    <TextField id="password" type={"password"} width="100%" label="Sifra" variant="standard" {...register("password")}/>
                    </div>
                  </div>
                  <div className="oneThird"></div>
                </div>
              </Box>
              <div className="centerElementsInLoginForm">
                <Button type="submit">Loguj se</Button>
              </div>
            </form>

          </Card>
        </div>
    
  );
};

export default Login;
