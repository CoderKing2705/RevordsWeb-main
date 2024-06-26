import { Component, OnDestroy } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastService } from '../../services/ToastService';
import { ToastsContainer } from './toastcontainer.component';

@Component({
	selector: 'ngbd-toast-global',
	standalone: true,
	imports: [NgbTooltipModule, ToastsContainer],
	templateUrl: './ToastComponent.html',
})

export class ToastComponent  implements OnDestroy {

    constructor(
        public toastService: ToastService
    ) { 
        
    }

    showStandard() {
		this.toastService.show('I am a standard toast');
	}

	showSuccess() {
		this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
	}

	showDanger(dangerTpl) {
		this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}

}