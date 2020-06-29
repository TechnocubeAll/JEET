import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-family-information-form',
  templateUrl: './family-information-form.component.html',
  styleUrls: ['./family-information-form.component.scss']
})
export class FamilyInformationFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  panths = ['Deravashi', 'Sthanakvasi', 'Digambar', 'Terapanthi', 'Other']

  castes = ['Ghoghari', 'Zalavadi', 'Sorath', 'Halari', 'Other']

  residenceTypes = ['Own', 'Rent', 'Other']

  familyInformationForm = this.formBuilder.group({
    panth: [this.panths[0], Validators.required],
    caste: [this.castes[0], Validators.required],
    name: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    pincode: ['', Validators.required],
    taluka: ['', Validators.required],
    district: ['', Validators.required],
    state: ['', Validators.required],
    residenceType: [this.residenceTypes[0], Validators.required],
    feet: ['', Validators.required],
    maintenance: ['', Validators.required],
    members: this.formBuilder.array([])
  })

  ngOnInit(): void {
    this.addMember()
    this.addMember()
    this.addMember()
  }

  get Members() {
    return this.familyInformationForm.get('members') as FormArray
  }

  addMember() {
    const member = this.formBuilder.group({
      memberName: ['', Validators.required],
      memberDOB: ['', Validators.required],
      memberRelation: ['', Validators.required],
      memberEducation: ['', Validators.required],
      memberContact: ['', Validators.required],
      memberBill: ['', Validators.required],
      memberEmail: ['', Validators.required]
    })

    this.Members.push(member)
  }

  removeMember(index) {
    this.Members.removeAt(index)
  }

  submitForm() {
    console.log(this.familyInformationForm.value)
  }

}
