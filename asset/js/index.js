import { topHeadlinesUrl } from './api';

window.addEventListener('load', () => {
    fetchListBook();
});

async function fetchListBook(){
    const res = await fetch(topHeadlinesUrl);
    const json = await res.json();

    const main = document.querySelector('main');

    json.data.forEach(data => {
        const list =  document.createElement('book-list');
        list.data = data;

        main.appendChild(list);
    });
}
    
