import { IonicModule } from '@ionic/angular';
import { NgModule, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule implements OnInit {

  @Input()
  contentImg: string = ""
  @Input()
  contentTitle: string = ""
  @Input()
  contentSubtitle: string = ""
  @Input()
  contentInfo: string = ""
  @Input()
  contentRef: string = ""


  constructor(
  ){}

  ngOnInit() {
      }


}
