import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ButtonComponent } from "@shared/ui/button/button.component";

@Component({
    selector: "app-stats",
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: "./stats.component.html",
    styleUrl: "./stats.component.scss",
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StatsComponent {}
