import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "icon"
})
export class IconPipe implements PipeTransform {
  public iconos = [
    {
      type: "movie",
      icon: "videocam"
    },
    {
      type: "series",
      icon: "ty"
    },
    {
      type: "episode",
      icon: "tablet-portrait"
    }
  ];
  setIcon(type: string) {
    console.log("ES: " + type);
    /*this.iconos.forEach(element => {
      if (element.type === type) {
        return element.icon;
      }
    });
    return*/
    this.iconos.forEach(element => {
      console.log(element);
      if (element.type === type.toString()) {
        return element.icon;
      }
    });
  }
  transform(value: any): any {
    console.log("AA: " + value);
    console.log(this.setIcon(value));
    return this.setIcon(value);
  }
}
