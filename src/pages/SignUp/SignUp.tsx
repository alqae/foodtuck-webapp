import React from 'react'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { BiRename } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { Link, redirect } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
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

const SignUp: React.FC<Props> = () => {
  const [signUp] = useSignUpMutation()

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
        try {
          const result = await signUp({
            variables: {
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              password: data.password,
            }
          })

          if (result.data?.signUp) {
            redirect("/auth/sign-in")
            resolve(result.data?.signUp)
          }
        } catch (error) {
          reject(error)
        }
      }),
      {
        loading: 'Saving...',
        success: 'Account created successfully',
        error: (error) => <b>{error.message}</b>,
      }
    );
  };

  return (
    <motion.div
      initial={{ transform: "translateX(-100%)" }}
      animate={{ transform: "translateX(0)" }}
      exit={{ transform: "translateX(100%)" }}
      transition={{ delay: 0, duration: 0.25 }}
    >
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

        <Button type="submit" soft className="mt-3 mb-3">Sign Up</Button>
      </form>

      <Link to="/auth/sign-in" className="d--f jc--fe mb-2">
        Already have an account?
      </Link>

      <Link to="/auth/forgot" className="d--f jc--fe">
        Forgot password?
      </Link>
    </motion.div>
  )
}

SignUp.defaultProps = {}

export default SignUp
