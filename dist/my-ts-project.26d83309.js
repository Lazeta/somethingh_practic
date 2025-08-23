// interface Config {
//     readonly apiUrl: string;
//     readonly version: string;
//     timeout: number;
// }
// const config: Config = {
//     apiUrl: "https://api.example.com",
//     version: "1.0.0",
//     timeout: 5000
// }
// config.timeout = 10000;
// console.log(config)
// config.version = "2.0.0"; // выдаст ошибку на уровне редактора до компиляции
// Базовые интерфейсы данных
const user = {
    name: "\u0418\u0432\u0430\u043D",
    email: "a@b.com",
    id: 7
};
// ______________________________
function greetUser(user) {
    return `Hello, ${user.name}! + ${user.email}`;
}
console.log(greetUser(user));
console.log("User:", user);
document.getElementById("app").innerHTML = `
    <h2>${user.name}</h2>
    <p>\u{412}\u{43E}\u{437}\u{440}\u{430}\u{441}\u{442}: ${user.age}</p>
`;
// Мы описываем структуры данных, которые ожидаем от сервера
// author: User - это связь между объектами
// _________________________________
// Получаем СПИСОК постов с пагинацией
async function fetchPosts(page = 1) {
    const response = await fetch(`/api/posts?page=${page}`);
    const data = await response.json();
    return data;
}
// async function - функция возвращает Promise (асинхронная операция)
// page: number = 1 - параметр со значением по умолчанию
// : Promise<PaginatedResponse<Post>> - функция вернёт Promise, который resolved в PaginatedResponse<Post>
// fetchPosts() → {data: Post[], status: number, total: number, page: number, ...}
// Получаем ОДИН пост по ID
async function fetchPostById(id) {
    const response = await fetch(`/api/posts/${id}`);
    const data = await response.json();
    return data;
}
// fetchPostById() → {data: Post, status: number, message?: string}
async function displayPosts() {
    try {
        // Ждём ответ от сервера
        const response = await fetchPosts(1);
        // Те TypeScript ЗНАЕТ структуру response!
        console.log(`\u{412}\u{441}\u{435}\u{433}\u{43E} \u{43F}\u{43E}\u{441}\u{442}\u{43E}\u{432}: ${response.total}`);
        console.log(`\u{421}\u{442}\u{440}\u{430}\u{43D}\u{438}\u{446}\u{430} ${response.page} \u{438}\u{437} ${response.totalPages}`);
        // response.data - это Массив Post[]
        response.data.forEach((post)=>{
            // TypeScript знает, что post имеет поля title, author и т.д.
            console.log(`\u{41F}\u{43E}\u{441}\u{442}: ${post.title}, \u{410}\u{432}\u{442}\u{43E}\u{440}: ${post.author.name}`);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
} // Для /api/posts?page=1:
 // {
 //   "data": [
 //     {
 //       "id": 1,
 //       "title": "Мой первый пост",
 //       "content": "Содержание...",
 //       "author": {
 //         "id": 7,
 //         "name": "Иван",
 //         "email": "a@b.com"
 //       },
 //       "createdAt": "2023-01-01",
 //       "updatedAt": "2023-01-02"
 //     }
 //   ],
 //   "status": 200,
 //   "total": 100,
 //   "page": 1,
 //   "limit": 10,
 //   "totalPages": 10
 // }
 // Для /api/posts/1:
 // {
 //   "data": {
 //     "id": 1,
 //     "title": "Мой первый пост",
 //     "content": "Содержание...",
 //     "author": {
 //       "id": 7,
 //       "name": "Иван",
 //       "email": "a@b.com"
 //     },
 //     "createdAt": "2023-01-01",
 //     "updatedAt": "2023-01-02"
 //   },
 //   "status": 200,
 //   "message": "Post found successfully"
 // }

//# sourceMappingURL=my-ts-project.26d83309.js.map
