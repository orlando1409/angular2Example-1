import {
    Component,
    OnInit,
    ViewEncapsulation,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { ExampleService } from './example.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/my-modal-content.component';
import IProduct = Example.Models.IProduct;
@Component({
    selector: 'my-example-list',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']

})
export class ExampleComponent implements OnInit {
    products: IProduct[];
    selectedProduct: any;
    closeResult: string;
    constructor(private exampleService: ExampleService,
        private modalService: NgbModal) {
        // Do stuff
    }

    ngOnInit() {
        this.products = this.exampleService.getListProducts();
        console.log('Hello Example');
    }
    goDetails(selectedProduct: any) {
        this.selectedProduct = selectedProduct;
        this.open();
        console.debug("details", selectedProduct);
    }
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        console.log(this.selectedProduct);
        modalRef.componentInstance.modalObject = this.selectedProduct;
    }


}
