import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
export const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);

  //function to filter the array and then set the state to the new filtered array
  function handleDelete(clickedPlanId) {
    console.log("delete clicked with the id of...", clickedPlanId);
    const filteredPlans = plans.filter((aPlan) => {
      if (aPlan.id === clickedPlanId) {
        return true;
      }
    });
    console.log(filteredPlans);
    setPlans(filteredPlans);
  }
  return (
    <div>
      {plans.map((onePlan) => {
        return (
          <div key={onePlan.id} id="plan-card">
            <img src={onePlan.image} alt={onePlan.destination} />
            <div className="inner-container">
              <h4>
                {onePlan.destination}({onePlan.days} days)
              </h4>
              <p>{onePlan.description}</p>
              <h6>Price: {onePlan.totalCost}$</h6>
              {onePlan.totalCost > 1500 ? (
                <span id="premium">Premium</span>
              ) : null}
              {onePlan.totalCost < 350 ? (
                <span id="great-deal">Great Deal</span>
              ) : null}
              {onePlan.allInclusive ? (
                <span id="included">All Inclusive</span>
              ) : null}
              <button
                onClick={() => {
                  handleDelete(onePlan.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
