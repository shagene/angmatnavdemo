import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @ViewChild('drawerMd') public drawerMd: MatDrawer;
  @ViewChild('drawerXs') public drawerXs: MatDrawer;
  @Input() deviceXs: boolean;
  @Input() deviceSm: boolean;
  @Input() deviceMd: boolean;
  @Input() deviceLg: boolean;
  @Input() deviceXl: boolean;
  onCollapse: boolean = false;
  topVal = 0;
  onScroll(e) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;
  }
  onCollapseToggle() {
    this.onCollapse != this.onCollapse;
    this.drawerMd.toggle();
  }
}
