import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(4, "Name should be greater than 4 letters")
    .required("Name is required"),
  bio: Yup.string()
    .min(4, "Bio should be greater than 4 letters")
    .required("Bio is required"),
  username: Yup.string()
    .min(4, "Username should be greater than 4 letters")
    .lowercase("username should be in lowercase")
    .required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should be greater than 8 letters")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const loginSchema = Yup.object({
  username: Yup.string()
    .min(4, "Username should be greater than 4 letters")
    .lowercase("username should be in lowercase")
    .required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should be greater than 8 letters")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});
