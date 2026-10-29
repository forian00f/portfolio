const gallery = document.getElementById("gallery");
const filters = document.getElementById("filters");
const lightbox = document.getElementById("lightbox");
const lbMedia = document.getElementById("lb-media");
const lbTitle = document.getElementById("lb-title");
const lbNote = document.getElementById("lb-note");

document.getElementById("year").textContent = new Date().getFullYear();

const BADGES = { video: "▶ Video", model: "3D", sketchfab: "3D" };

// Small preview shown in the grid
function thumb(a) {
  switch (a.type) {
    case "video":
      return `<video src="${a.file}" ${a.poster ? `poster="${a.poster}"` : ""} muted loop playsinline preload="metadata"></video>`;
    case "model":
      return a.poster
        ? `<img src="${a.poster}" alt="${a.title}" loading="lazy">`
        : `<model-viewer src="${a.file}" alt="${a.title}" auto-rotate rotation-per-second="20deg" disable-zoom interaction-prompt="none" loading="lazy"></model-viewer>`;
    case "sketchfab":
      return a.poster ? `<img src="${a.poster}" alt="${a.title}" loading="lazy">` : `<img src="images/hero.svg" alt="${a.title}">`;
    default:
      return `<img src="${a.file}" alt="${a.title}" loading="lazy">`;
  }
}

// Full-size view shown in the popup
function full(a) {
  switch (a.type) {
    case "video":
      return `<video src="${a.file}" ${a.poster ? `poster="${a.poster}"` : ""} controls autoplay loop playsinline></video>`;
    case "model":
      return `<model-viewer src="${a.file}" alt="${a.title}" camera-controls auto-rotate shadow-intensity="1" exposure="1"></model-viewer>`;
    case "sketchfab":
      return `<iframe src="https://sketchfab.com/models/${a.id}/embed?autostart=1&ui_theme=dark" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>`;
    default:
      return `<img src="${a.file}" alt="${a.title}">`;
  }
}

function render(tag) {
  gallery.innerHTML = "";
  ARTWORK.filter(a => tag === "All" || a.tag === tag).forEach(a => {
    const card = document.createElement("button");
    card.className = "card" + (a.wide ? " wide" : "");
    card.innerHTML = `
      ${BADGES[a.type] ? `<span class="badge">${BADGES[a.type]}</span>` : ""}
      ${thumb(a)}
      <div class="meta"><b>${a.title}</b><span>${a.note || a.tag}</span></div>`;

    const vid = card.querySelector("video");
    if (vid) {
      card.addEventListener("mouseenter", () => vid.play().catch(() => {}));
      card.addEventListener("mouseleave", () => vid.pause());
    }

    card.addEventListener("click", () => {
      lbMedia.innerHTML = full(a);
      lbTitle.textContent = a.title;
      lbNote.textContent = a.note || a.tag || "";
      lightbox.showModal();
    });
    gallery.appendChild(card);
  });
}

const tags = ["All", ...new Set(ARTWORK.map(a => a.tag))];
tags.forEach((tag, i) => {
  const b = document.createElement("button");
  b.textContent = tag;
  if (i === 0) b.classList.add("active");
  b.addEventListener("click", () => {
    filters.querySelectorAll("button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    render(tag);
  });
  filters.appendChild(b);
});

render("All");

function closeLightbox() { lightbox.close(); }
lightbox.addEventListener("close", () => { lbMedia.innerHTML = ""; }); // stops video/3D when closed
lightbox.querySelector(".close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
