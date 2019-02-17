import { Component, OnInit } from "@angular/core";
import { Insomnia } from "@ionic-native/insomnia/ngx";

@Component({
  selector: "app-cronometro",
  templateUrl: "./cronometro.page.html",
  styleUrls: ["./cronometro.page.scss"]
})
export class CronometroPage implements OnInit {
  percent: number = 0;
  radius: number = 100;
  timer: any = false;
  fullTime: any = "00:01:30";
  progress: any = 0;
  minutos: number = 0;
  segundos: any = 0;
  elapsed: any = {
    h: "00",
    m: "00",
    s: "00"
  };

  overAllTimer: any = false;
  constructor(private insomnia: Insomnia) {}

  ngOnInit() {}

  startTime() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (!this.overAllTimer) {
      this.progressTimer();
      this.insomnia.keepAwake();
    }
    this.timer = false;
    this.percent = 0;
    this.progress = 0;

    let timeSplit = this.fullTime.toString().split(":");
    this.minutos = timeSplit[1];
    this.segundos = timeSplit[2];

    let totalSegundos = Math.floor(this.minutos * 60) + parseInt(this.segundos);
    this.timer = setInterval(() => {
      if (this.percent == this.radius) clearInterval(this.timer);
      this.percent = Math.floor((this.progress / totalSegundos) * 100);
      this.progress++;
    }, 1000);
  }

  stopTime() {
    console.log("aaa");
    clearInterval(this.timer);
    clearInterval(this.overAllTimer);
    this.overAllTimer = false;
    this.timer = 0;
    this.percent = 0;
    this.progress = 0;
    this.elapsed = {
      h: "00",
      m: "00",
      s: "00"
    };
    this.insomnia.allowSleepAgain();
  }

  progressTimer(): any {
    let cuentaReg = new Date();
    this.overAllTimer = setInterval(() => {
      let now = new Date().getTime();
      let distance = now - cuentaReg.getTime();

      this.elapsed.h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.elapsed.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.elapsed.s = Math.floor((distance % (1000 * 60)) / 1000);

      this.elapsed.h = this.pad(this.elapsed.h, 2);
      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);
    }, 1000);
  }

  pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }
}
