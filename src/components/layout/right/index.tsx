import { Routes, Route } from "@solidjs/router";
import All from "../../../pages/All";
import Done from "../../../pages/Done";
import Important from "../../../pages/Important";
import MyDay from "../../../pages/MyDay";
import Task from "../../../pages/Task";

const Index = () => {
  return (
    <Routes>
      <Route path={["/", "/my_day"]} component={MyDay} />
      <Route path="/important" component={Important} />
      <Route path="/all" component={All} />
      <Route path="/done" component={Done} />
      <Route path="/task" component={Task} />
    </Routes>
  );
};
export default Index;
