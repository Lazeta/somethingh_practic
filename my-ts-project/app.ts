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
// ______________________________

function greetUser(user: User) {
    return `Hello, ${user.name}! + ${user.email}`;
}

console.log(greetUser(user));
console.log("User:", user);
document.getElementById("app")!.innerHTML = `
    <h2>${user.name}</h2>
    <p>Возраст: ${user.age}</p>
`;


// Базовый ответ от API для любого типа данных
interface ApiResponse<T> {
    data: T;          // основные данные (может быть любого типа)
    status: number;   // HTTP статус (200, 404, etc.)
    message?: string; // опциональное сообщение
}

// Специальный ответ для списков данных с пагинацией
interface PaginatedResponse<T> extends ApiResponse<T[]> {
    total: number;      // всего элементов
    page: number;       // текущая страница
    limit: number;      // элементов на странице
    totalPages: number; // всего страниц
}

// <T> - это Generic (обобщённый тип). Think of it как "placeholder для любого типа"
// ApiResponse<T> может работать с ЛЮБЫМ типом данных: ApiResponse<User>, ApiResponse<Post>, etc.
// extends означает наследование: PaginatedResponse включает ВСЕ поля из ApiResponse плюс свои

// _________________________________
// Интерфейсы сущностей
interface Post {
    id: number;
    title: string;
    content: string;
    author: User; // вложенный объект User!
    createdAt: string;
    updatedAt: string;
}

interface Comment {
    id: number;
    text: string;
    postId: number;     // ID поста, к которому комментарий
    author: User;       // автор комментария
    createdAt: string;
}

// Мы описываем структуры данных, которые ожидаем от сервера
// author: User - это связь между объектами
// _________________________________

// Получаем СПИСОК постов с пагинацией
async function fetchPosts(page: number = 1): Promise<PaginatedResponse<Post>> {
    const response = await fetch(`/api/posts?page=${page}`);
    const data: PaginatedResponse<Post> = await response.json();
    return data;
}
// async function - функция возвращает Promise (асинхронная операция)
// page: number = 1 - параметр со значением по умолчанию
// : Promise<PaginatedResponse<Post>> - функция вернёт Promise, который resolved в PaginatedResponse<Post>
// fetchPosts() → {data: Post[], status: number, total: number, page: number, ...}


// Получаем ОДИН пост по ID
async function fetchPostById(id: number): Promise<ApiResponse<Post>> {
    const response = await fetch(`/api/posts/${id}`);
    const data: ApiResponse<Post> = await response.json();
    return data;
}
// fetchPostById() → {data: Post, status: number, message?: string}

async function displayPosts() {
    try {
        // Ждём ответ от сервера
        const response = await fetchPosts(1);

        // Те TypeScript ЗНАЕТ структуру response!
        console.log(`Всего постов: ${response.total}`);
        console.log(`Страница ${response.page} из ${response.totalPages}`);

        // response.data - это Массив Post[]
        response.data.forEach(post => {
            // TypeScript знает, что post имеет поля title, author и т.д.
            console.log(`Пост: ${post.title}, Автор: ${post.author.name}`);
        });

    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}


// Для /api/posts?page=1:
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