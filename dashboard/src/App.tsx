import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MetricCard } from './components/MetricCard'

function App() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Metrics Dashboard</h1>
      <p>Status: Running</p>

      <MetricCard label='CPU Usage' value={48} unit='%' />
      <MetricCard label='Depth' value={1200} unit='ft' />
    </main>
  );
}

export default App;
