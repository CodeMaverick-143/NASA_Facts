// src/components/APOD.js
import React, { useState, useEffect } from 'react';
import { fetchAPOD } from '../api';

const APOD = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAPOD = async () => {
      try {
        const apodData = await fetchAPOD();
        setData(apodData);
      } catch (err) {
        setError('Error fetching data.');
      } finally {
        setLoading(false);
      }
    };

    getAPOD();
  }, []);

  if (loading) return <p>Loading APOD...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="apod">
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      {data.media_type === 'image' ? (
        <img src={data.url} alt={data.title} style={{ maxWidth: '100%' }} />
      ) : (
        <iframe
          title="space video"
          src={data.url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: '100%', height: '400px' }}
        ></iframe>
      )}
      <p>{data.explanation}</p>
    </div>
  );
};

export default APOD;
