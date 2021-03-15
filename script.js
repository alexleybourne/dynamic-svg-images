// Default Title values
const defaultTitle = 'Hello';
const defaultSubTitle = 'World';
let title = defaultTitle;
let subTitle = defaultSubTitle;

// Helpers
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// New url created when adding a query to the url with addQuery()
let newUrl = '';

// Called on page load
const loaded = () => {
    console.log('Loaded');
    console.log('QUERY_STRING: ', queryString);
    title = getQuery('title') ? getQuery('title') : defaultTitle;
    subTitle = getQuery('sub') ? getQuery('sub') : defaultSubTitle;
    console.log(title);
    console.log(subTitle);
    loadText();
    console.log('QUERY_STRING exists? ', urlQueryExists());
    addDefaultQuery();
    render();
}

// Gets title and sub values then calls loader
const render = () => {
    console.log('rendering ')
    title = urlParams.get('title');
    subTitle = urlParams.get('sub');
    loadText();
}

// Replaces text values
const loadText = () => {
    console.log('LOADING TEXT')
    document.getElementById('title').innerHTML = title;
    document.getElementById('subTitle').innerHTML = subTitle;
}

// Grabs a set value and returns false if there isn't one
const getQuery = (value) => {
    const queryValue = urlParams.get(value);
    return queryValue?.length ? queryValue : false;
}

// Checks if the URL has any queries
const urlQueryExists = () => {
    return queryString ? true : false;
}

// Updates the query to the default value if it is empty
const addDefaultQuery = () => {
    console.log('RUNNING ADD DEFAULT QUERY');
    console.log('QUERY_STRING BEFORE: ', queryString);
    if (!urlQueryExists()) {
        console.log('ADDED QUERY')
        addQuery('title=hello&sub=world');
        render();
        console.log('NEW URL VAL: ', newUrl);
        visitURL(newUrl);
    }
    console.log('QUERY_STRING AFTER: ', queryString);
}

// Adds a query to the URL
const addQuery = (query) => {
    newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?${query}`;
    window.history.pushState({path:newUrl},'',newUrl);
}

// Visits a set URL
const visitURL = (url) => {
    window.location = url;
}

// Example testing URL
// http://127.0.0.1:5500/index.html?title=hello&sub=world
