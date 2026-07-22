/* ── VÉRIFICATION D'ACCÈS ── */
if (sessionStorage.getItem("nadiathAccess") !== "granted") {
  window.location.href = "index.html";
}

/* ── SUPABASE CONFIG ── */
const SUPABASE_URL = "https://qgzrkmxjvdpmtardxzit.supabase.co"; // ex: https://xxxxx.supabase.co
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnenJrbXhqdmRwbXRhcmR4eml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NzgxMjYsImV4cCI6MjA5NDM1NDEyNn0.15iDt8FGy7f8X5tBGBO-_JsifVnMO3Eq_67yeMDKqMc";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* ── CLOUDINARY CONFIG ── */
const CLOUDINARY_CLOUD_NAME = "danzpnxz0";
const CLOUDINARY_UPLOAD_PRESET = "xvof21u0";

async function uploadToCloudinary(file) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  const res = await fetch(url, { method: "POST", body: formData });
  if (!res.ok) throw new Error("Échec de l'upload Cloudinary");
  const data = await res.json();
  return {
    url: data.secure_url,
    publicId: data.public_id,
  };
}

/* ── TRANSLATIONS ── */
const T = {
  fr: {
    myMemories: "Mes Souvenirs",
    subheading: "Chaque instant mérite d'être gardé",
    statAll: "Tous",
    statFav: "Favoris",
    statPhotos: "Photos",
    statVideos: "Vidéos",
    addNew: "Ajouter un souvenir",
    photo: "Photo",
    video: "Vidéo",
    doc: "Document",
    docShort: "Docs",
    myStats: "✦ mes chiffres ✦",
    timeline: "Chronologie",
    recents: "Récents",
    back: "Retour",
    coverTagline: "Parce que chaque souvenir mérite d'être gardé",
    openBook: "Ouvrir mon livre",
    newPhotos: "Nouvelles Photos",
    newVideos: "Nouvelles Vidéos",
    newDocs: "Nouveaux Documents",
    sharedTitlePlaceholder: "Titre commun (optionnel)…",
    titlePlaceholder: "Titre du fichier…",
    addMore: "Ajouter d'autres fichiers",
    previewHere: "Aperçu ici",
    cancel: "Annuler",
    save: "Enregistrer",
    saveAll: "Enregistrer tout",
    deleteTitle: "Supprimer ?",
    deleteMsg: "Ce souvenir sera définitivement supprimé.",
    keep: "Garder",
    delete: "Supprimer",
    noMemory: "Aucun souvenir pour le moment…",
    alertFile: "Veuillez sélectionner au moins un fichier",
    defTitle: "Souvenir",
    toastDl: "Téléchargement démarré",
    toastDel: "Souvenir supprimé",
    toastFav: "Ajouté aux favoris ♥",
    toastUnfav: "Retiré des favoris",
    toastSaved: "souvenir(s) enregistré(s) !",
    searchPlaceholder: "Rechercher…",
    navPageSouvenirs: "Souvenirs",
    navPageAjouter: "Ajouter",
    multiLabel: "Multi",
    typePHOTO: "PHOTO",
    typeVIDEO: "VIDÉO",
    typeDOC: "DOC",
  },
  en: {
    myMemories: "My Memories",
    subheading: "Every moment is worth keeping",
    statAll: "All",
    statFav: "Favorites",
    statPhotos: "Photos",
    statVideos: "Videos",
    addNew: "Add a memory",
    photo: "Photo",
    video: "Video",
    doc: "Document",
    docShort: "Docs",
    myStats: "✦ my stats ✦",
    timeline: "Timeline",
    recents: "Recents",
    back: "Back",
    coverTagline: "Because every memory is worth keeping",
    openBook: "Open my book",
    newPhotos: "New Photos",
    newVideos: "New Videos",
    newDocs: "New Documents",
    sharedTitlePlaceholder: "Shared title (optional)…",
    titlePlaceholder: "File title…",
    addMore: "Add more files",
    previewHere: "Preview here",
    cancel: "Cancel",
    save: "Save",
    saveAll: "Save all",
    deleteTitle: "Delete?",
    deleteMsg: "This memory will be permanently deleted.",
    keep: "Keep",
    delete: "Delete",
    noMemory: "No memories yet…",
    alertFile: "Please select at least one file",
    defTitle: "Memory",
    toastDl: "Download started",
    toastDel: "Memory deleted",
    toastFav: "Added to favorites ♥",
    toastUnfav: "Removed from favorites",
    toastSaved: "memory(ies) saved!",
    searchPlaceholder: "Search…",
    navPageSouvenirs: "Memories",
    navPageAjouter: "Add",
    multiLabel: "Multi",
    typePHOTO: "PHOTO",
    typeVIDEO: "VIDEO",
    typeDOC: "DOC",
  },
  ru: {
    myMemories: "Воспоминания",
    subheading: "Каждый миг достоин быть сохранённым",
    statAll: "Всего",
    statFav: "Избранных",
    statPhotos: "Фото",
    statVideos: "Видео",
    addNew: "Добавить воспоминание",
    photo: "Фото",
    video: "Видео",
    doc: "Документ",
    docShort: "Доки",
    myStats: "✦ статистика ✦",
    timeline: "Хронология",
    recents: "Недавние",
    back: "Назад",
    coverTagline: "Потому что каждое воспоминание заслуживает быть сохранённым",
    openBook: "Открыть книгу",
    newPhotos: "Новые Фото",
    newVideos: "Новые Видео",
    newDocs: "Новые Документы",
    sharedTitlePlaceholder: "Общий заголовок (необязательно)…",
    titlePlaceholder: "Название файла…",
    addMore: "Добавить ещё файлы",
    previewHere: "Предпросмотр",
    cancel: "Отмена",
    save: "Сохранить",
    saveAll: "Сохранить всё",
    deleteTitle: "Удалить?",
    deleteMsg: "Воспоминание будет удалено навсегда.",
    keep: "Оставить",
    delete: "Удалить",
    noMemory: "Пока нет воспоминаний…",
    alertFile: "Выберите хотя бы один файл",
    defTitle: "Воспоминание",
    toastDl: "Загрузка началась",
    toastDel: "Удалено",
    toastFav: "Добавлено в избранное ♥",
    toastUnfav: "Убрано из избранного",
    toastSaved: "файл(ов) сохранено!",
    searchPlaceholder: "Поиск…",
    navPageSouvenirs: "Память",
    navPageAjouter: "Добавить",
    multiLabel: "Мульти",
    typePHOTO: "ФОТО",
    typeVIDEO: "ВИДЕО",
    typeDOC: "ДОК",
  },
};

let lang = "fr";
function t(k) {
  return T[lang][k] || T.fr[k] || k;
}

function setLang(l) {
  lang = l;
  document
    .querySelectorAll(".lang-btn")
    .forEach((b) => b.classList.remove("active"));
  const db = document.querySelector(`.lang-btn[onclick="setLang('${l}')"]`);
  if (db) db.classList.add("active");
  document
    .querySelectorAll(".mob-lang-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(`.mob-lang-btn[onclick="setLang('${l}')"]`)
    .forEach((b) => b.classList.add("active"));
  applyTranslations();
  // ✅ Correction : vérifier et rafraîchir les deux grilles
  const searchVal = document.getElementById("search-inp")?.value || "";
  renderGrid(searchVal);
  mobRenderGrid(document.getElementById("mob-search-inp")?.value || "");
  updateMobNavLabel();
}
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (T[lang][k]) el.textContent = T[lang][k];
  });
  const si = document.getElementById("search-inp");
  if (si) si.placeholder = t("searchPlaceholder");
  const msi = document.getElementById("mob-search-inp");
  if (msi) msi.placeholder = t("searchPlaceholder");
  const sti = document.getElementById("shared-title-inp");
  if (sti) sti.placeholder = t("sharedTitlePlaceholder");
}

/* ── DATA ── */
let memories = [];
let pendingDeleteId = null;
let currentType = "";
let pendingFiles = []; // [{file, title, previewUrl}]
let activeFilter = "all";
let mobActiveFilter = "all";

async function loadMemories() {
  const { data, error } = await supabaseClient
    .from("memories")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erreur chargement Supabase:", error);
    showToast("Erreur de chargement");
    return;
  }

  // On adapte les noms de colonnes Supabase (created_at, file_name)
  // vers les noms utilisés dans le reste du code (date, fileName)
  memories = (data || []).map((m) => ({
    id: m.id,
    title: m.title,
    type: m.type,
    url: m.url,
    date: m.created_at,
    favorite: m.favorite,
    fileName: m.file_name,
    publicId: m.public_id,
  }));

  renderGrid(document.getElementById("search-inp").value);
  mobRenderGrid(document.getElementById("mob-search-inp")?.value || "");
  updateStats();
}

/* ── DESKTOP BOOK ── */
function openBook() {
  document.getElementById("book").classList.add("open");
  setTimeout(() => renderGrid(), 1000);
}
function closeBook() {
  document.getElementById("book").classList.remove("open");
}

/* ── MOBILE BOOK ── */
let mobCurrentPage = 1;
function mobOpenBook() {
  document.getElementById("mob-cover").classList.add("hidden");
  document.getElementById("mob-pages-wrapper").classList.add("open");
  updateStats();
  mobRenderGrid("");
}
function mobCloseBook() {
  document.getElementById("mob-cover").classList.remove("hidden");
  document.getElementById("mob-pages-wrapper").classList.remove("open");
  mobCurrentPage = 1;
  mobGoToPage(1, false);
}
function mobNextPage() {
  mobCurrentPage === 1 ? mobGoToPage(2) : mobGoToPage(1);
}
function mobGoToPage(n, animate = true) {
  const s1 = document.getElementById("mob-slide-1"),
    s2 = document.getElementById("mob-slide-2");
  if (!animate) {
    s1.style.transition = "none";
    s2.style.transition = "none";
    setTimeout(() => {
      s1.style.transition = "";
      s2.style.transition = "";
    }, 50);
  }
  if (n === 1) {
    s1.className = "mob-page-slide page-1 visible";
    s2.className = "mob-page-slide page-2 hidden-right";
  } else {
    s1.className = "mob-page-slide page-1 hidden-left";
    s2.className = "mob-page-slide page-2 visible";
    mobRenderGrid(document.getElementById("mob-search-inp")?.value || "");
  }
  mobCurrentPage = n;
  document.getElementById("mdot-1").className =
    "mob-dot" + (n === 1 ? " active" : "");
  document.getElementById("mdot-2").className =
    "mob-dot" + (n === 2 ? " active" : "");
  updateMobNavLabel();
}
function updateMobNavLabel() {
  const lbl = document.getElementById("mob-nav-label"),
    icon = document.getElementById("mob-nav-icon"),
    btn = document.getElementById("mob-next-btn");
  if (!lbl || !btn) return;
  if (mobCurrentPage === 1) {
    lbl.textContent = t("navPageSouvenirs");
    icon.className = "fa-solid fa-chevron-right";
    btn.className = "mob-nav-btn primary";
  } else {
    lbl.textContent = t("navPageAjouter");
    icon.className = "fa-solid fa-chevron-left";
    btn.className = "mob-nav-btn";
    btn.innerHTML = `<i class="fa-solid fa-chevron-left" id="mob-nav-icon"></i><span id="mob-nav-label">${t("navPageAjouter")}</span>`;
    document.getElementById("mob-next-btn").onclick = mobNextPage;
  }
}

/* ── SWIPE ── */
let touchStartX = 0;
document.querySelector(".mob-pages-slides")?.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.touches[0].clientX;
  },
  { passive: true },
);
document.querySelector(".mob-pages-slides")?.addEventListener(
  "touchend",
  (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0 && mobCurrentPage === 1) mobGoToPage(2);
      else if (dx > 0 && mobCurrentPage === 2) mobGoToPage(1);
    }
  },
  { passive: true },
);

/* ── FILTER ── */
function setFilter(f, el) {
  activeFilter = f;
  document
    .querySelectorAll("#filter-tabs .filter-tab")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
  // ✅ Correction : vérifier avant d'utiliser
  const searchVal = document.getElementById("search-inp")?.value || "";
  renderGrid(searchVal);
}
function mobSetFilter(f, el) {
  mobActiveFilter = f;
  document
    .querySelectorAll("#mob-filter-tabs .mob-filter-tab")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
  mobRenderGrid(document.getElementById("mob-search-inp")?.value || "");
}

/* ── ADD MEDIA ── */
function addMedia(type) {
  currentType = type;
  pendingFiles = [];

  let accept = "";
  if (type === "photo") accept = "image/*";
  else if (type === "video") accept = "video/*";
  else
    accept =
      ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.odt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  const titleKey =
    type === "photo" ? "newPhotos" : type === "video" ? "newVideos" : "newDocs";
  document.getElementById("sheet-title").textContent = t(titleKey);
  document.getElementById("shared-title-inp").value = "";
  document.getElementById("file-list").innerHTML = "";

  // Store accept type for "add more"
  document.getElementById("add-more-btn").dataset.accept = accept;

  const inp = document.createElement("input");
  inp.type = "file";
  inp.accept = accept;
  inp.multiple = true;
  inp.onchange = (e) => handleFileSelection(Array.from(e.target.files));
  inp.click();
}

function addMoreFiles() {
  const accept = document.getElementById("add-more-btn").dataset.accept || "*";
  const inp = document.createElement("input");
  inp.type = "file";
  inp.accept = accept;
  inp.multiple = true;
  inp.onchange = (e) => handleFileSelection(Array.from(e.target.files));
  inp.click();
}

function handleFileSelection(files) {
  if (!files.length) return;
  files.forEach((file) => {
    const pUrl =
      file.type.startsWith("image/") || file.type.startsWith("video/")
        ? URL.createObjectURL(file)
        : null;
    pendingFiles.push({ file, title: "", previewUrl: pUrl });
  });
  renderFileList();
  document.getElementById("modal").classList.add("active");
}

function renderFileList() {
  const list = document.getElementById("file-list");
  list.innerHTML = "";
  pendingFiles.forEach((pf, i) => {
    const isImage = pf.file.type.startsWith("image/");
    const isVideo = pf.file.type.startsWith("video/");
    const isDoc = !isImage && !isVideo;

    let thumbHtml = "";
    if (isImage) thumbHtml = `<img src="${pf.previewUrl}" alt="">`;
    else if (isVideo) thumbHtml = `<video src="${pf.previewUrl}" muted>`;
    else
      thumbHtml = `<div class="file-item-thumb doc-thumb" style="width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#FEF3C7,#FDE68A)"><i class="fa-solid fa-file-lines" style="font-size:20px;color:#F97316"></i></div>`;

    const div = document.createElement("div");
    div.className = "file-item";
    div.innerHTML = `
      <div class="file-item-thumb ${isDoc ? "" : ""}">
        ${
          isImage
            ? `<img src="${pf.previewUrl}" alt="">`
            : isVideo
              ? `<video src="${pf.previewUrl}" muted>`
              : `<div style="width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#FEF3C7,#FDE68A)"><i class="fa-solid fa-file-lines" style="font-size:20px;color:#F97316"></i></div>`
        }
      </div>
      <div class="file-item-info">
        <input class="file-item-name-input" type="text" placeholder="${t("titlePlaceholder")}" value="${pf.title}" oninput="pendingFiles[${i}].title=this.value">
        <div class="file-item-orig">${pf.file.name}</div>
      </div>
      <button class="file-item-rm" onclick="removeFile(${i})"><i class="fa-solid fa-xmark"></i></button>
    `;
    list.appendChild(div);
  });
  // Update save btn label
  const btn = document.getElementById("save-btn");
  btn.textContent =
    pendingFiles.length > 1
      ? t("saveAll") + ` (${pendingFiles.length})`
      : t("save");
}

function removeFile(i) {
  pendingFiles.splice(i, 1);
  if (!pendingFiles.length) {
    closeModal();
    return;
  }
  renderFileList();
}

async function saveMemories() {
  if (!pendingFiles.length) return alert(t("alertFile"));

  const sharedTitle = document.getElementById("shared-title-inp").value.trim();
  const progress = document.getElementById("save-progress");
  const bar = document.getElementById("save-progress-bar");
  progress.classList.add("active");
  document.getElementById("save-btn").disabled = true;

  let saved = 0;
  let failed = 0;

  for (let i = 0; i < pendingFiles.length; i++) {
    const pf = pendingFiles[i];
    const title =
      (pf.title.trim() || sharedTitle || t("defTitle")) +
      (pendingFiles.length > 1 && !pf.title.trim() && !sharedTitle
        ? ` ${i + 1}`
        : "");
    const isPhoto = pf.file.type.startsWith("image/");
    const isVideo = pf.file.type.startsWith("video/");
    const type = isPhoto ? "photo" : isVideo ? "video" : "doc";

    try {
      // 1) Upload du fichier vers Cloudinary
      const { url, publicId } = await uploadToCloudinary(pf.file);

      // 2) Insertion de la ligne dans Supabase
      const { data, error } = await supabaseClient
        .from("memories")
        .insert({
          title,
          type,
          url,
          favorite: false,
          file_name: pf.file.name,
          public_id: publicId,
        })
        .select()
        .single();

      if (error) throw error;

      // 3) Ajout en mémoire locale (pour affichage immédiat)
      memories.unshift({
        id: data.id,
        title: data.title,
        type: data.type,
        url: data.url,
        date: data.created_at,
        favorite: data.favorite,
        fileName: data.file_name,
        publicId: data.public_id,
      });

      saved++;
    } catch (err) {
      console.error("Erreur sur le fichier", pf.file.name, err);
      failed++;
    }

    bar.style.width = `${Math.round(((saved + failed) / pendingFiles.length) * 100)}%`;
  }

  progress.classList.remove("active");
  bar.style.width = "0%";
  document.getElementById("save-btn").disabled = false;
  closeModal();

  if (saved > 0) showToast(`${saved} ${t("toastSaved")}`);
  if (failed > 0) showToast(`${failed} fichier(s) ont échoué`);

  const searchVal = document.getElementById("search-inp")?.value || "";
  renderGrid(searchVal);
  mobRenderGrid(document.getElementById("mob-search-inp")?.value || "");
  updateStats();
}

function readFileAsDataURL(file) {
  return new Promise((res) => {
    const r = new FileReader();
    r.onload = (e) => res(e.target.result);
    r.readAsDataURL(file);
  });
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
  document.getElementById("shared-title-inp").value = "";
  document.getElementById("file-list").innerHTML = "";
  document.getElementById("save-btn").disabled = false;
  const bar = document.getElementById("save-progress-bar");
  bar.style.width = "0%";
  document.getElementById("save-progress").classList.remove("active");
  pendingFiles = [];
}

/* ── GRIDS ── */
const placeholders = ["mp-a", "mp-b", "mp-c"];
const plEmoji = ["📷", "🎬", "💜"];

function getFiltered(filter, search) {
  let list = memories;
  if (filter && filter !== "all") list = list.filter((m) => m.type === filter);
  if (search)
    list = list.filter((m) =>
      m.title.toLowerCase().includes(search.toLowerCase()),
    );
  return list;
}

function getLocale() {
  return lang === "ru" ? "ru-RU" : lang === "en" ? "en-GB" : "fr-FR";
}

function thumbHtml(m, cls = "") {
  if (m.type === "photo") return `<img src="${m.url}" alt="${m.title}">`;
  if (m.type === "video")
    return `<video src="${m.url}" muted style="pointer-events:none"></video>`;
  // doc
  return `<div class="mem-pdf${cls}"><i class="fa-solid fa-file-lines"></i><span>DOC</span></div>`;
}

function typeBadge(m) {
  const map = {
    photo: t("typePHOTO"),
    video: t("typeVIDEO"),
    doc: t("typeDOC"),
  };
  return `<div class="type-badge">${map[m.type] || ""}</div>`;
}

/* ── DESKTOP GRID (CORRIGÉE) ── */
function renderGrid(filter = "") {
  const grid = document.getElementById("mem-grid");
  const list = getFiltered(activeFilter, filter);
  grid.innerHTML = "";
  updateStats();
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state"><i class="fa-regular fa-image"></i><p>${t("noMemory")}</p></div>`;
    return;
  }
  list.forEach((m, i) => {
    const item = document.createElement("div");
    item.className = "mem-item";
    item.style.animationDelay = `${i * 0.055}s`;
    item.innerHTML = `
      <div class="mem-thumb-wrap">
        ${thumbHtml(m)}
        ${typeBadge(m)}
        <div class="mem-ov">
          <button class="ov-btn fav ${m.favorite ? "on" : ""}" data-id="${m.id}" data-action="fav"><i class="fa-${m.favorite ? "solid" : "regular"} fa-heart"></i></button>
          <button class="ov-btn dl" data-id="${m.id}" data-action="download"><i class="fa-solid fa-download"></i></button>
          <button class="ov-btn del" data-id="${m.id}" data-action="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
      <div class="mem-name">${m.title}</div>
      <div class="mem-sub">${new Date(m.date).toLocaleDateString(getLocale(), { day: "2-digit", month: "short" })}</div>`;

    // 🔧 EVENT LISTENERS POUR LES BOUTONS DESKTOP
    item.querySelectorAll(".ov-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const action = btn.dataset.action;

        if (action === "fav") toggleFav(id);
        else if (action === "download") downloadMem(id);
        else if (action === "delete") askDelete(id);
      });
    });

    // Clic simple = afficher/masquer les boutons (identique au mobile)
    item.querySelector(".mem-thumb-wrap").addEventListener("click", (e) => {
      if (e.target.closest(".ov-btn")) return;

      const isOpen = item.classList.contains("active-ov");
      document
        .querySelectorAll(".mem-item")
        .forEach((x) => x.classList.remove("active-ov"));
      if (!isOpen) item.classList.add("active-ov");
    });

    // Double-clic sur la thumbnail pour ouvrir/voir le fichier (tous les types)
    item.querySelector(".mem-thumb-wrap").addEventListener("dblclick", (e) => {
      if (e.target.closest(".ov-btn")) return;
      window.open(m.url, "_blank");
    });

    grid.appendChild(item);
  });
}
/* ── MOBILE GRID ── */
function mobRenderGrid(filter = "") {
  const grid = document.getElementById("mob-mem-grid");
  if (!grid) return;

  const list = getFiltered(mobActiveFilter, filter);
  grid.innerHTML = "";
  updateStats();

  if (!list.length) {
    grid.innerHTML = `<div class="mob-empty"><i class="fa-regular fa-image"></i><p>${t("noMemory")}</p></div>`;
    return;
  }

  list.forEach((m, i) => {
    const item = document.createElement("div");
    item.className = "mob-mem-item";
    item.style.animationDelay = `${i * 0.05}s`;

    let thumbContent = "";
    if (m.type === "photo")
      thumbContent = `<img src="${m.url}" alt="${m.title}">`;
    else if (m.type === "video")
      thumbContent = `<video src="${m.url}" muted style="pointer-events:none"></video>`;
    else
      thumbContent = `<div class="mob-mem-pdf"><i class="fa-solid fa-file-lines"></i><span>DOC</span></div>`;

    // 🔧 LES BOUTONS AVEC data-id ET data-action
    item.innerHTML = `
      <div class="mob-mem-thumb">
        ${thumbContent}
        <div class="mob-mem-ov">
          <button class="mob-ov-btn fav ${m.favorite ? "on" : ""}" data-id="${m.id}" data-action="fav"><i class="fa-${m.favorite ? "solid" : "regular"} fa-heart"></i></button>
          <button class="mob-ov-btn" data-id="${m.id}" data-action="download"><i class="fa-solid fa-download"></i></button>
          <button class="mob-ov-btn" data-id="${m.id}" data-action="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
      <div class="mob-mem-name">${m.title}</div>
      <div class="mob-mem-sub">${new Date(m.date).toLocaleDateString(getLocale(), { day: "2-digit", month: "short" })}</div>`;

    // 🔧 EVENT LISTENERS POUR LES BOUTONS MOBILES
    item.querySelectorAll(".mob-ov-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const action = btn.dataset.action;

        if (action === "fav") toggleFav(id);
        else if (action === "download") downloadMem(id);
        else if (action === "delete") askDelete(id);
      });
    });

    // Sur mobile, il faut cliquer pour voir les boutons
    item.querySelector(".mob-mem-thumb").addEventListener("click", (e) => {
      if (e.target.closest(".mob-ov-btn")) return; // Si c'est un bouton

      const isOpen = item.classList.contains("active-ov");
      document
        .querySelectorAll(".mob-mem-item")
        .forEach((x) => x.classList.remove("active-ov"));
      if (!isOpen) item.classList.add("active-ov");
    });

    // Double-tap sur la thumbnail pour ouvrir/voir le fichier (tous les types)
    item.querySelector(".mob-mem-thumb").addEventListener("dblclick", (e) => {
      if (e.target.closest(".mob-ov-btn")) return;
      window.open(m.url, "_blank");
    });

    grid.appendChild(item);
  });
}

/* ── FAV ── */
async function toggleFav(id) {
  const m = memories.find((x) => x.id === id);
  if (!m) return;
  const newFavorite = !m.favorite;

  const { error } = await supabaseClient
    .from("memories")
    .update({ favorite: newFavorite })
    .eq("id", id);

  if (error) {
    console.error("Erreur mise à jour favori:", error);
    showToast("Erreur, réessaie");
    return;
  }

  m.favorite = newFavorite;
  showToast(m.favorite ? t("toastFav") : t("toastUnfav"));
  // ✅ Correction : vérifier et rafraîchir les deux grilles
  const searchVal = document.getElementById("search-inp")?.value || "";
  renderGrid(searchVal);
  mobRenderGrid(document.getElementById("mob-search-inp")?.value || "");
  updateStats();
}

/* ── DOWNLOAD ── */
function toCloudinaryDownloadUrl(url, filename) {
  const separator = url.includes("?") ? "&" : "?";
  const name = encodeURIComponent(filename.replace(/\.[^/.]+$/, ""));
  return url + separator + "fl_attachment=" + name;
}

function downloadMem(id) {
  const m = memories.find((x) => x.id === id);
  if (!m) {
    console.error("Mémoire non trouvée:", id);
    return;
  }

  const ext =
    m.fileName && m.fileName.includes(".")
      ? "." + m.fileName.split(".").pop()
      : m.type === "photo"
        ? ".jpg"
        : m.type === "video"
          ? ".mp4"
          : ".pdf";

  const filename = m.title.replace(/\s+/g, "_") + ext;
  const dlUrl = toCloudinaryDownloadUrl(m.url, filename);

  const a = document.createElement("a");
  a.href = dlUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast(t("toastDl"));
}

/* ── DELETE ── */
function askDelete(id) {
  pendingDeleteId = id;
  document.querySelector(".c-title").textContent = t("deleteTitle");
  document.querySelector(".c-msg").textContent = t("deleteMsg");
  document.querySelector(".c-keep").textContent = t("keep");
  document.querySelector(".c-del").textContent = t("delete");
  document.getElementById("confirm-modal").classList.add("active");
}

function closeConfirm() {
  document.getElementById("confirm-modal").classList.remove("active");
  pendingDeleteId = null;
}

async function confirmDelete() {
  if (!pendingDeleteId) return;

  const { error } = await supabaseClient
    .from("memories")
    .delete()
    .eq("id", pendingDeleteId);

  if (error) {
    console.error("Erreur suppression:", error);
    showToast("Erreur, réessaie");
    closeConfirm();
    return;
  }

  memories = memories.filter((m) => m.id !== pendingDeleteId);
  closeConfirm();
  showToast(t("toastDel"));
  // ✅ Correction : vérifier et rafraîchir les deux grilles
  const searchVal = document.getElementById("search-inp")?.value || "";
  renderGrid(searchVal);
  mobRenderGrid(document.getElementById("mob-search-inp")?.value || "");
  updateStats();
}

/* ── TOAST ── */
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2500);
}

/* ── STATS ── */
function updateStats() {
  const total = memories.length;
  const fav = memories.filter((m) => m.favorite).length;
  const photos = memories.filter((m) => m.type === "photo").length;
  const videos = memories.filter((m) => m.type === "video").length;
  const docs = memories.filter((m) => m.type === "doc").length;

  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  // Desktop
  setText("stat-total", total);
  setText("stat-fav", fav);
  setText("stat-photos", photos);
  setText("stat-videos", videos);
  setText("stat-docs", docs);

  // Mobile
  setText("mstat-total", total);
  setText("mstat-fav", fav);
  setText("mstat-photos", photos);
  setText("mstat-videos", videos);
  setText("mstat-docs", docs);
}
/* Init */
applyTranslations();
updateMobNavLabel();
loadMemories();
