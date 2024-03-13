
import Header from "./components/Header.tsx";
import GoalList from "./components/GoalList.tsx";


function App() {
 

  return (
    <main className="bg-slate-900 p-5 mt-20 w-[40%] text-white font-bold mx-auto rounded-lg ">
      <Header image={{ src: "/todoLogo.png", alt: "Todo Logo" }}>
        Your Goals
      </Header>
      <section>
        <GoalList></GoalList>
      </section>
    </main>
  );
}

export default App;

//flex-wrap makes sure all teh children are  wrapped (inside) within the flex parent.

// very important: when using flex-1, if we want a certain number of div, we might have to specify max and min width and/or height.
