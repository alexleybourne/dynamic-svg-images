const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const title = urlParams.get('title');
const subHeading = urlParams.get('sub');

const loaded = () => {
    console.log('Loaded');
    console.log('QUERY_STRING: ', queryString);
    console.log(title);
    console.log(subHeading);
}


