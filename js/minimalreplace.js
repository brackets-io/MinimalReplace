"use strict";

var mr_data, _temp;

_temp = document.documentElement.innerHTML;

for (var prop in mr_data) {
    _temp = _temp.replace(("{{::" + prop + "}}"), mr_data[prop]);
};

document.body.innerHTML = _temp;
