import React from "react";

function NewPlantForm({ newPlants, onChangePlants, onAddPlant }) {
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onAddPlant}>
        <input type="text" name="name" placeholder="Plant name" value={newPlants.name} onChange={onChangePlants}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlants.image} onChange={onChangePlants}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlants.price} onChange={onChangePlants}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
