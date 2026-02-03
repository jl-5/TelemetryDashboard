# TelemetryDashboard

A real-time telemetry metrics dashboard built with React, TypeScript, and Apache ECharts. This project simulates production telemetry systems and demonstrates realistic frontend architecture, time-series visualization, and production-style deployment using Docker and Nginx.

---

## Live Demo

https://jl-5.github.io/TelemetryDashboard/

---

## Project Overview

This dashboard simulates a monitoring interface similar to tools like Grafana or Datadog. It polls a mock API, converts metric snapshots into time-series data, and visualizes them in real time.

---

## Architecture

`Browser -> Nginx -> Static React Build -> Mock Metrics API (frontend simulation)`

Future backend integration can plug into the `/api` proxy path via Nginx.

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Custom React Hooks
- Apache ECharts

### Infrastructure
- Docker
- Nginx

---

## Features

### Real-Time Metrics Polling
- Polls metrics at fixed intervals
- Simulates system telemetry drift

### Time-Series Visualization
- Converts snapshot metrics into historical data
- Uses sliding window time-series storage

### Responsive Dashboard UI
- Summary metric cards
- Real-time line charts

### Type-Safe Data Modeling

Three-layer metric modeling:

- **Metric** → Snapshot value  
- **MetricPoint** → Timestamped datapoint  
- **MetricSeries** → Historical metric timeline  

---

## Key Concepts Demonstrated

### React
- Custom hooks
- Effect lifecycle management
- State immutability
- Closure safety
- Derived state modeling

### TypeScript
- Domain modeling with utility types
- Strongly typed hooks and props
- Separation of transport vs. visualization data

### Data Visualization
- Real-time time-series rendering
- Axis collision handling
- Sliding window data retention

### Infrastructure
- Static asset serving via Nginx
- Docker containerization
- Production deployment simulation

---

## Future Improvements
- Backend metrics service (probably Rust + Axum)
- Metric alert thresholds
- Customizable dashboard layout
- User authentication

---

This project intentionally includes both:
- Static hosting for easy demo access (GitHub pages)
- Docker and Nginx configuration to demonstrate production deployment strategy
