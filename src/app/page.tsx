import TaskList from "@/components/TaskList";
import Navigation from "@/components/Navigation";

const Home = async ({}) => {
  return (

      <div className="grid place-items-center" >
        <Navigation />
        <TaskList />
      </div>
  );
};

export default Home;
