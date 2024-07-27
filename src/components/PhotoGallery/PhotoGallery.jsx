// src/components/PhotoGallery.jsx

import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [startId, setStartId] = useState("");
  const [endId, setEndId] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setPhotos(data);
    };  

    fetchPhotos();
  }, []);

  const handleFilter = () => {
    const start = parseInt(startId);
    const end = parseInt(endId);
    if (!isNaN(start) && !isNaN(end) && start <= end) {
      const filtered = photos.filter(
        (photo) => photo.id >= start && photo.id <= end
      );
      setFilteredPhotos(filtered);
    } else {
      alert("Please enter valid start and end IDs.");
    }
  };

  return (
    <div className="photo-gallery">
      <div className="filter-section">
        <input
          type="number"
          placeholder="Start ID"
          value={startId}
          onChange={(e) => setStartId(e.target.value)}
        />
        <input
          type="number"
          placeholder="End ID"
          value={endId}
          onChange={(e) => setEndId(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div className="card-container">
        {filteredPhotos.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
