import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploreService } from '@core/services/explore.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss'],
})
export class ExplorePageComponent implements OnInit, OnDestroy {
  titleCategory: string = 'Explore';
  private titleSubscription: Subscription = new Subscription();
  category: string | null = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private exploreService: ExploreService
  ) {
    this.exploreService.titleCategory$.subscribe((newTitle) => {
      this.titleCategory = newTitle;
    });
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.category = params.get('category');
    });
  }

  ngOnDestroy(): void {
    this.titleSubscription.unsubscribe();
  }
}
