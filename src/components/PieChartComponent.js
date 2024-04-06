import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Card } from 'react-bootstrap';

const PieChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (data.x.length > 0 && data.y.length > 0) {
      const ctx = document.getElementById('pieChart');
      chartRef.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['X Axis', 'Y Axis'],
          datasets: [
            {
              data: [
                data.x.reduce((acc, curr) => acc + curr, 0),
                data.y.reduce((acc, curr) => acc + curr, 0)
              ],
              backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
              hoverOffset: 4
            }
          ]
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
        <canvas id="pieChart" width="400" height="400"></canvas>
      </Card.Body>
    </Card>
  );
};

export default PieChartComponent;
