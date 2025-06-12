function showSidebar() {
  const sidebar = document.querySelector("#res-nav");
  sidebar.classList.add("active");
}

function hideSidebar() {
  const sidebar = document.querySelector("#res-nav");
  {
    sidebar.classList.remove("active");
  }
}
