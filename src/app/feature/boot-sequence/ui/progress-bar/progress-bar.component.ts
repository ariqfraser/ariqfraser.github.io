import {
    Component,
    computed,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output,
    signal,
} from "@angular/core";
import { interval, Subscription, take } from "rxjs";

@Component({
    selector: "app-progress-bar",
    standalone: true,
    imports: [],
    templateUrl: "./progress-bar.component.html",
    styleUrl: "./progress-bar.component.scss",
})
export class ProgressBarComponent implements OnInit, OnDestroy {
    private _progress = signal(10);
    @Output() onComplete = new EventEmitter();

    progress = computed(() => {
        let output = this._progress().toString();
        const iteration = 3 - output.length;
        for (let i = 0; i <= iteration; i++) {
            output = " " + output;
        }
        return output + "%";
    });

    bar = computed(() => {
        this._progress();
        let output = "";
        const barCount = Math.floor(this._progress() / 5);
        for (let i = 0; i < barCount; i++) {
            output += "█";
        }
        for (let i = 0; i < 20 - barCount; i++) {
            output += " . ";
        }
        return output;
    });

    private sub: Subscription | undefined;

    ngOnInit(): void {
        this.animate();
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    animate() {
        this.sub = interval(25)
            .pipe(take(101))
            .subscribe((i) => {
                this._progress.set(i);
                if (i === 100) this.onComplete.emit();
            });
    }
}
