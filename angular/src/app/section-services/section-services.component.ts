import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ServiceComponent } from '../service/service.component';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'app-section-services',
	standalone: true,
	imports: [SectionTitleComponent, ServiceComponent, ButtonComponent],
	templateUrl: './section-services.component.html',
	styleUrl: './section-services.component.css'
})
export class SectionServicesComponent {
	
}
