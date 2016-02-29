"use strict";

var observable = new EventEmitter(),
    onChange = function onChange(data) {
    console.log("Data change:", data);
};

observable.addListener("change", function (data) {
    return onChange(data);
});

observable.emit("change", {
    a: 1
});

observable.emit("change", {
    a: 2
});