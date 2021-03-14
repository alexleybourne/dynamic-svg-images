const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const defaultTitle = 'Hello';
const defaultSubTitle = 'World';

let title = defaultTitle;
let subTitle = defaultSubTitle;

let newUrl = '';

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

const render = () => {
    console.log('rendering ')
    title = urlParams.get('title');
    subTitle = urlParams.get('sub');
    loadText();
}

const getQuery = (value) => {
    const queryValue = urlParams.get(value);
    return queryValue?.length ? queryValue : false;
}

const urlQueryExists = () => {
    return queryString ? true : false;
}

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

const addQuery = (query) => {
    newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?${query}`;
    window.history.pushState({path:newUrl},'',newUrl);
}

const visitURL = (url) => {
    window.location = url;
}

const loadText = () => {
    console.log('LOADING TEXT')
    document.getElementById('title').innerHTML = title;
    document.getElementById('subTitle').innerHTML = subTitle;
}

// Example testing URL
// http://127.0.0.1:5500/index.html?title=hello&sub=world
