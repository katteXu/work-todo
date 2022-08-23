import CustomMenu from "./CustomMenu";
import DefaultMenu from "./DefaultMenu";
import NewButton from "./NewButton";
const Index = () => {
  return (
    <div class="text-white h-full py-4 flex flex-col">
      {/* 搜索框 */}
      <div class="px-4">
        <input
          type="text"
          placeholder="搜索"
          class="
            w-full
            px-1.5
            py-1
            bg-white text-xs
            rounded
            focus:outline-1
            focus:outline-blue-400
            text-black
            "
        />
      </div>
      <div class="flex-1 py-2">
        {/* 默认菜单 */}
        <DefaultMenu></DefaultMenu>
        {/* 分割线 */}
        <div class="h-[1px] bg-gray-600 mx-3 my-2"></div>
        {/* 自定义菜单 */}
        <CustomMenu></CustomMenu>
      </div>

      {/* 底部新建按钮 */}
      <div class="px-4">
        <NewButton></NewButton>
      </div>
    </div>
  );
};
export default Index;
