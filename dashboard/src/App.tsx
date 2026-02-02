import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MetricCard } from './components/MetricCard'
import type { Metric } from './types/metric'
import { fetchMetrics } from './api/mockMetrics'

function App() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMetrics().then((data) => {
      setMetrics(data);
      setLoading(false);
    })
    // we don't represent bad data yet but this is where it would be caught
    .catch();
    // initialize with empty dependency array so fetchMetrics runs once after rendering
  }, []);

  // display Loading screen if we're still loading
  if (loading) {
    return <p>Loading metrics...</p>
  }

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
