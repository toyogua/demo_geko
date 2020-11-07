import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OperationsService} from '../../services/operations.service';
import {Ioperations} from '../../models/ioperations';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
    forma: FormGroup;
    isValidNumber1 = false;
    isValidNumber2 = false;
    operations: Ioperations[];
    isDisable = false;
    resultado;
    constructor(private fb: FormBuilder, private service: OperationsService) {
        this.creatForm();
        this.getOperations();
        this.forma.controls['numero1'].valueChanges
            .subscribe(data => {

                if (data == this.forma.value.password) {
                    this.isValidNumber1 = false;
                } else {
                    this.isValidNumber1 = true;
                }

            });
        this.forma.controls['numero2'].valueChanges
            .subscribe(data => {

                if (data == this.forma.value.password) {
                    this.isValidNumber2 = false;
                } else {
                    this.isValidNumber2 = true;
                }

            });

    }

    ngOnInit() {
    }

    creatForm() {
        this.forma = this.fb.group({
            numero1: ['', Validators.required],
            numero2: ['', Validators.required],
            operacion: ['Suma', Validators.required],
        });
        this.forma.get('operacion').setValue('1');
    }

     getOperations() {
         this.service.fetchOperations().subscribe(res => this.operations = res);
    }
    submit(){
        if (this.forma.invalid) {
            return Object.values( this.forma.controls ).forEach( control => {
                control.markAsTouched();
            });
        }
        const numeroA = this.forma.value.numero1;
        const numeroB = this.forma.value.numero2;
        const operation = this.forma.value.operacion;
        this.resultado = this.calculate(numeroA, numeroB, operation );
        // console.log(resultado);
    }
    calculate( numberA, numberB, operation ) {
        switch (operation) {
            case 1:
                return numberA * numberB;
            case 2:
                return numberA / numberB;
            case 3:
                return numberA + numberB;
            case 4:
                return numberA - numberB;
        }
    }

    get numero1Valido() {
        return this.forma.get('numero1').invalid && this.forma.get('numero1').touched;
    }

    get numero2Valido() {
        return this.forma.get('numero2').invalid && this.forma.get('numero2').touched;
    }
}
