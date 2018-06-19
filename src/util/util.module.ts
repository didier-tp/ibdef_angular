import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsGroupComponent } from "../util/tabs-group/tabs-group.component";
import { TogglePanelComponent } from "./toggle-panel/toggle-panel.component";
import { MyFormGroupWithLabelComponent } from "./my-form-group-with-label/my-form-group-with-label.component";

@NgModule({
  imports: [
    CommonModule , FormsModule
  ],
  exports: [
    TabsGroupComponent , TogglePanelComponent
    ,MyFormGroupWithLabelComponent
  ],
  declarations: [ TabsGroupComponent , TogglePanelComponent ,
    MyFormGroupWithLabelComponent ]
})
export class UtilModule { }
