// Main JavaScript file for PathPioneer documentation

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const mobileNavToggle = document.createElement('button');
  mobileNavToggle.className = 'mobile-nav-toggle';
  mobileNavToggle.innerHTML = '<span>Menu</span>';
  
  const header = document.querySelector('.site-header .container');
  const nav = document.querySelector('.main-nav');
  
  if (header && nav) {
    header.insertBefore(mobileNavToggle, nav);
    
    mobileNavToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
  
  // Add copy button to code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(function(codeBlock) {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code';
    copyButton.textContent = 'Copy';
    
    codeBlock.parentNode.appendChild(copyButton);
    
    copyButton.addEventListener('click', function() {
      const code = codeBlock.textContent;
      navigator.clipboard.writeText(code).then(function() {
        copyButton.textContent = 'Copied!';
        setTimeout(function() {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });
  });
});
