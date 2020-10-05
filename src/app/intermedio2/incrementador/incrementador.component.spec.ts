import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {
        component.leyenda = 'Progreso de carga';
        fixture.detectChanges(); //Disparar la deteccion de cambios
        const elem: HTMLElement = fixture.debugElement.query(By.css('H3')).nativeElement;
        expect(elem.innerHTML).toContain('Progreso de carga');

    });

    it('Debe de mostrar en el imput el valor del progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const elem = input.nativeElement;
            expect(elem.value).toBe('55');

        });
    });

    it('Debe decrementar/incrementar en 5 con un clock del boton', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });


    it('En el titulo del component, debe mostrar el progreso', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query(By.css('H3')).nativeElement;
        expect(elem.innerHTML).toContain('45');
    });

});
