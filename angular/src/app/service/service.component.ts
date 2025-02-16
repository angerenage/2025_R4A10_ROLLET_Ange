import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
	@Input() title: string = '';
	@Input() description: string = '';
	@Input() image: string = '';
}
