import { router } from "./Routes.tsx"
import '@/App.css'
import { RouterProvider } from 'react-router-dom'
import useToken from "../shared/hooks/useToken.ts"
import axios from "axios"
import { LoadingProvider } from "../shared/hooks/useLoading.tsx"

function App() {

  const token = useToken();
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
  return (
    <>
      <LoadingProvider>
        <RouterProvider 
          router={router}
        />
      </LoadingProvider>
    </>
  )
}

export default App
