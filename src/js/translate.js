const select = document.querySelector(`select`);
const allLang = ["en", "ua", "ru"];

select.addEventListener(`change`, changeURLlanguage);
function changeURLlanguage() {
    let leng = select.value;
    location.href = window.location.pathname + `#` + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + `#ru`;
        location.reload();
    }
    select.value = hash;
    document.querySelector
}