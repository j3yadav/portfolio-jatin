/* ──────────────────────────────────────────────
   project-viewer.js — Renders a single project
   ────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Read folder from URL ── */
  /* Support both hash (#folder-name) and query param (?folder=name) */
  const hash = decodeURIComponent(window.location.hash.slice(1));
  const params = new URLSearchParams(window.location.search);
  const folderId = hash || params.get('folder');

  if (!folderId) { showEmpty('No project specified.'); return; }

  const project = PROJECTS.find(p => p.id === folderId);
  if (!project) { showEmpty(`Project "${folderId}" not found.`); return; }

  /* ── Populate hero ── */
  document.title = `${project.title} | Portfolio`;
  document.getElementById('pv-title').textContent = project.title;
  document.getElementById('pv-kicker').textContent = 'Project';
  document.getElementById('pv-heading').textContent = project.title;
  document.getElementById('pv-desc').textContent = project.description;

  /* Stats */
  const images = project.files.filter(f => f.type === 'image');
  const videos = project.files.filter(f => f.type === 'video');
  const pdfs   = project.files.filter(f => f.type === 'pdf');
  const others = project.files.filter(f => f.type === 'other');

  const statsEl = document.getElementById('pv-stats');
  if (images.length) statsEl.innerHTML += `<span class="pv-stat"><span class="pv-stat-icon">🖼</span> ${images.length} Image${images.length > 1 ? 's' : ''}</span>`;
  if (videos.length) statsEl.innerHTML += `<span class="pv-stat"><span class="pv-stat-icon">▶</span> ${videos.length} Video${videos.length > 1 ? 's' : ''}</span>`;
  if (pdfs.length)   statsEl.innerHTML += `<span class="pv-stat"><span class="pv-stat-icon">📄</span> ${pdfs.length} PDF${pdfs.length > 1 ? 's' : ''}</span>`;
  if (others.length) statsEl.innerHTML += `<span class="pv-stat"><span class="pv-stat-icon">📦</span> ${others.length} File${others.length > 1 ? 's' : ''}</span>`;

  /* ── Render content ── */
  const content = document.getElementById('pv-content');

  /* Group files by subfolder */
  const groups = {};
  project.files.forEach(f => {
    /* Derive group key from path: everything between the project folder and the filename */
    const prefix = `/projects/${project.id}/`;
    const rel = f.path.startsWith(prefix) ? f.path.slice(prefix.length) : f.path;
    const lastSlash = rel.lastIndexOf('/');
    const group = lastSlash > 0 ? rel.slice(0, lastSlash) : '(root)';
    if (!groups[group]) groups[group] = [];
    groups[group].push(f);
  });

  /* Sort groups so (root) first, then alphabetical */
  const sortedKeys = Object.keys(groups).sort((a, b) => {
    if (a === '(root)') return -1;
    if (b === '(root)') return 1;
    return a.localeCompare(b);
  });

  sortedKeys.forEach(groupName => {
    const files = groups[groupName];
    const gImages = files.filter(f => f.type === 'image');
    const gVideos = files.filter(f => f.type === 'video');
    const gPdfs   = files.filter(f => f.type === 'pdf');
    const gOthers = files.filter(f => f.type === 'other');

    const section = document.createElement('div');
    section.className = 'pv-section';

    /* Section title */
    const title = document.createElement('h3');
    title.className = 'pv-section-title';
    const label = groupName === '(root)' ? 'Main Files' : capitalize(groupName);
    title.innerHTML = `<span class="pv-section-icon">📂</span> ${label}`;
    section.appendChild(title);

    /* Images */
    if (gImages.length) {
      const grid = document.createElement('div');
      grid.className = 'pv-image-grid';
      gImages.forEach(f => {
        const card = document.createElement('div');
        card.className = 'pv-img-card';
        card.setAttribute('data-src', f.path);
        card.setAttribute('data-name', f.name);
        card.innerHTML = `
          <img src="${f.path}" alt="${f.name}" loading="lazy">
          <div class="pv-img-label">${f.name}</div>
        `;
        card.addEventListener('click', () => openLightbox(f.path, f.name));
        grid.appendChild(card);
      });
      section.appendChild(grid);
    }

    /* Videos */
    if (gVideos.length) {
      const grid = document.createElement('div');
      grid.className = 'pv-video-grid';
      grid.style.marginTop = gImages.length ? '1.25rem' : '0';
      gVideos.forEach(f => {
        const card = document.createElement('div');
        card.className = 'pv-video-card';
        card.innerHTML = `
          <video controls preload="metadata">
            <source src="${f.path}">
            Your browser does not support the video tag.
          </video>
          <div class="pv-video-label">${f.name}</div>
        `;
        grid.appendChild(card);
      });
      section.appendChild(grid);
    }

    /* PDFs */
    if (gPdfs.length) {
      const grid = document.createElement('div');
      grid.className = 'pv-pdf-grid';
      grid.style.marginTop = (gImages.length || gVideos.length) ? '1.25rem' : '0';
      gPdfs.forEach(f => {
        const card = document.createElement('div');
        card.className = 'pv-pdf-card';
        card.innerHTML = `
          <iframe src="${f.path}" title="${f.name}"></iframe>
          <div class="pv-pdf-info">
            <span class="pv-pdf-name">${f.name}</span>
            <a class="pv-pdf-download" href="${f.path}" download target="_blank" rel="noreferrer">Download ↓</a>
          </div>
        `;
        grid.appendChild(card);
      });
      section.appendChild(grid);
    }

    /* Other files */
    if (gOthers.length) {
      const grid = document.createElement('div');
      grid.className = 'pv-download-grid';
      grid.style.marginTop = (gImages.length || gVideos.length || gPdfs.length) ? '1.25rem' : '0';
      gOthers.forEach(f => {
        const ext = f.path.split('.').pop().toLowerCase();
        const icon = fileIcon(ext);
        const card = document.createElement('div');
        card.className = 'pv-download-card';
        card.innerHTML = `
          <span class="pv-dl-icon">${icon}</span>
          <div class="pv-dl-info">
            <div class="pv-dl-name">${f.name}</div>
            <div class="pv-dl-ext">.${ext} file</div>
          </div>
          <a class="pv-dl-btn" href="${f.path}" download>Download</a>
        `;
        grid.appendChild(card);
      });
      section.appendChild(grid);
    }

    content.appendChild(section);
  });

  /* ── Lightbox ── */
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightbox-img');
  const lbCap    = document.getElementById('lightbox-caption');
  let lbList = images.map(f => ({ src: f.path, name: f.name }));
  let lbIndex = 0;

  function openLightbox(src, name) {
    lbIndex = lbList.findIndex(i => i.src === src);
    if (lbIndex < 0) lbIndex = 0;
    showSlide();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function showSlide() {
    const item = lbList[lbIndex];
    if (!item) return;
    lbImg.src = item.src;
    lbImg.alt = item.name;
    lbCap.textContent = `${item.name}  (${lbIndex + 1} / ${lbList.length})`;
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev').addEventListener('click', () => {
    lbIndex = (lbIndex - 1 + lbList.length) % lbList.length;
    showSlide();
  });
  document.getElementById('lightbox-next').addEventListener('click', () => {
    lbIndex = (lbIndex + 1) % lbList.length;
    showSlide();
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + lbList.length) % lbList.length; showSlide(); }
    if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbList.length; showSlide(); }
  });

  /* ── Helpers ── */
  function showEmpty(msg) {
    document.getElementById('pv-hero').style.display = 'none';
    document.getElementById('pv-content').innerHTML = `
      <div class="pv-empty">
        <div class="pv-empty-icon">😕</div>
        <h2>${msg}</h2>
        <p>The project you're looking for doesn't exist or the URL is incorrect.</p>
        <a href="projects-gallery.html">← Back to All Projects</a>
      </div>
    `;
  }

  function capitalize(str) {
    return str.replace(/(^|\/)(\w)/g, (m, sep, c) => sep + c.toUpperCase());
  }

  function fileIcon(ext) {
    const map = {
      blend: '🎨', dwg: '📐', fbx: '📦', wav: '🔊',
      mp3: '🎵', zip: '📁', heic: '📷', blend1: '🎨'
    };
    return map[ext] || '📎';
  }
})();
