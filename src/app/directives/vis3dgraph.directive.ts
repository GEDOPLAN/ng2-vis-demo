import { Directive, ElementRef, Input } from '@angular/core';


declare var vis: any;

const DEFAULT_OPTIONS = {
  width: '100%',
  height: '700px',
  style: 'surface',
  showPerspective: true,
  showGrid: true,
  showShadow: false,
  keepAspectRatio: true,
  verticalRatio: 0.5,
  xCenter: '50%',
  yCenter: '35%',
  cameraPosition: { horizontal: 1.0, vertical: 0.5, distance: 2.0 }
};

@Directive({
  selector: '[appVis3DGraph]'
})
export class Vis3dGraphDirective {
  @Input()
  public data: any;

  private _graph; any;

  constructor(private _element: ElementRef) { }

  public createGraph() {
    let container = this._element.nativeElement;

    if (!this._graph) {
      this._graph = new vis.Graph3d(container, this._generateData(), DEFAULT_OPTIONS);
    } else {
      this._graph.setData(this._generateData());
      this._graph.redraw();
    }
  }

  private _generateData() {
    let data = [];
    this.data.forEach((xValue, x) => data.push(...xValue.map((yValue, y) => {
      return { x, y, z: yValue.value };
    })));
    return data;
  }
}