import { router } from "./Routes.tsx"
import '@/App.css'
import { RouterProvider } from 'react-router-dom'
import useToken from "../shared/hooks/useToken.ts"

function App() {

  const token = useToken();
  
  return (
    <>
      <RouterProvider 
        router={router}
      />
    </>
  )
}

export default App
