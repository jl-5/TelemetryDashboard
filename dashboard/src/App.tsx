import './App.css'
import { MetricCard } from './components/MetricCard'
import { useMetrics } from './hooks/useMetrics'
import { MetricChart } from './components/MetricChart'

function App() {
  const { series } = useMetrics();

  const metricList = Object.values(series).map((s) => ({
    id: s.id,
    label: s.label,
    unit: s.unit,
    latest: s.points[s.points.length - 1],
  }));

  return (
    <main className="dashboard">
      <div className='dashboard-content'></div>
      <h1 className="dashboard-title">Metrics Dashboard</h1>

      {/* SUMMARY CARDS */}
      <h2 className="section-title">Summary</h2>
      <section className="cards">
        {metricList.map((m) => (
          <MetricCard
            key={m.id}
            label={m.label}
            value={m.latest?.value ?? 0}
            unit={m.unit}
          />
        ))}
      </section>

      {/* CHARTS */}
      <h2 className="section-title">Trends</h2>
      <section className="charts">
        {Object.values(series).map((s) => (
          <div key={s.id} className="chart-panel">
            <MetricChart series={s} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
