import { Component } from '@angular/core';
import { FooterSectionComponent } from '../footer-section/footer-section.component';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [FooterSectionComponent],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css'
})
export class FooterComponent {
	companyLinks = [
		{ id: 0, name: 'About Us', url: '/about' },
		{ id: 1, name: 'Testimonials', url: '/testimonials' },
		{ id: 2, name: 'Find a doctor', url: '/find-a-doctor' },
		{ id: 3, name: 'Apps', url: '/apps' }
	]

	regionLinks = [
		{ id: 0, name: 'Indonesia', url: '/idn' },
		{ id: 1, name: 'Singapore', url: '/sg' },
		{ id: 2, name: 'Hong Kong', url: '/hkg' },
		{ id: 3, name: 'Canada', url: '/ca' }
	]

	helpLinks = [
		{ id: 0, name: 'Help center', url: '/help' },
		{ id: 1, name: 'Contact support', url: '/contact' },
		{ id: 2, name: 'Instructions', url: '/instructions' },
		{ id: 3, name: 'How it works', url: '/how-it-works' }
	]
}
