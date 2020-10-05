import { IncrementadorComponent } from './incrementador.component';

describe('Incremendator Component Unit', () => {

    let component: IncrementadorComponent;

    beforeEach(() => component = new IncrementadorComponent);

    it('No debe pasar de 100 el progreso', () => {
        component.progreso = 50;
        component.cambiarValor(5);
        expect(component.progreso).toBe(55);
    });
});
