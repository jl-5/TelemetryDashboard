import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MetricCard } from './components/MetricCard'
import { useMetrics } from './hooks/useMetrics'

function App() {
  const { metrics } = useMetrics();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Metrics Dashboard</h1>
      <p>Status: Running</p>

      { /* example MetricCard usages */}
      { /*
      <MetricCard label='CPU Usage' value={48} unit='%' />
      <MetricCard label='Depth' value={1200} unit='ft' />
      */ }

      { /* for every metric we receive, map it onto a MetricCard */}
      {metrics.map((metric) => (
        <MetricCard
        key={metric.id}
        label={metric.label}
        value={metric.value}
        unit={metric.unit}
        />
      ))}
    </main>
  );
}

export default App;
