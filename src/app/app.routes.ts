import { Routes } from "@angular/router";
import { SiteContainerComponent } from "@core/ui/site-container/site-container.component";
import { BootSequenceComponent } from "@feature/boot-sequence/boot-sequence/boot-sequence.component";
import { StatsComponent } from "@feature/stats/stats.component";

export const routes: Routes = [
    {
        path: "",
        component: SiteContainerComponent,
        children: [
            { path: "booting", component: BootSequenceComponent },
            { path: "stats", component: StatsComponent },
        ],
    },
];
