// ==UserScript==
// @name         Simple Mark
// @version      0.1
// @description  Doubleclick with the middle mouse button to mark spot. Click spot to remove it.
// @author       Pekka S.
// @match        *
// ==/UserScript==
/* jshint -W097 */

'use strict';

var simpleMark = function () {

    var id = 'mark-spot';
    var size = 50;

    document.addEventListener('dblclick', function (e) {

        if (e.button != 1) {
            return;
        }

        removeMark();

        var x = e.clientX;
        var y = e.clientY;

        x += window.scrollX;
        y += window.scrollY;

        x -= size / 2;
        y -= size / 2;

        var element = document.createElement('div');

        element.id = id;
        element.style.position = 'absolute';
        element.style.left = x + 'px';
        element.style.top = y + 'px';
        element.style.fontFamily = 'Arial';
        element.style.fontSize = '11px';
        element.style.width = size + 'px';
        element.style.height = size + 'px';
        element.style.borderRadius = size + 'px';
        element.style.backgroundColor = 'red';
        element.style.color = 'white';
        element.style.textAlign = 'center';
        element.style.lineHeight = size + 'px';
        element.style.cursor = 'pointer';

        element.innerHTML = 'X';

        document.body.appendChild(element);

        element.addEventListener('click', function (e) {
            removeMark();
        })
    });

    function removeMark() {
        if (document.getElementById(id)) {
            document.body.removeChild(document.getElementById(id));
        }
    }
};

simpleMark();
