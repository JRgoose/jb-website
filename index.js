/* ------------ full logo list ------------- */
const images = [
  "images/behrlogo.webp",
  "images/CedarsSinailogo.jpeg",
  "images/dodgelogo.webp",
  "images/drpepperlogo.webp",
  "images/jackintheboxlogo.webp",
  "images/loweslogo.webp",
  "images/nintendologo.webp",
  "images/petsmartlogo.png",
  "images/pizzahutlogo.webp",
  "images/stjudechildrenshospitallogo.webp",
  "images/straighttalklol.jpg",
  "images/tacobelllogo.webp",
  "images/totalwirelesslogo.avif",
  "images/tracyandersonlogo.webp",
  "images/walmartbusinesslogo.png",
  "images/walmartlogo.webp"
];

/* -------- logo → video array map -------- */
const videoMap = {
  behrlogo: [
    "https://player.vimeo.com/video/1076827043?h=8d8de4d38f"
  ],
  CedarsSinailogo: [
    "https://player.vimeo.com/video/1076826886?h=e55dfc39d3"
  ],
  dodgelogo: [
    "https://player.vimeo.com/video/1076985552?h=2f5ad6b2df",
    "https://player.vimeo.com/video/1076985561?h=311640efd2",
    "https://player.vimeo.com/video/1076985576?h=6ed1b16cc3"
  ],

  drpepperlogo: [
    "https://player.vimeo.com/video/1076827814?h=2ec6768de0",
    "https://player.vimeo.com/video/1076827822?h=89ca6cbf79",
    "https://player.vimeo.com/video/1076827805?h=3dff7d8a17",
    "https://player.vimeo.com/video/1076827785?h=08922f7cc6"
  ],
  jackintheboxlogo: [
    "https://player.vimeo.com/video/1076826905?h=825f6dbc7e",
    "https://player.vimeo.com/video/1076826911?h=b22d90980f",
    "https://player.vimeo.com/video/1076826917?h=b9de749c2d"
  ],
  loweslogo: [
    "https://player.vimeo.com/video/1076826923?h=0871e03cc4",
    "https://player.vimeo.com/video/1076829664?h=74c45cc699",
    "https://player.vimeo.com/video/1076829652?h=7483e1683f",
    "https://player.vimeo.com/video/1076829638?h=e9c2ddfa0a"
  ],
  nintendologo: [
    "https://player.vimeo.com/video/1076827074?h=5591a1ff94"
  ],
  petsmartlogo: [
    "https://player.vimeo.com/video/1076826940?h=d56fb92184",
    "https://player.vimeo.com/video/1076826955?h=77574cfb50",
    "https://player.vimeo.com/video/1076826936?h=91bcf03b21",
    "https://player.vimeo.com/video/1076826945?h=3a892f20be"
  ],
  pizzahutlogo: [
    "https://player.vimeo.com/video/1076827844?h=de139e6132",
    "https://player.vimeo.com/video/1076827830?h=201e022adb"
  ],
  stjudechildrenshospitallogo: [
    "https://player.vimeo.com/video/1076827107?h=662a714f6a",
    "https://player.vimeo.com/video/1076826965?h=e6a9d5f5ab"
  ],
  straighttalklol: [
    "https://player.vimeo.com/video/1076827851?h=43eb320bcf"
  ],
  tacobelllogo: [
    "https://player.vimeo.com/video/1076827020?h=661571ba04",
    "https://player.vimeo.com/video/1076827011?h=2f1dc64c05",
    "https://player.vimeo.com/video/1076827002?h=c6dff6e9cd",
    "https://player.vimeo.com/video/1076826992?h=6898f15088",
    "https://player.vimeo.com/video/1076826976?h=0131d733b1",
    "https://player.vimeo.com/video/1076826988?h=4603bbe368",
    "https://player.vimeo.com/video/1076826984?h=1e6089f9ea",
    "https://player.vimeo.com/video/1076827129?h=185b872912"
  ],
  totalwirelesslogo: [
    "https://player.vimeo.com/video/1076827869?h=5933a1b8a7",
    "https://player.vimeo.com/video/1076827860?h=cd97a07109"
  ],
  tracyandersonlogo: [
    "https://player.vimeo.com/video/1076986685?h=07982f0786",
    "https://player.vimeo.com/video/1076986839?h=79e4740cca",
    "https://player.vimeo.com/video/1076986846?h=ca0d9af5da"
  ],
  walmartlogo: [
    "https://player.vimeo.com/video/1076827884?h=83c0501e80",
    "https://player.vimeo.com/video/1076827879?h=7e68b4e953",
    "https://player.vimeo.com/video/1076827872?h=d7c55b0016",
    "https://player.vimeo.com/video/1076827890?h=ff9aa6380b",
    "https://player.vimeo.com/video/1076827899?h=5b64d441a3",
    "https://player.vimeo.com/video/1076827907?h=676f16631d"
  ],
  walmartbusinesslogo: [
    "https://player.vimeo.com/video/1076830078?h=a146c9cf37",
    "https://player.vimeo.com/video/1076830046?h=1fb82ac9eb",
    "https://player.vimeo.com/video/1076830014?h=eb37882e13"
  ]
};

/* ---------- build rows & attach handlers ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  
  /* build 4‑logo rows */
  for (let i = 0; i < images.length; i += 4) {
    const logoRow = document.createElement("div");
    logoRow.className = "logo-row";

    for (let j = i; j < i + 4 && j < images.length; j++) {
      const src  = images[j];
      const base = src.split("/").pop().replace(/\.(webp|png|jpe?g|avif)$/i, "");

      const tile = document.createElement("div");
      tile.className  = "tile";
      tile.dataset.base = base;

      const img = document.createElement("img");
      img.src = src;
      img.alt = base;

      tile.appendChild(img);
      logoRow.appendChild(tile);

      /* click → open/close the video row under this logo row */
      tile.addEventListener("click", () => handleClick(tile));
    }

    /* each logoRow is followed by its own (initially empty) videoRow */
    const videoRow = document.createElement("div");
    videoRow.className = "video-row";

    gallery.appendChild(logoRow);
    gallery.appendChild(videoRow);
  }

  // Create video popup overlay
  const popupOverlay = document.createElement("div");
  popupOverlay.className = "video-popup-overlay";
  document.body.appendChild(popupOverlay);
});

/* click handler with smooth close */
function handleClick(tile) {
  const base     = tile.dataset.base;
  const videos   = videoMap[base] || [];
  const logoRow  = tile.closest(".logo-row");
  const videoRow = logoRow.nextElementSibling;

  /* close any other open rows first */
  document.querySelectorAll(".video-row.open").forEach(row => {
    if (row !== videoRow) {
      row.classList.remove("open");
      row.addEventListener("transitionend", () => row.innerHTML = "", { once:true });
    }
  });

  /* toggle current row */
  if (videoRow.classList.contains("open")) {
    videoRow.classList.remove("open");
    videoRow.addEventListener("transitionend", () => videoRow.innerHTML = "", { once:true });
    return;
  }

  /* build the iframe list */
  videoRow.innerHTML = "";                // reset
  const heading = document.createElement("h3");
  heading.textContent = "Watch:";
  videoRow.appendChild(heading);

  const list = document.createElement("div");
  list.className = "video-links";

  videos.forEach(link => {
    const videoContainer = document.createElement("div");
    videoContainer.className = "video-container";
    
    const iframe = document.createElement("iframe");
    iframe.src = link.includes("player.vimeo.com")
      ? link
      : link.replace("vimeo.com/", "player.vimeo.com/video/");
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    
    // Add click handler to open in popup
    videoContainer.addEventListener("click", () => {
      openVideoPopup(link);
    });
    
    videoContainer.appendChild(iframe);
    list.appendChild(videoContainer);
  });

  videoRow.appendChild(list);
  videoRow.classList.add("open");
}

function openVideoPopup(videoUrl) {
  const overlay = document.querySelector(".video-popup-overlay");
  const modal = document.createElement("div");
  modal.className = "video-popup-modal";
  
  // Add autoplay parameter to the video URL
  const autoplayUrl = videoUrl.includes("player.vimeo.com")
    ? videoUrl + (videoUrl.includes("?") ? "&" : "?") + "autoplay=1"
    : videoUrl.replace("vimeo.com/", "player.vimeo.com/video/") + "?autoplay=1";
  
  const iframe = document.createElement("iframe");
  iframe.src = autoplayUrl;
  iframe.allow = "autoplay; fullscreen; picture-in-picture";
  
  const closeBtn = document.createElement("button");
  closeBtn.className = "video-popup-close";
  closeBtn.innerHTML = "×";
  closeBtn.onclick = () => {
    // Stop the video by removing the iframe
    iframe.src = "";
    overlay.classList.remove("open");
    overlay.innerHTML = "";
  };
  
  // Close popup when clicking outside the video
  overlay.onclick = (e) => {
    if (e.target === overlay) {
      iframe.src = "";
      overlay.classList.remove("open");
      overlay.innerHTML = "";
    }
  };
  
  modal.appendChild(iframe);
  modal.appendChild(closeBtn);
  overlay.innerHTML = "";
  overlay.appendChild(modal);
  overlay.classList.add("open");
}
