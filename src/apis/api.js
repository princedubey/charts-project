import axios from 'axios';

export const fetchData = async () => {
  try {
    const [xResponse, yResponse] = await Promise.all([
      axios.get('https://retoolapi.dev/gDa8uC/data'),
      axios.get('https://retoolapi.dev/o5zMs5/data')
    ]);

    const xData = xResponse.data.slice(0, 50).map(item => parseFloat(item.RandomNumber));
    const yData = yResponse.data.slice(0, 50).map(item => parseFloat(item.RandomNumber));

    return { x: xData, y: yData };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
