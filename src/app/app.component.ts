import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public enemy: any = [];
  private id: number = 1;

  constructor( ) {}

  ngOnInit(): void {
    this.createEnemyOnWave();
  }

  private createEnemyOnWave(): void {
    const enemy = {
      id: this.id,
      positionX: -100,
      positionY: 150,
      health: 100
    };
    this.enemy.push(enemy);

    setInterval(() => {
      if (this.enemy[enemy.id - 1].positionX < 400) {
        this.enemy[enemy.id - 1].positionX += 100;
      } else if (this.enemy[enemy.id - 1].positionX === 400 && this.enemy[enemy.id - 1].positionY !== 550) {
        this.enemy[enemy.id - 1].positionY += 100;
      } else if (this.enemy[enemy.id - 1].positionY === 550 && this.enemy[enemy.id - 1].positionX !== 900) {
        this.enemy[enemy.id - 1].positionX += 100;
      } else if (this.enemy[enemy.id - 1].positionX === 900 && this.enemy[enemy.id - 1].positionY !== 150) {
        this.enemy[enemy.id - 1].positionY -= 100;
      } else if (this.enemy[enemy.id - 1].positionX !== 1300) {
        this.enemy[enemy.id - 1].positionX += 100;
      } else if (this.enemy[enemy.id - 1].positionX === 1300) {
        return;
      }
    }, 500);

    this.id += 1;
    if (this.id <= 5) {
      setTimeout(() => {
        this.createEnemyOnWave();
      }, 1500)
    }
  }

}
