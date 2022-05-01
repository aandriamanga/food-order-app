import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import DUMMY_MEALS from "./dummy-meals";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((mealItem) => (
    <MealItem
      key={mealItem.id}
      name={mealItem.name}
      description={mealItem.description}
      price={mealItem.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
