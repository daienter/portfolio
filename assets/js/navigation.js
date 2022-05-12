
    const body = document.querySelector("body");
    const navbar = document.querySelector("nav");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
      document.getElementById("bg-trans-black").style.backgroundColor = "rgba(0,0,0,0.8)";
      document.getElementById("bg-trans-black").style.zIndex = "2";
      document.getElementById("bg-trans-black").style.height = "100vh";
      document.getElementById("bg-trans-black").style.width = "100%";
      document.getElementById("bg-trans-black").style.position = "fixed";
      document.getElementById("mainWrapper").style.overflow = "hidden";
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
      document.getElementById("mainWrapper").style = "";
      document.getElementById("bg-trans-black").style.backgroundColor = "transparent";
      document.getElementById("bg-trans-black").style.zIndex = "-10";
    }

    window.addEventListener('scroll', function () {
      let header = document.querySelector('header');
      let windowPosition = window.scrollY > 0;
      header.classList.toggle('scrolling-active', windowPosition);
    })