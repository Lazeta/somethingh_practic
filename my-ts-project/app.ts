// Простой TypeScript пример
interface User {
    name: string;
    age: number;
    readonly id: number;
}

const user: User = {
    name: "Иван",
    age: 25,
    id: 7
};

console.log("User:", user);
document.getElementById("app")!.innerHTML = `
    <h2>${user.name}</h2>
    <p>Возраст: ${user.age}</p>
`;