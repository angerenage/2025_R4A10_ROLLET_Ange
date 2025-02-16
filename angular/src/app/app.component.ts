import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section-1/section-1.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { IllustratedSectionComponent } from './illustrated-section/illustrated-section.component';
import { ButtonComponent } from './button/button.component';
import { SectionCustomerComponent } from './section-customer/section-customer.component';
import { SectionArticlesComponent } from './section-articles/section-articles.component';
import { FooterComponent } from './footer/footer.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		HeaderComponent,
		Section1Component,
		SectionServicesComponent,
		IllustratedSectionComponent,
		ButtonComponent,
		SectionCustomerComponent,
		SectionArticlesComponent,
		FooterComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'Trafalgar';
}
