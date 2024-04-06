import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Card } from 'react-bootstrap';

const LineChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (data.x.length > 0 && data.y.length > 0) {
      const ctx = document.getElementById('lineChart');
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.x.map((_, index) => `Label ${index + 1}`),
          datasets: [
            {
              label: 'X Axis',
              data: data.x,
              borderColor: 'rgba(54, 162, 235, 0.6)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
            {
              label: 'Y Axis',
              data: data.y,
              borderColor: 'rgba(255, 99, 132, 0.6)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#6c757d',
              },
            },
            y: {
              grid: {
                color: '#dee2e6',
              },
              ticks: {
                color: '#6c757d',
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <Card>
      <Card.Body style={{ width: '100%', height: '400px' }}>
        <canvas id="lineChart" width="400" height="400"></canvas>
      </Card.Body>
    </Card>
  );
};

export default LineChartComponent;
