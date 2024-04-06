import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavbarComponent from './components/Navbar';
import LineChartComponent from './components/LineChartComponent';
import PieChartComponent from './components/PieChartComponent';
import BarChartComponent from './components/BarChartComponent';
import { fetchData } from './apis/api';

const App = () => {
  const [data, setData] = useState({ x: [], y: [] });

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndSetData();
  }, []);

  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route
            path="/"
            element={<Home data={data} />}
          />
          <Route
            path="/line-chart"
            element={<LineChartComponent data={data} />}
          />
          <Route
            path="/pie-chart"
            element={<PieChartComponent data={data} />}
          />
          <Route
            path="/bar-chart"
            element={<BarChartComponent data={data} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
