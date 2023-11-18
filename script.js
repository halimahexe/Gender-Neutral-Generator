let term = document.querySelector('.term');
// let means = document.querySelector('.means');
let desc = document.querySelector('.desc');
let btn = document.getElementById('new-term');

let terms = [{
    term: 'Sibling',
    desc: 'Sister/brother'
}, {
    term: 'Nibling',
    desc: 'Niece/nephew'
}, {
    term: 'Spouse',
    desc: 'Husband/wife',
}, {
    term: 'Significant other',
    desc: 'Boyfriend/girlfriend'
}, {
    term: 'Partner',
    desc: 'Husband/wife/boyfriend/girlfriend'
}, {
    term: 'Friend',
    desc: 'Dude/buddy'
}, {
    term: 'Betrothed',
    desc: 'Fiancé(e)'
}, {
    term: 'Grandchild',
    desc: 'Granddaughter/grandson'
}, {
    term: 'Grandparent',
    desc: 'Grandma/grandad'
}, {
    term: 'Child',
    desc: 'Son/daughter'
}, {
    term: 'Business person',
    desc: 'Businessman/woman'
}, {
    term: 'Chairperson',
    desc: 'Chairman/woman'
}, {
    term: 'Foreperson',
    desc: 'Foreman'
}, {
    term: 'Layperson',
    desc: 'Layman'
}, {
    term: 'Postal worker/Postie',
    desc: 'Postman'
}, {
    term: 'Crewed',
    desc: 'Manned'
}, {
    term: 'Mx',
    desc: 'Mr/Mrs'
}, {
    term: 'Server',
    desc: 'Waiter/waitress'
}, {
    term: 'Young person',
    desc: 'Girl/boy'
}, {
    term: 'Adult',
    desc: 'Man/woman'
}, {
    term: 'They',
    desc: 'He/she'
}]

btn.addEventListener('click', function() {
    let i = Math.floor(Math.random() * terms.length);
    term.innerText = terms[i].term;
    desc.innerText = terms[i].desc;
})