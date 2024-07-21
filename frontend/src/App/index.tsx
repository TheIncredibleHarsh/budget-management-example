import { router } from "./Routes.tsx"
import '@/App.css'
import { RouterProvider } from 'react-router-dom'
import useToken from "../shared/hooks/useToken.ts"
import axios from "axios"

function App() {

  const token = useToken();
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
  return (
    <>
      <RouterProvider 
        router={router}
      />
    </>
  )
}

export default App
