/* When in mobile layout, the anchor navigation for submenus
*  doesn't work due to fixed body height when menu is toggled.
*  This script intercepts clicks on links, toggles the menu off
*  and performs the anchor navigation. */

window.addEventListener("load", function () {
    let href = window.location.pathname;
    const hash = window.location.hash;
    if (hash !== "") {
        href = hash
    }
    const sidebar = document.querySelector('.sidebar .toctree');
    const selector = function(href) {return `a[href="${href}"]`};
    let element = sidebar.querySelector(selector(href));
    if (!element) {
        href = window.location.pathname;
        element = document.querySelector(selector(href));
    }
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }
});


$(document).on("click", '.shift li.toc a', function(e) {
    let segments = this.href.split('#');
    if (segments.length < 2) {
        /* ignore links without anchor */
        return true;
    }

    e.preventDefault();
    $("#toggle").click();
    setTimeout(function () {
       location.hash = segments.pop();
    },1)
});

/* Clipboard-copy snippet from https://github.com/marcoaugustoandrade/jekyll-clipboardjs/blob/master/copy.js */
let codes = document.querySelectorAll('.with-copy .highlight > pre > code');
let countID = 0;
codes.forEach((code) => {

    code.setAttribute("id", "code" + countID);

    let btn = document.createElement('button');
    btn.innerHTML = "Copy";
    btn.className = "btn-copy";
    btn.setAttribute("data-clipboard-action", "copy");
    btn.setAttribute("data-clipboard-target", "#code" + countID);
    code.before(btn);
    countID++;
});

let clipboard = new ClipboardJS('.btn-copy');
