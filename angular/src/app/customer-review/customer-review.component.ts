import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-customer-review',
	standalone: true,
	imports: [],
	templateUrl: './customer-review.component.html',
	styleUrl: './customer-review.component.css'
})
export class CustomerReviewComponent {
	@Input() picture: string = '';
	@Input() name: string = '';
	@Input() subtitle: string = '';
	@Input() review: string = '';
}
