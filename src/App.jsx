import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc&inc=name,picture,gender,phone');
        const result = await response.json();
        console.log(result);
        setData(result.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data || !data.name || !data.picture) {
    return <p>Loading...</p>;
  }

  const phoneNumber = data.phone || '';

  return (
    <a href="#" className="group flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-10 p-10 transition duration-300 ease-in-out transform hover:scale-105">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg transition duration-300 ease-in-out transform hover:scale-105" src={data.picture.large} alt="person_img" />
      <div className='flex flex-col'>
        <div className="flex flex-row space-x-5 justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-500 transition duration-300 ease-in-out">{data.name.first}</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-500 transition duration-300 ease-in-out">{data.name.last}</h5>
        </div>
        <div className='flex flex-col'>
          <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-500 transition duration-300 ease-in-out">Gender: {data.gender}</h6>
        </div>
        <div className='flex flex-col'>
          <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-500 transition duration-300 ease-in-out">Phone: {phoneNumber}</h6>
        </div>
      </div>
    </a>
  );
}

export default App;
