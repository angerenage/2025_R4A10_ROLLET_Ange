import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
	selector: 'app-illustrated-section',
	standalone: true,
	imports: [SectionTitleComponent],
	templateUrl: './illustrated-section.component.html',
	styleUrl: './illustrated-section.component.css'
})
export class IllustratedSectionComponent {
	@Input() title: string = '';
	@Input() description: string = '';
	@Input() illustration: string = '';
	@Input() inverted: boolean = false;
}
