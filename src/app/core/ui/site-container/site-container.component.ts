import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavComponent } from "../nav/nav.component";

@Component({
    selector: "app-site-container",
    standalone: true,
    imports: [RouterOutlet, NavComponent],
    templateUrl: "./site-container.component.html",
    styleUrl: "./site-container.component.scss",
})
export class SiteContainerComponent {}
