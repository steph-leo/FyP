// src/components/navigation/NearbyPlaces.jsx
import React from 'react';
import { Map } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Card from '../ui/card';  // Use relative path


const NearbyPlaces = () => {
  const places = [
    { id: 1, name: 'Main Library', distance: '0.2 km' },
    { id: 2, name: 'Student Center', distance: '0.3 km' },
    { id: 3, name: 'Science Building', distance: '0.5 km' }
  ];
  return (
    <Card>
      <CardHeader><CardTitle>Nearby Places</CardTitle></CardHeader>
      <CardContent>
        {places.map((place) => (
          <div key={place.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
            <Map className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">{place.name}</p>
              <p className="text-sm text-gray-500">{place.distance}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
export default NearbyPlaces;
