import Cookies from 'js-cookie'

export const getAccessToken = () => Cookies.get('access_token')
export const getRefreshToken = () => Cookies.get('refresh_token')
export const isAuthenticated = () => !!getAccessToken()

export const authenticate = async () => {
    if (getRefreshToken()) {
      try {
        const tokens = await refreshTokens() // call an API, returns tokens
  
        const expires = (tokens.expires_in || 60 * 60) * 1000
        const inOneHour = new Date(new Date().getTime() + expires)
  
        // you will have the exact same setters in your Login page/app too
        Cookies.set('access_token', tokens.access_token, { expires: inOneHour })
        Cookies.set('refresh_token', tokens.refresh_token)
  
        return true
      } catch (error) {
        redirectToLogin()
        return false
      }
    }
  
    redirectToLogin()
    return false
  }
  const redirectToLogin = () => {
    window.location.replace(
      `${getConfig().LOGIN_URL}?next=${window.location.href}`
    )
    // or history.push('/login') if your Login page is inside the same app
  }

  export const AuthenticatedRoute = ({
    component: Component,
    exact,
    path,
  }) => (
    <Route
      exact={exact}
      path={path}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <AuthenticateBeforeRender render={() => <Component {...props} />} />
        )
      }
    />
  )
  
  class AuthenticateBeforeRender extends Component {
    state = {
      isAuthenticated: false,
    }
  
    componentDidMount() {
      authenticate().then(isAuthenticated => {
        this.setState({ isAuthenticated })
      })
    }
  
    render() {
      return this.state.isAuthenticated ? this.props.render() : null
    }
  }
