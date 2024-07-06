import { Component, ElementRef, inject, signal } from "@angular/core";
import { Subscription, take, interval } from "rxjs";
import { ProgressBarComponent } from "../ui/progress-bar/progress-bar.component";

@Component({
    selector: "app-boot-sequence",
    standalone: true,
    imports: [ProgressBarComponent],
    templateUrl: "./boot-sequence.component.html",
    styleUrl: "./boot-sequence.component.scss",
})
export class BootSequenceComponent {
    display1 = "";
    display2 = "";
    display3 = "";
    step = signal(1);
    private elem = inject(ElementRef);
    private readonly text1 = `ARQ-TEC Industries
Copyright 2077 All Rights Reserved

        Initializing ARQ-TEC(TM) Development Environment...

        Please Wait...

        BOOT SEQUENCE INITIATED...

        Loading ARQ-TEC OS Version 4.0.6...

        ---------------------------------------------------`;

    private readonly text2 = `
        Starting System Checks...
        ---------------------------------------------------
        Memory: OK
        CPU: OK
        Display: OK
        Sensors: OK
        ---------------------------------------------------
        STATUS: All systems nominal

        Launching ARQ-TEC Interface...
        ---------------------------------------------------`;
    private readonly text3 = `
        Welcome to the ARQ-TEC Development Environment

        > ACCESSING USER DATA
        > Establishing connection to user profile...
        > User profile found
        > Loading user profile data...

        ---------------------------------------------------
        Welcome, Surface Dweller #196
        ---------------------------------------------------
        Press any key to continue...

        > Initiating portfolio overview...
        > Loading...

        ---------------------------------------------------
    `;

    private subscription = new Subscription();

    ngOnInit() {
        this.animate(1);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    animate(part: number) {
        this.scrollToBottom();
        const text =
            part === 1 ? this.text1 : part === 2 ? this.text2 : this.text3;
        const characters = text.split("");
        this.subscription.add(
            interval(10)
                .pipe(take(characters.length))
                .subscribe((i) => {
                    if (part === 1) this.display1 += characters[i];
                    if (part === 2) this.display2 += characters[i];
                    if (part === 3) this.display3 += characters[i];
                    if (i === characters.length - 1) this.step.set(part + 1);
                    this.scrollToBottom();
                }),
        );
    }

    scrollToBottom() {
        this.elem.nativeElement.scrollTo(
            0,
            this.elem.nativeElement.scrollHeight,
        );
    }
}
