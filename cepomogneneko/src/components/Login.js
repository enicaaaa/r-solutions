import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="centerLoginDiv">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Username</h3>
        <input
          type="text"
          placeholder="Username"
          name="username"
          {...register("text")}
        />

        <h3>Password</h3>
        <input
          type="password"
          placeholder="Password"
          name="password"
          {...register("password")}
        />
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
