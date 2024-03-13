import { useEffect, useState } from "react";
import Goal from "./Goal";
import NewGoal from "./NewGoal";

interface GoalType {
  goal: string;
  desc: string;
  id: number;
}
//localStorage.setItem is synchronous and goals is not immediately updated after calling setGoal!!!
const GoalList = () => {
  //useState if used for rendering, local storage is used for storing
  const [goals, setGoal] = useState<GoalType[]>([]);

  // get from local storage: (one time load)
  useEffect(() => {
    setGoal(JSON.parse(localStorage.getItem('myGoals') || '[]'));
  }, []); // The useEffect only needs to run one time; it does not need to called again if any changes.

  // To Add a new Goal:
  const handleAddGoal = (goal:string, desc:string) => {

    // If if a state depends on the prev state when updating use function inside set.
    setGoal((prevGoals) => {
      // temp hard code goal:
      const newGoal: GoalType = {
        id: Math.random(),
        goal,
        desc,
      };

      const updatedGoals:GoalType[] =  [...prevGoals, newGoal];

      // store Goals in local storage:
      localStorage.setItem('myGoals', JSON.stringify(updatedGoals));

      return updatedGoals;
    });

  };

  // To Delete a Goal:
  const handleDeleteGoal = (id:number) => {
    const updatedGoals = goals.filter(goal => goal.id !== id);
    localStorage.setItem('myGoals', JSON.stringify(updatedGoals));
    setGoal(updatedGoals);
  }

  return (
    <div>
      <NewGoal onAddGoal={handleAddGoal}></NewGoal>
      <ul className="flex flex-wrap justify-evenly gap-4">
        {goals.map((goal) => (
          <li key={goal.id} className="flex-grow min-w-[40%] max-w-full break-words">
            <Goal title={goal.goal} id={goal.id} onDeleteGoal={handleDeleteGoal}> {goal.desc} </Goal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
