import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.sass']
})
export class SystemsComponent implements OnInit {

  // TODO: Update download links
  downloadLinks = {
    budgetModel: 'https://drive.google.com/uc?export=download&id=1OclzcJ1silObwxhwMac4xPU5G4_VPTUf',
    managingNonPublicFunds: 'https://drive.google.com/uc?export=download&id=1OclzcJ1silObwxhwMac4xPU5G4_VPTUf',
    teachersSalaryAssessment: 'https://drive.google.com/uc?export=download&id=1OclzcJ1silObwxhwMac4xPU5G4_VPTUf',
    staffSalaryCalculator: 'https://drive.google.com/uc?export=download&id=1OclzcJ1silObwxhwMac4xPU5G4_VPTUf',
    customerDatabaseAndInvoicingSystem: 'https://drive.google.com/uc?export=download&id=1OclzcJ1silObwxhwMac4xPU5G4_VPTUf'
  };

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

}
