import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { ROUTES } from './utils/constants'
import Navbar from './components/navbar/navbar';

function App() {

  return (
    <>
      <h1 className='text-red-800'>Vite + React</h1>
      <Navbar/>
      <Routes>
          {Object.entries(ROUTES).map(([_key, { path, content }]) => (
            <Route
              key={path}
              path={path}
              element={<Suspense>{content}</Suspense>}
            />
          ))}
        </Routes>
    </>
  )
}

export default App
