"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('reg')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
        let felhasznalonev = document.getElementById('felhasznalonev').value;
        if (felhasznalonev.length > 30 || felhasznalonev.length < 6) {
            document.getElementById('hibaf').textContent = 'A felhasználónév 6 és 30 karakter közötti hosszúságú lehet';
        }
        else {
            document.getElementById('hibaf').textContent = ' ';
        }
        if (felhasznalonev.includes('&') || felhasznalonev.includes('=') || felhasznalonev.includes('&') || felhasznalonev.includes('_') || felhasznalonev.includes('\'') || felhasznalonev.includes('-') || felhasznalonev.includes('+') || felhasznalonev.includes(',') || felhasznalonev.includes('<' || felhasznalonev.includes('>'))) {
            document.getElementById('hibaf').textContent = 'A felhasználónév nem engedélyezett karaktert tartalmaz.';
        }
        let email = document.getElementById('email').value;
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        };
        if (validateEmail(email)) {
            document.getElementById('hibae').textContent = ' ';
        }
        else {
            document.getElementById('hibae').textContent = 'Hibás email';
        }
        let jelszo = document.getElementById('jelszo').value;
        if (jelszo.length > 10 || jelszo.length < 5) {
            document.getElementById('hibaj').textContent = 'A jelszó 5 és 10 karakter közötti hosszúságú lehet';
        }
        else {
            let kisbetu = /[a-z]/g;
            let nagybetu = /[A-Z]/g;
            let szam = /[0-9]/g;
            if (jelszo.match(kisbetu) && jelszo.match(nagybetu) && jelszo.match(szam)) {
                document.getElementById('hibaj').textContent = ' ';
            }
            else {
                document.getElementById('hibaj').textContent = 'Rossz jelszó';
            }
        }
        let ujjelszo = document.getElementById('ujjelszo').value;
        let ujemail = document.getElementById('ujemail').value;
        if (ujjelszo != jelszo) {
            document.getElementById('hibaju').textContent = 'Nem egyezik a jelszó';
        }
        if (ujemail != email) {
            document.getElementById('hibeu').textContent = 'Nem egyezik az email';
        }
    });
});
