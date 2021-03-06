import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyPropertyBindingComponent } from './my-property-binding/my-property-binding.component';
import { MyEventBindingComponent } from './my-event-binding/my-event-binding.component';
import { MyMixedBindingComponent } from './my-mixed-binding/my-mixed-binding.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AnimalsComponent } from './animals/animals.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MyPropertyBindingComponent,
    MyEventBindingComponent,
    MyMixedBindingComponent,
    BuiltInPipesComponent,
    CapitalizePipe,
    AnimalsComponent,
    MySignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
