import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup;
  successMessage: string;
  errorMessage: string;
  submitDisabled: boolean;
  submitLoading: boolean;

  constructor(private builder: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
      });

    this.successMessage = null;
    this.errorMessage = null;
    this.submitDisabled = false;
    this.submitLoading = false;
  }

  onSubmit(FormData) {
    this.submitLoading = true;
    this.contactService.PostMessage(FormData)
      .subscribe(response => {
        this.submitLoading = false;
        console.log('Sent message successfully');
        this.successMessage = 'Thank you for your message!'
      }, error => {
        this.submitLoading = false;
        console.warn(error.responseText)
        console.log({ error })
        this.errorMessage = 'An error occurred, please try again later.'
      });
    
    this.submitDisabled = true;
  }

}
