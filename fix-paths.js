const fs = require('fs');
const files = ['projects-data.js', 'script.js', 'art-gallery.html', 'index.html', 'project.html', 'projects-gallery.html', 'styles.css', 'gallery-styles.css', 'project-viewer.js'];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    let orig = content;
    // Replace "public/ or 'public/ or `public/ with "/ or '/ or `/
    content = content.replace(/(["'`])public\//g, '$1/');
    // Replace url('public/ with url('/
    content = content.replace(/url\(['"]?public\//g, "url('/");
    
    if (content !== orig) {
      fs.writeFileSync(f, content);
      console.log('Fixed paths in: ' + f);
    }
  }
});
