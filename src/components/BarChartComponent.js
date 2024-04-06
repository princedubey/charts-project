import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Card } from 'react-bootstrap';

const BarChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (data.x.length > 0 && data.y.length > 0) {
      const ctx = document.getElementById('barChart');
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.x.map((_, index) => `Label ${index + 1}`),
          datasets: [
            {
              label: 'X Axis',
              data: data.x,
              backgroundColor: 'rgba(54, 162, 235, 0.6)', // Example color
              borderColor: 'rgba(54, 162, 235, 1)', // Example color
              borderWidth: 1,
            },
            {
              label: 'Y Axis',
              data: data.y,
              backgroundColor: 'rgba(255, 99, 132, 0.6)', // Example color
              borderColor: 'rgba(255, 99, 132, 1)', // Example color
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
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
        <canvas id="barChart" width="400" height="400"></canvas>
      </Card.Body>
    </Card>
  );
};

export default BarChartComponent;
