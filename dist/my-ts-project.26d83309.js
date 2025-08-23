const user = {
    name: "\u0418\u0432\u0430\u043D",
    email: "a@b.com",
    id: 7
};
function greetUser(user) {
    return `Hello, ${user.name}! + ${user.email}`;
}
console.log(greetUser(user));
console.log("User:", user);
document.getElementById("app").innerHTML = `
    <h2>${user.name}</h2>
    <p>\u{412}\u{43E}\u{437}\u{440}\u{430}\u{441}\u{442}: ${user.age}</p>
`;
const config = {
    apiUrl: "https://api.example.com",
    version: "1.0.0",
    timeout: 5000
};
config.timeout = 10000;
console.log(config);

//# sourceMappingURL=my-ts-project.26d83309.js.map
