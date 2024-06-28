<<<<<<< HEAD
import JwtService from './jwtService'

export default function useJwt(axiosIns, jwtOverrideConfig) {
  const jwt = new JwtService(axiosIns, jwtOverrideConfig)

  return {
    jwt,
  }
}
=======
import JwtService from './jwtService'

export default function useJwt(axiosIns, jwtOverrideConfig) {
  const jwt = new JwtService(axiosIns, jwtOverrideConfig)

  return {
    jwt,
  }
}
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
