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
    <article className="p-4 bg-slate-800 rounded-md">
      <div>
        <h2 className="p-2 text-2xl bg-slate-600/50 rounded-md text-center text-purple-300">{title}</h2>
        <p className="p-2 text-violet-300">{children}</p>
      </div>

      <button className="border border-black/40 shadow-lg p-2 mt-8 bg-slate-700/50 rounded-md hover:bg-slate-600/50 xl:text-white hover:text-red-400 text-red-400 text-sm" onClick={() => onDeleteGoal(id)}>
        Delete
      </button>
    </article>
  );
};

export default Goal;

// font-family: "Quicksand", sans-serif;
