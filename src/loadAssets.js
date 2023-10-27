(async function () {

    const splashTags = '<div class="app-splash-screen" id="splash-div"><div class="splash-inner"><div class="splash-logo"></div><div id="splash-loader" class="splash-loader"></div></div></div>';
    const splashStyles = '.app-splash-screen{background:linear-gradient(180deg,rgba(6,130,97,1) 0%,rgba(55,200,162,1) 50%,rgba(6,130,97,1) 100%);position:absolute;width:100%;max-width:506px;height:100%;max-height:506px;display:flex;justify-content:center;align-items:center;z-index:150;transition:left 0.5s;left:50%;transform:translateX(-50%);border-radius:6px;}.splash-inner{display:flex;flex-direction:column;justify-content:center;align-items:center;}.splash-logo{background:url("https://widget.crowdswap.org//assets/media/logo/splash-logo.svg");background-repeat:no-repeat;max-width:100%;background-position:center;background-size:contain;width:400px;height:100px;}.splash-loader{background:url("https://widget.crowdswap.org//assets/media/icons/three-dots.svg");background-repeat:no-repeat;max-width:100%;background-position:center;background-size:contain;width:80px;height:80px;}@media (max-width:576px){.splash-logo{width:260px;}}';
    const widgetTag = document.getElementById('crowdswapWidget');


    if (widgetTag) {
        widgetTag.style.display = 'none';
        const splashNode = document.createElement("style");
        splashNode.textContent = splashStyles;
        document.head.appendChild(splashNode);
        widgetTag.parentElement.innerHTML += splashTags;
    }

    const baseUrl = "https://ea7240f1.crowdswap-widget.pages.dev/";
    const versionResponse = await fetch(baseUrl + "version.txt");
    const version = await versionResponse.text();

    const scriptLink = `https://ea7240f1.crowdswap-widget.pages.dev/crowdswap-widget.js?${version}`;
    // baseUrl +
    // `crowdswap-widget.js?${version}`;

    const cssLink =
        `https://ea7240f1.crowdswap-widget.pages.dev/crowdswap-widget.css?${version}`;
    // baseUrl +
    // `crowdswap-widget.css?${version}`;

    const [scriptResponse, cssResponse] = await Promise.all([
        fetch(scriptLink),
        fetch(cssLink),
    ]);

    const scriptCode = await scriptResponse.text();
    const cssCode = await cssResponse.text();

    const scriptNode = document.createElement("script");
    scriptNode.textContent = scriptCode;

    const cssNode = document.createElement("style");
    cssNode.textContent = cssCode;

    document.head.appendChild(scriptNode);
    document.head.appendChild(cssNode);
})(window, document);