import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [newPlants, setNewPlants] = useState({
    name: "",
    image: "",
    price: 0
  })

  const [search, setSearch ] = useState("")

 // const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
 // this line is breaking everything SOS

    

  useEffect(() => {
      fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then(setPlants)
  }, [])

  function onChangePlants(e) {
    setNewPlants({...newPlants, [e.target.name] : e.target.value })
  }

  function onAddPlant(e) {
    e.preventDefault()

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(newPlants)
      })
      .then(res => res.json())
      .then(newlyAddedPlant => setNewPlants({...plants, newlyAddedPlant}))
    }

  

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} newPlants={newPlants} onChangePlants={onChangePlants}/>
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
