import { Component, Input ,Output, EventEmitter} from '@angular/core';
import { HeroInterface } from '../heroInterface';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
    @Input() hero?: HeroInterface;

    @Output() parentValueChange = new EventEmitter<boolean>();

    constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
    ) {}

      
    ngOnInit(): void {
      this.getHero();
    }
    
    getHero(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }
    
    goBack(): void {
      this.location.back();
    }
}