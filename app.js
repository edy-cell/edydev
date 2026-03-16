

  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursorRing");
  let mx=0,my=0,rx=0,ry=0;

  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
  });
  (function animateRing(){
    rx += (mx-rx)*0.11;
    ry += (my-ry)*0.11;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(animateRing);
  })();

  document.querySelectorAll("a,button").forEach(el=>{
    el.addEventListener("mouseenter",()=>{ cursor.style.transform += " scale(2.2)"; });
    el.addEventListener("mouseleave",()=>{ cursor.style.background="var(--accent)"; });
  });

  // Scroll reveal
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.opacity="1";
        e.target.style.transform="translateY(0)";
      }
    });
  },{threshold:0.12});

  document.querySelectorAll(".skill-card,.tl-item,.info-chip,.contact-link").forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(20px)";
    el.style.transition="opacity 0.55s ease, transform 0.55s ease";
    obs.observe(el);
  });
