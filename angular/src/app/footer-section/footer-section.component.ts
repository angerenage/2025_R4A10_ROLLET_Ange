import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-footer-section',
	standalone: true,
	imports: [],
	templateUrl: './footer-section.component.html',
	styleUrl: './footer-section.component.css'
})
export class FooterSectionComponent {
	@Input() title: string = '';
	@Input() links: { id: number, name: string, url: string }[] = [];
}
