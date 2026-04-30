// App.jsx — simple page router (no library needed for two pages)
import { useState } from 'react';
import HomePage from './pages/HomePage';
import VisualizerPage from './pages/VisualizerPage';

export default function App() {
  const [page, setPage] = useState('home');
  return (
    <>
      {page === 'home' && <HomePage onStart={() => setPage('visualizer')} />}
      {page === 'visualizer' && <VisualizerPage onBack={() => setPage('home')} />}
    </>
  );
}
