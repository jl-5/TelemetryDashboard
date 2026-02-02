import type { Metric } from "../types/metric";

// currently we don't have the option to "reject" because this mock API only simulates successful data retrieval
export function fetchMetrics(): Promise<Metric[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: "cpu",
                    label: "CPU Usage",
                    value: 47, 
                    unit: "%",
                },
                {
                    id: "memory",
                    label: "Memory Usage",
                    value: 74,
                    unit: "%",
                },
                                {
                    id: "radiation",
                    label: "Radiation",
                    value: 82,
                    unit: "raditions",
                },
            ]);
        }, 500);
    });
}