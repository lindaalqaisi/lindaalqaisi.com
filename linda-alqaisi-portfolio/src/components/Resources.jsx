import React from 'react';
import { HomeIcon, AboutIcon, ProjectsIcon } from '../constants/svgs';

const Resources = () => {
  return (
<section id="resources" className="section page">
<div class="container">
  <h1><span className="emoji">📚</span>Resources</h1>
  <h2>Emojis Used</h2>
  <table>
    <tbody><tr>
        <th>Emoji</th>
        <th>Description</th>
        <th>Usage</th>
      </tr>
      <tr>
        <td>👋</td>
        <td>Waving Hand</td>
        <td>Welcome message</td>
      </tr>
      <tr>
        <td>🎨</td>
        <td>Artist Palette</td>
        <td>Multimedia Designer</td>
      </tr>
      <tr>
        <td>🎉</td>
        <td>Party Popper</td>
        <td>Event Organizer</td>
      </tr>
      <tr>
        <td>💼</td>
        <td>Briefcase</td>
        <td>Manager</td>
      </tr>
      <tr>
        <td>🙋‍♀️</td>
        <td>Woman Raising Hand</td>
        <td>About Me section</td>
      </tr>
      <tr>
        <td>📄</td>
        <td>Page Facing Up</td>
        <td>Resume download</td>
      </tr>
      <tr>
        <td>🚀</td>
        <td>Rocket</td>
        <td>Projects section</td>
      </tr>
      <tr>
        <td>🛠️</td>
        <td>Hammer and Wrench</td>
        <td>Services section</td>
      </tr>
      <tr>
        <td>📬</td>
        <td>Open Mailbox with Raised Flag</td>
        <td>Contact section</td>
      </tr>
    </tbody></table>
  <h2>SVGs Used</h2>
  <p>This portfolio uses SVG icons from the Feather Icons set. Here are some examples:</p>
  <ul>
          <li>Home Icon: <HomeIcon /></li>
          <li>About Icon: <AboutIcon /></li>
          <li>Projects Icon: <ProjectsIcon /></li>
  </ul>
  <p>SVGs are used inline in the HTML to allow for easy styling and manipulation.</p>
  <h2>Useful Links</h2>
  <ul>
    <li><a href="https://www.w3schools.com/" target="_blank">W3Schools</a> - Web development learning resources</li>
    <li><a href="https://greenbackend.com/" target="_blank">Green Backend</a> - Website hosting services</li>
    <li><a href="https://placehold.co/" target="_blank">Placehold.co</a> - Placeholder image service used in this portfolio</li>
    <li><a href="https://feathericons.com/" target="_blank">Feather Icons</a> - Source of SVG icons used in this portfolio</li>
    <li><a href="https://notepad-plus-plus.org/" target="_blank">Notepad++</a> - Free source code editor and Notepad replacement</li>
    <li><a href="https://www.freeformatter.com/html-formatter.html" target="_blank">HTML Formatter</a> - Online tool for formatting HTML code</li>
    <li><a href="https://www.cleancss.com/css-beautify/" target="_blank">CSS Beautifier</a> - Online tool for formatting CSS code</li>
  </ul>
  <h2>Development Tools</h2>
  <p>Here are some tools I find helpful in my web development process:</p>
  <ul>
    <li><strong>Notepad++:</strong> A powerful, free source code editor that supports multiple programming languages. It's lightweight, fast, and offers features like syntax highlighting and code folding.</li>
    <li>
      <strong>Online Code Formatters:</strong> These tools can be incredibly useful for quickly formatting and tidying up code:
      <ul>
        <li><a href="https://www.freeformatter.com/html-formatter.html" target="_blank">HTML Formatter</a> - For cleaning up and properly indenting HTML code. This tool can make your HTML more readable and easier to maintain.</li>
        <li><a href="https://www.cleancss.com/css-beautify/" target="_blank">CSS Beautifier</a> - For formatting and organizing CSS code. It helps in maintaining a consistent style and makes your stylesheets more manageable.</li>
      </ul>
    </li>
  </ul>
  </div>
</section>

  );
};

export default Resources;