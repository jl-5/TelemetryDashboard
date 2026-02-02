import { useEffect, useState } from "react";
import { fetchMetrics } from "../api/mockMetrics";
import type { Metric} from "../types/metric";

// this is a custom hook for using metrics
export function useMetrics() {
    const [metrics, setMetrics] = useState<Metric[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchMetrics().then((data) => {
            setMetrics(data);
            setLoading(false);
        });
    }, []);

    return { metrics, loading };
}