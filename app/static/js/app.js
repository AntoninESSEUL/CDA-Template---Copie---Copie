const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
  const isExpanded = sidebar.classList.toggle("show-sidebar");
  sidebar.setAttribute("aria-hidden", !isExpanded);
  const button = document.querySelector('button[onclick="toggleSidebar()"]');
  button.setAttribute("aria-expanded", isExpanded);
}




const showTreeViewBtn = document.getElementById('show-tree-view-btn');
const hideTreeViewBtn = document.getElementById('hide-tree-view-btn');
const treeViewBlock = document.getElementById('tree-view-block');

function toggleTreeView() {
  treeViewBlock.classList.toggle('show');
  showTreeViewBtn.classList.toggle('hide');
}

showTreeViewBtn.addEventListener('click', toggleTreeView);
hideTreeViewBtn.addEventListener('click', toggleTreeView);













const treeView = document.getElementById('tree-view');
const resizer = document.querySelector('.resizable');
const mainContent = document.getElementById('main-content');
const main = document.querySelector('main');

let isResizing = false;

// Définir les limites
const minWidth = 256; // Largeur minimale en pixels
const maxWidth = 908; // Largeur maximale en pixels

resizer.addEventListener('mousedown', (e) => {
  isResizing = true;
  document.body.style.cursor = 'ew-resize';
});

document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;

  // Calculer la largeur de #tree-view en fonction de la position du curseur
  let newWidth = e.clientX;

  // Limiter la largeur entre minWidth et maxWidth
  if (newWidth < minWidth) {
    newWidth = minWidth;
  } else if (newWidth > maxWidth) {
    newWidth = maxWidth;
  }

  // Mettre à jour la largeur de #tree-view et ajuster grid-template-columns
  treeView.style.width = `${newWidth}px`;

  // Ajuster grid-template-columns sur main pour que la mise en page soit réactive
  main.style.gridTemplateColumns = `${newWidth}px 1fr`;
});

document.addEventListener('mouseup', () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = 'default';
  }
});

