const showTreeViewBtn = document.getElementById("show-tree-view-btn");
const hideTreeViewBtn = document.getElementById("hide-tree-view-btn");
const treeViewBlock = document.getElementById("tree-view-block");
const slider = document.getElementById("tree-view-slider");

//TREE VIEW
function toggleTreeView() {
  treeViewBlock.classList.toggle("hide");
  slider.classList.toggle("hide");
  showTreeViewBtn.classList.toggle("hide");
}

showTreeViewBtn.addEventListener("click", toggleTreeView);
hideTreeViewBtn.addEventListener("click", toggleTreeView);

// RESIZER
const leftAside = document.getElementById("tree-view-block");
const rightAside = document.querySelectorAll(".aside")[1];
let isResizing = false;

slider.addEventListener("mousedown", (e) => {
  isResizing = true;
  document.body.style.cursor = "ew-resize";
});

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return;
  leftAside.style.width = `${e.clientX}px`;
  rightAside.style.width = `calc(100% - ${e.clientX + slider.offsetWidth}px)`;
});

document.addEventListener("mouseup", () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = "default";
  }
});
