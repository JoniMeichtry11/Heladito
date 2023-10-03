import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss']
})
export class ExplorePageComponent implements OnInit{
  path: string | null = '';
  constructor(
    private activatedRoute: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const category = params.get('category');
      this.path = category
      // Actualiza tus slides basado en la categoría seleccionada
    });
  }
}
