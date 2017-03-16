import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-property-binding',
  templateUrl: './my-property-binding.component.html',
  styleUrls: ['./my-property-binding.component.css']
})
export class MyPropertyBindingComponent implements OnInit {

  myImageSource : string = "https://media.giphy.com/media/l1BgRcqhIyDSke5pe/source.gif";
  images : Array<string> = [
    "https://media.giphy.com/media/l1BgRcqhIyDSke5pe/source.gif",
    "https://media.giphy.com/media/yYuTnuQzulqIo/giphy.gif",
    "https://media.giphy.com/media/zNXvBiNNcrjDW/giphy.gif",
    "https://media.giphy.com/media/xNBcChLQt7s9a/200.gif",
    "https://media.giphy.com/media/l0IygGo908KaG2LD2/giphy.gif"

  ];
  changeImage() {
    this.myImageSource = this.images[Math.floor(Math.random() * this.images.length)];
  }

  constructor() { }

  ngOnInit() {
  }

}
