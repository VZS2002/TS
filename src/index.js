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
        if (felhasznalonev.includes('&') || felhasznalonev.includes('=') || felhasznalonev.includes('&') || felhasznalonev.includes('_') || felhasznalonev.includes('\'') || felhasznalonev.includes('-') || felhasznalonev.includes('+') || felhasznalonev.includes(',')) {
            document.getElementById('hibaf').textContent = 'A felhasználónév nem engedélyezett karaktert tartalmaz.';
        }
    });
});
