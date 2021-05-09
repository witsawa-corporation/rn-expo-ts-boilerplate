import * as React from 'react'
import * as SecureStore from 'expo-secure-store'

interface Props {
  children: JSX.Element
}

interface State {
  isLoading: boolean
  isLogout: boolean
  userToken: null | string
}

interface Action {
  type: string
  token: string | null
}

interface Context {
  authContext: {
    login: (data: { email: string; password: string }) => Promise<void>
    logout: () => Promise<void>
    register: (data: {
      email: string
      password: string
      firstName: string
      lastName: string
    }) => Promise<void>
  }
  state: State
}

const initialState = {
  isLoading: true,
  isLogout: false,
  userToken: null,
}

const AuthContext = React.createContext<Context>({
  authContext: {
    login: Promise.resolve,
    logout: Promise.resolve,
    register: Promise.resolve,
  },
  state: initialState,
})

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const reducer = (prevState: State, action: Action): State => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGIN':
        return {
          ...prevState,
          isLogout: false,
          userToken: action.token,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          isLogout: true,
          userToken: null,
        }
      default:
        return prevState
    }
  }
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  )

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken = null

      try {
        userToken = await SecureStore.getItemAsync('userToken')
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken })
    }

    bootstrapAsync()
  }, [])

  const authContext = React.useMemo(
    () => ({
      login: async (data: { email: string; password: string }) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        if (data.email && data.password) {
          const token = 'dummy-auth-token'
          await SecureStore.setItemAsync('userToken', token)
          dispatch({ type: 'LOGIN', token })
        }
      },
      logout: async () => {
        await SecureStore.deleteItemAsync('userToken')
        dispatch({ type: 'LOGOUT', token: null })
      },
      register: async (data: {
        email: string
        password: string
        firstName: string
        lastName: string
      }) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        console.log(data)

        dispatch({ type: 'LOGIN', token: 'dummy-auth-token' })
      },
    }),
    []
  )

  return (
    <AuthContext.Provider value={{ authContext, state }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): Context => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth can be use in AuthContext only')
  }
  return context
}
