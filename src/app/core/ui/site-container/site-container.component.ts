import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-site-container",
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: "./site-container.component.html",
    styleUrl: "./site-container.component.scss",
})
export class SiteContainerComponent {}
