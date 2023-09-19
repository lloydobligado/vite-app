import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/constants';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {Object.entries(ROUTES).map(([_key, { path, content }]) => (
          <Route key={path} path={path} element={<Suspense>{content}</Suspense>} />
        ))}
      </Routes>
    </>
  );
}

export default App;
