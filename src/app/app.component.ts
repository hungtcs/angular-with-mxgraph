import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private graph: mxGraph;

  @ViewChild('container', { read: ElementRef, static: true })
  public container: ElementRef<HTMLElement>;

  public ngOnInit() {
    this.graph = new mxGraph(this.container.nativeElement);
    this.graph.getModel().beginUpdate();
    try {
      const parent = this.graph.getDefaultParent();
      const angularVertex = this.graph.insertVertex(parent, null, 'Angualr', 100, 100, 100, 62)
      const mxGraphVertex = this.graph.insertVertex(parent, null, 'mxGraph', 300, 300, 100, 62)
      this.graph.insertEdge(parent, null, 'with', angularVertex, mxGraphVertex);
    } finally {
      this.graph.getModel().endUpdate();
    }
  }

}
