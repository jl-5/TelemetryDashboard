// every Metric Card Properties object must look like this
type MetricCardProps = {
    label: string,
    value: number,
    unit: string
}

export function MetricCard({ label, value, unit }:  MetricCardProps) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "1rem"}}>
            <h3>{label}</h3>
            <strong>
                {value} {unit}
            </strong>
        </div>
    );
}