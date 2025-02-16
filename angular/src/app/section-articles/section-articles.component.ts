import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ArticleComponent } from '../article/article.component';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'app-section-articles',
	standalone: true,
	imports: [SectionTitleComponent, ArticleComponent, ButtonComponent],
	templateUrl: './section-articles.component.html',
	styleUrl: './section-articles.component.css'
})
export class SectionArticlesComponent {

}
