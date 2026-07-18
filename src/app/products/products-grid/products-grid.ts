import { Component, computed, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-products-grid',
  imports: [
    FormsModule,
    ProductCard,
    MatIconModule,
    MatInputModule,
    MatFormField,
    MatFormFieldModule,
  ],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})
export class ProductsGrid {
  protected readonly searchTerm = signal(''); // a writeable

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description:
        'High-quality wireless headphones with noise cancellation and premium sound quality.',
      price: 199.99,
      originalPrice: 249.99,
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description:
        'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.',
      price: 299.99,
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      description: 'Compact speaker with powerful bass and 12-hour battery life.',
      price: 79.99,
      originalPrice: 99.99,
    },
  ]);

  protected readonly filteredProducts = computed((): Product[] => {
    const term = this.searchTerm().toLocaleLowerCase().trim();

    if (!term) {
      return this.products();
    }

    return this.products().filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(term) ||
        product.description.toLocaleLowerCase().includes(term),
    );
  });

  protected clearSearch() {
    this.searchTerm.set('');
  }

  protected onAddToCart(product: Product): void {
    console.log('Added to cart', product.name)
  }
}
