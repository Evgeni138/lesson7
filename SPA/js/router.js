const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    404: "/SPA/pages/404.html",
    "/SPA/": "/SPA/pages/home.html",
    "/SPA/about": "/SPA/pages/about.html",
    "/SPA/contact": "/SPA/pages/contact.html",
    "/SPA/index.html": "/SPA/pages/home.html",

};

const handleLocation = async () => {
    const path = window.location.pathname;
    console.log(path);
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
