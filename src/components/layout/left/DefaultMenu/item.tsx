import { Component, splitProps } from "solid-js";
import IconMap from "./iconMap";
import style from "./style.module.less";
type IProps = {
  icon?: string;
  label: string;
  count: number;
  active?: boolean;
  onClick: () => void;
};

const Index: Component<IProps> = (props) => {
  const { icon, label, count, onClick } = props;
  const [local] = splitProps(props, ["active"]);

  return (
    <div
      class={`text-sm px-4 py-1 select-none hover:bg-gray-700 hover:text-[#3d86ef] text-gray-300 cursor-pointer my-2 flex items-center ${
        local.active && style.active
      }`}
      onClick={onClick}
    >
      {IconMap[icon]}
      <span class="ml-2 flex-1">{label}</span>
      <span class="justify-end text-xs">{count}</span>
    </div>
  );
};
export default Index;
