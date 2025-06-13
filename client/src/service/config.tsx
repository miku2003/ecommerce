import { Platform } from "react-native"

export const BASE_URL = Platform.OS==='android' ? 'http://10.0.2.2:3000/api': 'http://localhost:3000/api'
export const SOCKET_URL =  Platform.OS==='android' ? 'http://10.0.2.2:3000': 'http://localhost:3000'
REACT_APP_GOOGLE_MAPS_API_KEY=your-new-google-api-key-here
export const BRANCH_ID ='682a0a6a7d0cb18236b80411'

// USE YOUR NETWORK IP OR HOSTED URL
// export const BASE_URL = 'http://172.20.10.4:3000/api'
// export const SOCKET_URL = 'http://172.20.10.4:3000'

