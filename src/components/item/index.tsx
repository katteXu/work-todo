const Index = (props) => {
  return (
    <div class="px-4 py-3 bg-slate-600 my-1 flex rounded items-center">
      <input
        type="checkbox"
        checked={props.done}
        class="checkbox checkbox-accent checkbox-xs"
        onClick={props.onCheck}
      />
      <span class="ml-4 text-white flex-1">{props.txt}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};
export default Index;
