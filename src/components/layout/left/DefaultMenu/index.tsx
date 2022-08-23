import { Link } from "@solidjs/router";
import { createSignal, Component, createEffect } from "solid-js";
import Item from "./item";
const Index: Component = () => {
  const [current, setCurrent] = createSignal("sun");
  const handleChange = (key) => {
    // console.log(key);
    setCurrent((data) => key);
  };

  return (
    <div class="">
      <Link href="/my_day">
        <Item
          icon="sun"
          label="我的一天"
          count={0}
          active={current() === "sun"}
          onClick={() => handleChange("sun")}
        />
      </Link>
      <Link href="/important">
        <Item
          icon="star"
          label="重要"
          count={0}
          active={current() === "star"}
          onClick={() => handleChange("star")}
        />
      </Link>
      <Link href="/all">
        <Item
          icon="all"
          label="全部"
          count={0}
          active={current() === "all"}
          onClick={() => handleChange("all")}
        />
      </Link>
      <Link href="/done">
        <Item
          icon="done"
          label="已完成"
          count={0}
          active={current() === "done"}
          onClick={() => handleChange("done")}
        />
      </Link>
      <Link href="/task">
        <Item
          icon="task"
          label="任务"
          count={0}
          active={current() === "task"}
          onClick={() => handleChange("task")}
        />
      </Link>
    </div>
  );
};
export default Index;
