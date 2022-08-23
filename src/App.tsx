import { Router } from "@solidjs/router";
import type { Component } from "solid-js";
import { Left, Right } from "./components/layout";
const App: Component = () => {
  return (
    <Router>
      <div class="h-screen w-screen box-border flex">
        <div class="w-60 bg-opacity-50 bg-gray-800 flex flex-col">
          <div
            data-tauri-drag-region
            class="h-8 w-full text-opacity-0 cursor-move"
          >
            {/* 拖动占位 */}
          </div>
          {/* 左侧 */}
          <Left />
        </div>
        <div class="bg-gradient-to-b to-slate-500 from-blue-500 w-full bg-opacity-20 flex flex-col">
          <div
            data-tauri-drag-region
            class="h-8 w-full text-opacity-0 cursor-move"
          >
            {/* 拖动占位 */}
          </div>
          {/* 右侧 */}
          <div class="flex-1">
            <Right />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
