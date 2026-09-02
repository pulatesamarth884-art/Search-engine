const JSDOM = require("jsdom");


async function crawelPage(currentURL) {
    console.log(`craweling continoue: ${currentURL}`)
    const response = await fetch(currentURL)

    console.log(await response.text())
}

function getUrlFromHtml(htmlBody, baseUrl) {
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dow.window.document.querySelector('a')
    for(const linkElement in linkElements) {
        if(linkElement.href.slice(0, 1) === '/') {
            //relative url
            try {
                const urlObject = URL((`${baseUrl}${linkElement.href}`)) // this is for if url is invalid throw error
                urls.push(urlObject.href)
            } catch(err) {
                console.log(`their have a error in relative url: ${err}`)
            }
        }else {
            //absolute url
            try {
                const urlObject = URL(linkElement.href) // this is for if url is invalid throw error
                urls.push(urlObject.href)
            } catch(err) {
                console.log(`their have a error in absolute url: ${err}`)
            }
        }
    }
}

function normalizeURL(urlString) {
    const urlObject = new URL(urlString); // gives properties of url which resliy read
    const hostPath =  `${urlObject.pathname}${urlObject.hostname}`;
    if(hostPath > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1);
    }
    return hostPath;
};


console.log(normalizeURL("https://www.geeksforgeeks.org/javascript/how-do-you-run-javascript-script-through-the-terminal/"));
module.exports = crawelPage;