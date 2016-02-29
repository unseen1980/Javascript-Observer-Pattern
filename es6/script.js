let observable = new EventEmitter(),
    onChange = ((data) => {
        console.log(`Data change:`, data);
    })

observable.addListener("change", (data) => onChange(data));

observable.emit("change", {
    a: 1
});

observable.emit("change", {
    a: 2
});
