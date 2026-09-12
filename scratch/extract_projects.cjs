const fs = require('fs');

let html = fs.readFileSync('projects_stitch.html', 'utf8');

const mainStart = html.indexOf('<main');
const mainContentStart = html.indexOf('>', mainStart) + 1;
const mainContentEnd = html.indexOf('</main>');

let content = html.substring(mainContentStart, mainContentEnd).trim();

content = content.replace(/class=/g, 'className=');
content = content.replace(/for=/g, 'htmlFor=');
content = content.replace(/viewbox=/g, 'viewBox=');
content = content.replace(/stroke-width=/g, 'strokeWidth=');
content = content.replace(/stroke-linecap=/g, 'strokeLinecap=');
content = content.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
content = content.replace(/fill-rule=/g, 'fillRule=');
content = content.replace(/clip-rule=/g, 'clipRule=');
content = content.replace(/stroke-dasharray=/g, 'strokeDasharray=');

// Self-close single tags
content = content.replace(/<img([^>]*[^/])>/g, '<img$1 />');
content = content.replace(/<input([^>]*[^/])>/g, '<input$1 />');
content = content.replace(/<br([^>]*[^/])>/g, '<br$1 />');
content = content.replace(/<hr([^>]*[^/])>/g, '<hr$1 />');

// Convert empty tags to self-closing (e.g., <rect ...></rect> -> <rect ... />)
content = content.replace(/<rect([^>]*)><\/rect>/g, '<rect$1 />');
content = content.replace(/<path([^>]*)><\/path>/g, '<path$1 />');
content = content.replace(/<circle([^>]*)><\/circle>/g, '<circle$1 />');

// Replace HTML comments with JSX comments
content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

const jsx = `import React from 'react';

const Projects = () => {
  return (
    <>
      ${content}
    </>
  );
};

export default Projects;
`;

fs.writeFileSync('src/Projects.jsx', jsx);
console.log('Projects.jsx created!');
