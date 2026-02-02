import type { Metric } from "../types/metric"

// how many ms to wait before generating new data
const REFRESH_TIME: number = 200

let metrics: Metric[] = [
    {
        id: "cpu",
        label: "CPU Usage",
        value: 47,
        unit: "%"
    },
    {
        id: "memory",
        label: "Memory Usage",
        value: 74,
        unit: "%"
    },

]

// helper function to clamp values between a min and max
function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value))
}

function updateMetrics() {
    metrics = metrics.map((m) => ({
        ...m,
        value: clamp(m.value + (Math.random() - 0.5) * 5, 0, 100),
    }));
}

export function fetchMetrics(): Promise<Metric[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            updateMetrics();
            resolve(metrics);
        }, REFRESH_TIME);
    });
}