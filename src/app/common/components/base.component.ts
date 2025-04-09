import { Directive } from "@angular/core";

@Directive()
export abstract class BaseComponent {
  constructor() {
    // This is a base class for components
  }

  ngOnInit() {
    // This method is called when the component is initialized
  }

  ngOnDestroy() {
    // This method is called when the component is destroyed
  }
}
