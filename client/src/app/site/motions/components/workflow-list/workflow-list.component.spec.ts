import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowListComponent } from './workflow-list.component';
import { E2EImportsModule } from 'e2e-imports.module';

describe('WorkflowListComponent', () => {
    let component: WorkflowListComponent;
    let fixture: ComponentFixture<WorkflowListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [E2EImportsModule],
            declarations: [WorkflowListComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkflowListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
