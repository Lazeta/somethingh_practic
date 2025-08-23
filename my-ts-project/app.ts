interface User {
    id: number;
    email: string;
    name: string;
    age?: number;
}

const user: User = {
    name: "Иван",
    email: "a@b.com",
    id: 7
};

function greetUser(user: User) {
    return `Hello, ${user.name}! + ${user.email}`;
}

console.log(greetUser(user));
console.log("User:", user);
document.getElementById("app")!.innerHTML = `
    <h2>${user.name}</h2>
    <p>Возраст: ${user.age}</p>
`;

interface Config {
    readonly apiUrl: string;
    readonly version: string;
    timeout: number;
}

const config: Config = {
    apiUrl: "https://api.example.com",
    version: "1.0.0",
    timeout: 5000
}

config.timeout = 10000;

console.log(config)

// config.version = "2.0.0"; // выдаст ошибку на уровне редактора до компиляции

interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
}

interface PaginatedResponse<T> extends ApiResponse<T[]> {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

interface Post {
    id: number;
    title: string;
    content: string;
    author: User;
    createdAt: string;
    updatedAt: string;
}

interface Comment {
    id: number;
    text: string;
    postId: number;
    author: User;
    createdAt: string;
}