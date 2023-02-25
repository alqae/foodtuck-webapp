import React from 'react'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { Link, redirect, useSearchParams } from 'react-router-dom'

import { useActivateUserMutation, useSignInMutation } from '../../generated/graphql'
import { Button, Checkbox, Field } from '../../components'
import { AuthActions } from '../../store/reducers'

interface Props { }

interface UserSignUpForm {
  email: string
  password: string
  rememberMe: boolean
}

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password length should be at least 8 characters")
    .max(12, "Password cannot exceed more than 12 characters"),
  rememberMe: Yup.boolean()
    .optional()
})

const SignIn: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const [signIn] = useSignInMutation()
  const [activateUser] = useActivateUserMutation()
  const [searchParams] = useSearchParams()
  const methods = useForm<UserSignUpForm>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    resolver: yupResolver(formSchema)
  });

  React.useEffect(() => {
    const token = searchParams.get('token')

    if (token) {
      toast.promise(
        new Promise(async (resolve, reject) => {
          try {
            const result = await activateUser({ variables: { token } })
            if (result.data?.activeUser.token) {
              dispatch({
                type: AuthActions.setToken,
                payload: result.data?.activeUser.token
              })
              redirect("/")
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
        }),
        {
          loading: 'Loading...',
          success: 'Account activated successfully',
          error: (error) => <b>{error.message}</b>,
        }
      )
    }
  }, [activateUser, dispatch, redirect, searchParams])

  const onSubmit = async (data: UserSignUpForm) => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          const result = await signIn({
            variables: {
              email: data.email,
              password: data.password,
            },
          })

          if (result.data?.signIn.token) {
            dispatch({
              type: AuthActions.setToken,
              payload: result.data?.signIn.token
            })
            redirect("/")
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }),
      {
        loading: 'Loading...',
        success: 'Login successfully',
        error: (error) => <b>{error.message}</b>,
      }
    );
  }

  return (
    <motion.div
      initial={{ transform: "translateX(100%)" }}
      animate={{ transform: "translateX(0)" }}
      exit={{ transform: "translateX(-100%)" }}
      transition={{ delay: 0, duration: 0.25 }}
    >
      <h3>Sign In</h3>

      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
          label="Remember me?"
        />

        <Button type="submit" soft className="mt-3 mb-3">Sign In</Button>
      </form>

      <Link to="/auth/sign-up" className="d--f jc--fe mb-2">
        Create a new acccount
      </Link>

      <Link to="/auth/forgot" className="d--f jc--fe">
        Forgot password?
      </Link>
    </motion.div>
  );
}

SignIn.defaultProps = {}

export default SignIn
