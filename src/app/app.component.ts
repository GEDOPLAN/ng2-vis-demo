import { Component, OnInit, ViewChild} from '@angular/core';
import {Vis3dGraphDirective} from './directives/vis3dgraph.directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public data:any[][];

  @ViewChild(Vis3dGraphDirective)
  private _graph:Vis3dGraphDirective;

  public ngOnInit(){
    this.data=new Array(6).fill(0).map(_ => new Array(6).fill(0).map(_ => {return {value: Math.floor(Math.random()*100)}}));
  }

  public updateData(){
    this._graph.createGraph();
  }
}
