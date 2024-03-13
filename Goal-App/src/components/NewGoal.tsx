import { useRef, type FormEvent } from "react";

type NewGoalProp = {
  onAddGoal: (goal:string, desc:string) => void
}

const NewGoal = ({onAddGoal}:NewGoalProp) => {

  const goal = useRef<HTMLInputElement>(null);
  const desc = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //new FormData(event.currentTarget);

    const enteredGoal = goal.current?.value;
    const enteredDesc = desc.current?.value;

    
    if (enteredGoal && enteredDesc) {
      event.currentTarget.reset();

      onAddGoal(enteredGoal, enteredDesc);
    } 

  }

  return (
    <section >
      <form onSubmit={handleSubmit} className="m-2">

        <div className="flex flex-col my-2">
          <label htmlFor="goal" className="m-2 text-sky-400 font-bold text-lg">Your Goal</label>
          <input id="goal" ref={goal} type="text" className="bg-gray-600 text-sky-300 rounded-md p-3 "/>
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="desc" className="m-2 text-sky-400 font-bold text-lg">Description</label>
          <textarea id="desc" ref={desc} className="bg-gray-600  text-sky-300 rounded-md p-3 min-h-20 max-h-32"/>
        </div>

        <button className="bg-slate-700 rounded-md hover:bg-slate-600 hover:text-green-400 px-3 py-2 my-3 mb-5 w-full text-center w-ful transition-colors ease-in-out">Add Goal</button>
      </form>
    </section>
  );
};

export default NewGoal;
