// // Задание 1: Создать типизированный HTTP-сервис
// // Вам нужно создать:
// // 1. Интерфейс Product
// // 2. Сервис ProductService с методами
// // 3. Реализовать методы с правильной типизацией
// // product.model.ts
// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     category?: string;
// }
// // product.service.ts
// import { Injectable } from '@angular/core';
// import { Observable, of, delay } from 'rxjs';
// import { Product } from '../models/product.model';
// @Injectable({
//     providedIn: 'root' // Автоматически доступен везде
// })
// export class ProductService {
//     // Имитация данных (вместо реальной БД)
//     private mockProducts: Product[] = [
//         { id: 1, name: 'Телефон', price: 30000, category: 'Электроника' },
//         { id: 2, name: 'Ноутбук', price: 80000, category: 'Электроника' },
//         { id: 3, name: 'Книга', price: 500, category: 'Книги' }
//     ];
//     getProducts(id: number): Observable<Product | undefined> {
//         const product = this.mockProducts.find(p => p.id === id);
//         return of(product).pipe(delay(1000));
//     } 
//     // Создать новый продукт
//     createProduct(product: Omit<Product, 'id'>): Observable<Product> {
//         const newProduct: Product = {
//             ...product,
//             id: this.generateId() // генерируем уникальный ID
//         };
//         this.mockProducts.push(newProduct);
//         return of(newProduct).pipe(delay(500));
//     }
//     // Генерация уникального ID
//     private generateId(): number {
//         return Math.max(...this.mockProducts.map(p => p.id)) + 1;
//     }
// }
// // product-list.component.ts
// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../services/product.service';
// import { Product } from '../models/product.model';
// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html'
// })
// export class ProductListComponent implements OnInit {
//     products: Product[] = [];
//     isLoading = true;
//     // внедряем сервис через конструктор
//     constructor(private productService: ProductService) {}
//     // вызывается при инициализации компонента
//     ngOnInit(): void {
//         this.loadProducts();
//     }
//     // загружаем продукты
//     loadProducts(): void {
//         this.isLoading = true;
//         this.productService.getProducts().subscribe({
//             next: (products) => {
//                 this.products = products;
//                 this.isLoading = false;
//             },
//             error: (error) => {
//                 console.error('Ошибка загрузки:', error);
//                 this.isLoading = false;
//             }
//         });
//     }
//     // добавляем новый продукт
//     addProduct(): void {
//         const newProduct: Omit<Product, 'id'> = {
//             name: 'Новый продукт',
//             price: 1000,
//             category: 'Разное',
//         };
//         this.productService.createProduct(newProduct).subscribe({
//             next: (product) => {
//                 this.products.push(product); // добавляем в список продуктов
//             },
//             error: (error) => {
//                 console.error('Ошибка создания продукта:', error);
//             }
//         })
//     }
// }

//# sourceMappingURL=my-ts-project.8a419a5c.js.map
