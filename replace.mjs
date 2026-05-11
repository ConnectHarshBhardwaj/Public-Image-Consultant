import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.json')) {
        if (!file.includes('package-lock.json')) {
          results.push(file);
        }
      }
    }
  });
  return results;
}

const files = walk('./');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  content = content.replace(/#050B18/g, '#0A0A0A'); // Deep Black
  content = content.replace(/#D4AF37/g, '#F28C28'); // Hawk Orange
  content = content.replace(/#B22222/g, '#F28C28'); // Hawk Orange variant
  content = content.replace(/Public Image Consultant/gi, 'Hawk Strategies');
  content = content.replace(/\bPIC\b/g, 'HAWK STRATEGIES');
  content = content.replace(/publicimageconsultant\.in/g, 'hawkstrategies.in');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
}
