import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ButtonComponent } from "@shared/ui/button/button.component";

@Component({
    selector: "app-nav",
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: "./nav.component.html",
    styleUrl: "./nav.component.scss",
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavComponent {}
