const openMenu = () => {
  if (window.innerWidth < 480) {
    document.getElementById("sidenav").style.width = "100%";
  } else {
    document.getElementById("sidenav").style.width = "250px";
  }
};

const closeMenu = () => {
  document.getElementById("sidenav").style.width = "0px";
};
