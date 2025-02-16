import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CustomerReviewComponent } from '../customer-review/customer-review.component';

@Component({
	selector: 'app-section-customer',
	standalone: true,
	imports: [SectionTitleComponent, PaginationComponent, CustomerReviewComponent],
	templateUrl: './section-customer.component.html',
	styleUrl: './section-customer.component.css'
})
export class SectionCustomerComponent {
	customerReviews: {
		picture: string;
		name: string;
		subtitle: string;
		review: string;
	}[] = [
		{
			picture: './assets/customers/customer-1.png',
			name: 'Edward Newgate',
			subtitle: 'Founder Circle',
			review: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely'
		},
		{
			picture: './assets/customers/customer-2.png',
			name: 'Ange Rollet',
			subtitle: 'Creator of this page',
			review: 'The section is named "What our customer are saying" but Edward Newgate is not a customer but a member of the founder circle so I don\'t know what to put here'
		},
		{
			picture: './assets/customers/customer-3.webp',
			name: 'Edward Newgate',
			subtitle: 'Whitebeard',
			review: 'I\'m the real Edward Newgate, the founder of the Whitebeard Pirates. I don\'t know who is the first guy but he is not me, I\'m the real Strongest Man in the World'
		},
		{
			picture: './assets/customers/customer-4.webp',
			name: 'Model S-3000 Premium',
			subtitle: 'Desktop Stapler',
			review: 'The S-3000\'s staple discharge area is lined with a low-friction coating to avoid jamming. It is the only stapler in its class to feature a built-in staple remover for quick fixes'
		}
	];

	currentPage: number = 0;

	handlePageChange(page: number) {
		this.currentPage = page;
	}
}
