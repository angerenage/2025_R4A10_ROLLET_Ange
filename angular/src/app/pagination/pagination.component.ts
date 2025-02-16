import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-pagination',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './pagination.component.html',
	styleUrl: './pagination.component.css'
})
export class PaginationComponent {
	@Input() pageNumber: number = 1;
	@Output() pageChange = new EventEmitter<number>();

	currentPage: number = 0;

	get range(): number[] {
		return Array.from({ length: this.pageNumber }, (_, i) => i);
	}

	previousPage() {
		if (this.currentPage > 0) {
			this.currentPage--;
			this.pageChange.emit(this.currentPage);
		}
	}

	nextPage() {
		if (this.currentPage < this.pageNumber - 1) {
			this.currentPage++;
			this.pageChange.emit(this.currentPage);
		}
	}

	changePage(page: number) {
		if (page >= 0 || page < this.pageNumber) {
			this.currentPage = page;
			this.pageChange.emit(this.currentPage);
		}
	}
}
