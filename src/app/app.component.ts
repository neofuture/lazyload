import { Component, ComponentFactoryResolver,ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ){}
  
  async lazyLoad() {
      const {LazyComponent} = await import('./lazy/lazy.component');
      const componentRef = this.viewContainer.createComponent(
        this.componentFactoryResolver.resolveComponentFactory(LazyComponent)
      );
  }

  async lazyLoadBroken() {
      const {BrokenComponent} = await import('./broken/broken.component');
      const componentRef = this.viewContainer.createComponent(
        this.componentFactoryResolver.resolveComponentFactory(BrokenComponent)
      );
  }
}
