import { createSignal, For, onMount } from "solid-js";
import Item from "../../components/item";

const Index = () => {
  const [width, setWidth] = createSignal(0);
  const [data, setData] = createSignal([
    { title: "开发组件1", done: true },
    { title: "开发组件2", done: false },
    { title: "开发组件3", done: false },
    { title: "开发组件3", done: false },
  ]);
  onMount(() => {
    // upStep();
    // console.log(data);
  });

  // const upStep = () => {
  //   setTimeout(() => {
  //     setWidth(width() + 1);
  //     upStep();
  //   }, 100);
  // };

  // 选择
  const handleCheck = (item, event) => {
    const checked = event.target.checked;
    item.done = checked;

    setData([...data()]);
  };

  return (
    <div class="w-full h-full px-4 relative">
      <div class="text-white text-2xl font-bold">我的一天</div>
      <div class="text-white text-xs">2022年8月23日</div>
      <div>
        <span class="badge">未完成</span>
      </div>
      <For each={data().filter((item) => !item.done)}>
        {(item) => {
          return (
            <Item
              done={item.done}
              txt={item.title}
              onCheck={(e) => handleCheck(item, e)}
            />
          );
        }}
      </For>
      <div>
        <span class="badge badge-success">已完成</span>
      </div>
      <For each={data().filter((item) => item.done)}>
        {(item) => {
          return (
            <Item
              done={item.done}
              txt={item.title}
              onCheck={(e) => handleCheck(item, e)}
            />
          );
        }}
      </For>
      <div class="absolute rounded bg-[#363433] left-4 right-4 bottom-4 p-2 text-white text-sm">
        添加任务
      </div>
    </div>
  );
};

export default Index;
