import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from "@angular/core";
import { ButtonComponent } from "@shared/ui/button/button.component";

@Component({
    selector: "app-stats",
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: "./stats.component.html",
    styleUrl: "./stats.component.scss",
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StatsComponent {
    filter = signal<"fe" | "be" | "db" | "misc">("fe");
}
