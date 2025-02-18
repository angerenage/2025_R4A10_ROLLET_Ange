import { Component, OnInit } from '@angular/core';
import { TravelsService, Travel } from '../travels.service';

@Component({
  selector: 'app-travels',
  standalone: true,
  imports: [],
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.css'
})
export class TravelsComponent implements OnInit {
  travels!: Travel[];

  constructor(
    private readonly travelsService: TravelsService
  ) {}

  ngOnInit() {
    this.travels = this.travelsService.getTravels();
  }
}
