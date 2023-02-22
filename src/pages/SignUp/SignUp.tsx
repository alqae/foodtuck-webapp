import React from 'react'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { BiRename } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'

import { Button, Checkbox, Field } from '../../components'
import { useSignUpMutation } from '../../generated/graphql'

interface Props { }

interface UserSignUpForm {
  firstName: string
  lastName: string
  email: string
  password: string
  termsAndConditions: boolean
}

const formSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("FirstName is required"),
  lastName: Yup.string()
    .required("LastName is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password length should be at least 8 characters")
    .max(12, "Password cannot exceed more than 12 characters"),
})

export default (_: Props) => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const methods = useForm<UserSignUpForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      termsAndConditions: false
    },
    resolver: yupResolver(formSchema)
  });

  const onSubmit = async (data: UserSignUpForm) => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        const result = await signUp({
            variables: {
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              password: data.password,
            }
          })

          if (result.data?.signUp) {
            navigate("/auth/sign-in")
            resolve(result.data?.signUp)
          } else {
            reject("Something went wrong")
          }
      }),
      {
        loading: 'Saving...',
        success: 'Account created successfully',
        error: (error) => <b>{error}</b>,
      }
    );
  };

  return (
    <React.Fragment>
      <h3>Sign Up</h3>

      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Field
          suffixIcon={<BiRename size="24px" />}
          label="First Name"
          type="text"
          name="firstName"
          control={methods.control}
        />

        <Field
          suffixIcon={<BiRename size="24px" />}
          label="Last Name"
          type="text"
          name="lastName"
          control={methods.control}
        />

        <Field
          suffixIcon={<AiOutlineMail size="24px" />}
          label="Email"
          type="text"
          name="email"
          control={methods.control}
        />

        <Field
          suffixIcon={<AiOutlineLock size="24px" />}
          label="Password"
          type="password"
          name="password"
          control={methods.control}
        />

        <Checkbox
          control={methods.control}
          name="termsAndConditions"
          required={true}
          label={
            <React.Fragment>
              I agree to these <Link to="/" className="highlight">Terms and Conditions</Link>
            </React.Fragment>
          }
        />

        <Button soft className='m-t-lg m-b-md'>Sign Up</Button>
      </form>

      <NavLink to="/auth/sign-in" className="d--f jc--fe m-b-md">
        Already have an account?
      </NavLink>

      <NavLink to="/auth/forgot" className="d--f jc--fe">
        Forgot password?
      </NavLink>
    </React.Fragment>
  )
}
