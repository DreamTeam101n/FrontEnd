import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../services/scores.service';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  data;
  currentScore;
  constructor(private scores: ScoresService) { }

  ngOnInit() {
    this.getStat();
  }
  getStat(){
    this.scores.getScores().subscribe({
      next: data => {
        this.data = data;
        if(this.data.scores[0]){
          this.currentScore = this.data.scores[0].current_score;
        }
      },
      error: err => {
        this.currentScore = null;
      }
    });
  }
}
