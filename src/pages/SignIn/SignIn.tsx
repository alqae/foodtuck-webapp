import React from 'react'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'

import { useActivateUserMutation, useSignInMutation } from '../../generated/graphql'
import { Button, Checkbox, Field } from '../../components'
import { AuthActions } from '../../store/reducers'

interface Props { }

interface UserSignUpForm {
  email: string
  password: string
  // rememberMe: boolean
}

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password length should be at least 8 characters")
    .max(12, "Password cannot exceed more than 12 characters"),
})

export default ({ }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [signIn] = useSignInMutation()
  const [activateUser] = useActivateUserMutation()
  const [searchParams] = useSearchParams()
  const methods = useForm<UserSignUpForm>({
    defaultValues: {
      email: "",
      password: "",
      // rememberMe: false
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
              navigate("/")
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
  }, [])

  const onSubmit = async (data: UserSignUpForm) => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
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
          navigate("/")
          resolve(result)
        }

        reject("Invalid login")
      }),
      {
        loading: 'Loading...',
        success: 'Login successfully',
        error: (error) => <b>{error?.message ?? error}</b>,
      }
    );
  }

  return (
    <React.Fragment>
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

        <Button soft className='m-t-md m-b-md'>Sign In</Button>
      </form>

      <NavLink to="/auth/sign-up" className="d--f jc--fe m-b-md">
        Create a new acccount
      </NavLink>

      <NavLink to="/auth/forgot" className="d--f jc--fe">
        Forgot password?
      </NavLink>
    </React.Fragment>
  );
}