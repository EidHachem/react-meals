import React, { useEffect, useState } from "react"

import classes from "./AvailableMeals.module.css"

import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])

  const fetchMeals = async () => {
    const response = await fetch(
      "https://react-food-app-f725a-default-rtdb.firebaseio.com/meals.json"
    )
    const responseData = await response.json()

    const loadedMeals = []

    for (let key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      })
    }
    if (loadedMeals.length) {
      setMeals(loadedMeals)
    }
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
