// every Metric Card Properties object must look like this
type MetricCardProps = {
    label: string,
    value: number,
    unit: string,
}

export function MetricCard({ label, value, unit }: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="metric-label">{label}</div>

      <div className="metric-value">
        {value.toFixed(1)}
        <span className="metric-unit">{unit}</span>
      </div>
    </div>
  );
}