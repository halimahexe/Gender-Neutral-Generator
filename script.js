let term = document.querySelector('.term');
// let means = document.querySelector('.means');
let desc = document.querySelector('.desc');
let btn = document.getElementById('new-term');

let terms = [{
    term: 'Sibling',
    desc: 'Alternative to sister/brother'
}, {
    term: 'Nibling',
    desc: 'Your sibling\'s child - alternative to niece/nephew'
}, {
    term: 'Spouse',
    desc: 'Married partner - alternative to husband/wife',
}]

btn.addEventListener('click', function() {
    let i = Math.floor(Math.random() * terms.length);
    term.innerText = terms[i].term;
    desc.innerText = terms[i].desc;
})