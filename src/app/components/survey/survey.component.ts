import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private surveyService: SurveyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.createValidators(this.formBuilder);
  }

  createValidators(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      'username': localStorage.getItem('email'),
      'name': ['', Validators.required],
      'surname': ['', Validators.required],
      'terms': ['', Validators.required],
      'question_01': ['', Validators.required],
      'question_02': ['', Validators.required],
      'question_03': ['', Validators.required],
      'age': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'phone_number': ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]],
    });
  }

  async acceptTerms() {
    try {
      await this.surveyService.add(this.form.getRawValue());
      this.router.navigate(['home']);   //Redirect to homepage
    } catch (error) { }
  }
}
