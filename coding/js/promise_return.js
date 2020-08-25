function a() {
    return "Hello";
}

function b() {
    return setTimeout(() => {
        return console.log(a());
    }, 1000);
}

b();