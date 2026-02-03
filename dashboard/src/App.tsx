import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MetricCard } from './components/MetricCard'
import { useMetrics } from './hooks/useMetrics'
import { MetricChart } from './components/MetricChart'

function App() {
  const { series } = useMetrics();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Metrics Dashboard</h1>
      <p>Status: Running</p>

      { /* render the charts and cards */}
      {Object.values(series).map((s) => {
        const latest = s.points[s.points.length - 1];

        return (
          <div key={s.id}>
            { /* for every metric we receive, map it onto a MetricCard */}
            <MetricCard
              label={s.label}
              value={latest?.value ?? 0}
              unit="%"
            />

            <MetricChart series={s} />
          </div>
        );
      })}
    </main>
  );
}

export default App;
