function start () 
  let splash = document.getElementById("splash");

  splash.addEventListener("transitionend", () => {
    document.getElementById("bgm").play();
    splash.remove();
  });

  splash.classList.add("hide");
}
