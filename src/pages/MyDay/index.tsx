import { createSignal, onMount } from "solid-js";

const Index = () => {
  const [width, setWidth] = createSignal(0);

  onMount(() => {
    // upStep();
  });

  const upStep = () => {
    setTimeout(() => {
      setWidth(width() + 1);
      upStep();
    }, 100);
  };

  return (
    <div class="w-full h-full px-4 relative">
      <div class="text-white text-2xl font-bold">我的一天</div>
      <div class="text-white text-xs">2022年8月23日</div>
      {/* <div class="relative w-full">
        <div
          class="absolute top-0 left-0 w-full bottom-0 bg-gradient-to-r to-[#000] from-[#000] z-10 rounded bg-no-repeat"
          style={`transition:all 0.5s ease-out; background-size:${width()}px 100%`}
        >
          <span class="text-white">进度条</span>
        </div>
      </div> */}

      <div class="absolute rounded bg-[#363433] left-4 right-4 bottom-4 p-2 text-white text-sm">
        添加任务
      </div>
    </div>
  );
};

export default Index;
