import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public wave: number = 1;
  public win: boolean = false;
  public loose: boolean = false;

  public enemy: any = [];
  private id: number = 1;
  private number: number = 1;

  constructor( ) {}

  ngOnInit(): void {
    this.createEnemyOnWave();
  }

  public goToNextWave() {
    this.win = false;
    this.wave += 1;
    this.number = 1;
    this.createEnemyOnWave();
  }

  public getDamage(id: number) {
    this.enemy.map((obj: any) => {
      if (obj.id === id) {
        obj.health -= 25;
      }
    })

    if (this.enemy.every((obj: any) => obj.health === 0) && this.id > 5 * this.wave) {
      this.win = true;
    }
  }

  private createEnemyOnWave(): void {
    const enemy = {
      id: this.id,
      positionX: -100,
      positionY: 150,
      health: 100 * this.wave
    };
    this.enemy.push(enemy);

    setInterval(() => {
      if (this.enemy[enemy.id - 1].positionX < 400) {
        this.enemy[enemy.id - 1].positionX += 1;
      } else if (this.enemy[enemy.id - 1].positionX === 400 && this.enemy[enemy.id - 1].positionY !== 550) {
        this.enemy[enemy.id - 1].positionY += 1;
      } else if (this.enemy[enemy.id - 1].positionY === 550 && this.enemy[enemy.id - 1].positionX !== 900) {
        this.enemy[enemy.id - 1].positionX += 1;
      } else if (this.enemy[enemy.id - 1].positionX === 900 && this.enemy[enemy.id - 1].positionY !== 150) {
        this.enemy[enemy.id - 1].positionY -= 1;
      } else if (this.enemy[enemy.id - 1].positionX !== 1300) {
        this.enemy[enemy.id - 1].positionX += 1;
      } else if (this.enemy[enemy.id - 1].positionX === 1300 && this.enemy[enemy.id - 1].health > 0) {
        this.loose = true;
        return;
      }
    }, 17);

    this.id += 1;
    this.number += 1;
    if (this.number <= 5 * this.wave) {
      setTimeout(() => {
        this.createEnemyOnWave();
      }, 3500)
    }
  }

}
