const Index = () => {
  return (
    <div class="flex items-center cursor-pointer hover:text-[#3d86ef]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      <span class="text-sm ml-1.5">新建列表</span>
    </div>
  );
};
export default Index;
