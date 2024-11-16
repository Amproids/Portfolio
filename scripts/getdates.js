const footerCopywrite = document.querySelector('#currentyear');
const footerLastModified = document.querySelector('#lastmodified');
console.log(footerCopywrite, footerLastModified);
if (footerCopywrite && footerLastModified) {
    footerCopywrite.textContent = `©${new Date().getFullYear()}`;
    footerLastModified.textContent = `Last Modified: ${document.lastModified}`;
} else {
    console.error('Required footer elements not found');
}