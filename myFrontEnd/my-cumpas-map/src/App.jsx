// src/App.jsx
import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import SearchBar from './components/navigation/SearchBar';
import NearbyPlaces from './components/navigation/NearbyPlaces';
import DirectionMap from './components/navigation/DirectionMap';
import { getDirections, getNearbyPlaces } from './services/api';
import useLocation from './hooks/useLocation';

const App = () => {
  const location = useLocation();
  const [places, setPlaces] = useState([]);
  const [directions, setDirections] = useState('');

  const handleSearch = async (query) => {
    if (location) {
      const placesData = await getNearbyPlaces(location);
      setPlaces(placesData);
    }
  };

  const handleGetDirections = async (destination) => {
    if (location) {
      const directionsData = await getDirections(location, destination);
      setDirections(directionsData);
    }
  };

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} />
      <NearbyPlaces places={places} />
      <DirectionMap directions={directions} />
    </Layout>
  );
};

export default App;
