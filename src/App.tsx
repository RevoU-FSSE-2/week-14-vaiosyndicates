import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { MyGlobalContext } from "./context";
import { useEffect, useState } from "react";
import { PrivateRoutes, PublicRoutes } from "./route";

function App() {

  const [token, setToken] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<boolean>(false)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('token')!);
    if(items) {
      setStatus(true) 
      setToken(items)
    }
  }, [token])
  

  return (
    <>
      <MyGlobalContext.Provider value= {{ token, loading, setLoading, setToken }}>
        <Routes>
        {
          status
               ? <Route path="/*" element={<PrivateRoutes />} />
               : <Route path="/*" element={<PublicRoutes />} />
        }

          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </MyGlobalContext.Provider>
    </>
  )
}

export default App
