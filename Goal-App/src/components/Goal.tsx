import { type FC, type PropsWithChildren } from "react";

// What type to expect (we can also use interface)
// interface GoalProps { title: string; children:ReactNode }
type GoalProps = PropsWithChildren<{
  id:number;
  title: string;
  onDeleteGoal: (id: number) => void;
}>;

// we are destructuring the prop object.

const Goal: FC<GoalProps> = ({id, title, onDeleteGoal, children }) => {
  return (
    <article className="p-4 bg-slate-800 rounded-md ">
      <div>
        <h2 className="p-2 text-2xl">{title}</h2>
        <p className="p-2">{children}</p>
      </div>

      <button className="p-2 mt-8 bg-slate-700 rounded-md hover:bg-slate-600 hover:text-red-400" onClick={() => onDeleteGoal(id)}>
        Delete
      </button>
    </article>
  );
};

export default Goal;
