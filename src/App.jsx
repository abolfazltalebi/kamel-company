import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import router from './Routes';
import Loading from './components/Common/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>
      <div className={isLoading ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible pointer-events-auto transition-opacity duration-300'}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;