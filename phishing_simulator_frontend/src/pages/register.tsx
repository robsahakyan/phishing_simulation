import { ReactNode, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Container, Typography, Box, CircularProgress, Link } from "@mui/material";
import { customToast } from "src/@core/styles/libs/react-toastify";
import { dispatch } from "src/redux/hooks";
import { registerUserThunk } from "src/redux/user/thunk";
import { useRouter } from "next/router";
import SignInLayout from "src/layouts/SignInLayout";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Register = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonIsDisable, setToDisableButton] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    setToDisableButton(true)
    
    dispatch(registerUserThunk(data))
      .unwrap()
      .then(() => {
        customToast.success('User successfully created');
        router.push('/login')
      })
      .catch(err => {
        customToast.error(err.message || 'Registration failed')
      })
      .finally(() => {
        setToDisableButton(false)
        setIsLoading(false)
      })
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 8 }}>
        <Typography variant="h4" gutterBottom>Register</Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: "First name is required" }}
            render={({ field }) => <TextField {...field} label="First Name" fullWidth margin="normal" error={!!errors.firstName} helperText={errors.firstName?.message} />}
          />

          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: "Last name is required" }}
            render={({ field }) => <TextField {...field} label="Last Name" fullWidth margin="normal" error={!!errors.lastName} helperText={errors.lastName?.message} />}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" } }}
            render={({ field }) => <TextField {...field} label="Email" fullWidth margin="normal" error={!!errors.email} helperText={errors.email?.message} />}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } }}
            render={({ field }) => <TextField {...field} type="password" label="Password" fullWidth margin="normal" error={!!errors.password} helperText={errors.password?.message} />}
          />

          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ mt: 2, '&.Mui-disabled': { backgroundColor: 'gray' } }} 
            disabled={buttonIsDisable || !!Object.keys(errors).length}
            >
            {isLoading ? <CircularProgress size={24} sx={{ color: 'white' }}  /> : "Register"}
          </Button>
        </form>
      </Box>
      <Box sx={{ mt: 8, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
        <Typography sx={{ fontSize: '16px'}}>Already have an account?</Typography>
        <Link href='/login'>Sign in</Link>
      </Box>
    </Container>
  );
};

Register.getLayout = (page: ReactNode) => <SignInLayout>{page}</SignInLayout>
Register.guestGuard = true;


export default Register;
