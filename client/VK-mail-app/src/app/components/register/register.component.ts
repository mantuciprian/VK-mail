import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  visiblePassword: boolean;
  visiblePassword2: boolean;
  passwordVal: string;
  securityQuestions: any[];
  fieldsErrors: string[];
  fieldsHints: any[];
  validationsStatus: boolean[];
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.securityQuestions = [
      'What was the make of your first car ?',
      'What was your first pet?',
      'What was your birth place?'
    ];
    this.fieldsHints = [
      {showHint: false, hint: 'Username must be between 5 and 20 characters'},
      {showHint: false, hint: 'Password must be between 5 and 25 characters'},
      {showHint: false, hint: 'Password confrimation must be the same as the above password'},
      {showHint: false, hint: 'Email adress mut be between 5 and 25 characters and do not include [@, !, ?] symbols or .com at the end'},
      {},
      {showHint: false, hint: 'Answare needs to between 5 and 40 characters'},
      {showHint: false, hint: 'First name needs to have at last 3 characters and maximum 20 characters'},
      {showHint: false, hint: 'Second name needs to have at last 3 characters and maximum 40 characters'}
    ];
    this.fieldsErrors = ['', '', '', '', '', '', '', ''];
    this.passwordVal = '';
    this.validationsStatus = [false, false, false, false, false, false];
  }
  showPassword() {
    console.log('password shown: ', this.visiblePassword);
    this.visiblePassword = !this.visiblePassword;
  }
  showPassword2() {
    console.log('password2 shown: ', this.visiblePassword2);
    this.visiblePassword2 = !this.visiblePassword2;
  }
  register(ev, form) {
    ev.preventDefault();
    let isValid = true;
    this.validationsStatus.map((v) => v === false ? isValid = false : isValid);
    console.log(this.validationsStatus, isValid);
    if (isValid) {
      this.registerService.userRegister(form.value).subscribe((res) => {
        if (res.success === true ) {
          this.router.navigate(['/login']);
        }
      });
    }
  }
  // hints
  showUsernameHint() {
    if (this.fieldsErrors[0] === '') {
      this.fieldsHints[0].showHint = true;
    }
  }
  showPasswordnameHint() {
    if (this.fieldsErrors[1] === '') {
      this.fieldsHints[1].showHint = true;
    }
  }
  showPassword2Hint() {
    if (this.fieldsErrors[2] === '') {
      this.fieldsHints[2].showHint = true;
    }
  }

  showEmailHint() {
    if (this.fieldsErrors[3] === '') {
      this.fieldsHints[3].showHint = true;
    }
  }

  showAnswareHint() {
    if (this.fieldsErrors[5] === '') {
      this.fieldsHints[5].showHint = true;
    }
  }

  showFirstNameHint() {
    if (this.fieldsErrors[6] === '') {
      this.fieldsHints[6].showHint = true;
    }
  }

  showSecondNameHint() {
    if (this.fieldsErrors[7] === '') {
      this.fieldsHints[7].showHint = true;
    }
  }

  hideAnswareHint() {
      this.fieldsHints[5].showHint = false;
  }


  hideUsernameHint() {
    this.fieldsHints[0].showHint = false;
  }
  hidePasswordHint() {
    this.fieldsHints[1].showHint = false;
  }

  hidePassword2Hint() {
    this.fieldsHints[2].showHint = false;
  }

  hideEmailHint() {
    this.fieldsHints[3].showHint = false;
  }

  hideFirstNameHint() {
    this.fieldsHints[6].showHint = false;
  }
  hideSecondNameHint() {
    this.fieldsHints[7].showHint = false;
  }

  // validations
  usernameValidation(ev) {
      const val = ev.target.value;
      let validationStatus;
      // let usernameTaken;
      // validate the value passed
      switch (true) {
        // case usernameCheck === 'false':
        // validationStatus = 'Username is already taken';
        // this.fieldsErrors[0] = validationStatus;
        case val.length < 5 :
        validationStatus = 'Username is too short';
        this.fieldsErrors[0] = validationStatus;
        this.validationsStatus[0] = false;
        break;
        case val.length > 20 :
        validationStatus = 'Username is too long';
        this.fieldsErrors[0] = validationStatus;
        this.validationsStatus[0] = false;
        break;
        default:
        // check if the username is already taken
        this.registerService.usernameAvailability({username: val}).subscribe((status) => {
          console.log('username passed is', status);
          if (status === 'invalid') {
            this.fieldsErrors[0] = 'Username is already taken!';
            this.validationsStatus[0] = false;
          } else {
            this.fieldsErrors[0] = '';
            this.validationsStatus[0] = true;
          };
        });
        return;
      };
  }
  passwordValidation(ev) {
    const val = ev.target.value;
    let validationStatus;
    // validate the value passed
    switch (true) {
      case val.length < 5 :
      validationStatus = 'Password is too short';
      this.fieldsErrors[1] = validationStatus;
      this.validationsStatus[1] = false;
      break;
      case val.length > 25 :
      validationStatus = 'Password is too long';
      this.fieldsErrors[1] = validationStatus;
      this.validationsStatus[1] = false;
      break;
      default:
      this.fieldsErrors[1] = '';
      this.validationsStatus[1] = true;
      return;
    };
  }
  password2Validation(ev) {
    const val = ev.target.value;
    // validate the value passed
    switch (true) {
      case val !== this.passwordVal:
      this.fieldsErrors[2] = 'Password confirmation is not the same';
      this.validationsStatus[2] = false;
      break;
      default:
      this.fieldsErrors[2] = '';
      this.validationsStatus[2] = true;
      return;
    };
  }
  emailValidation(ev) {
    const val = ev.target.value;
    // validate the value passed
    switch (true) {
      case val.indexOf('@') !== -1 || val.indexOf('!') !== -1 || val.indexOf('?') !== -1:
      this.fieldsErrors[3] = 'Please do not use invalid characters';
      this.validationsStatus[3] = false;
      break;
      case val.slice(val.length - 6, val.length).toLowerCase() === 'vk.com':
      this.fieldsErrors[3] = 'Please remove the extension "VK.com" as it will be auto-added at the end';
      this.validationsStatus[3] = false;
      break;
      case val.length < 6:
      this.fieldsErrors[3] = 'Email adress must have at last 6 characters';
      this.validationsStatus[3] = false;
      break;
      case val.length > 25:
      this.fieldsErrors[3] = 'Email adress is too long';
      this.validationsStatus[3] = false;
      break;
      default:
      // this.fieldsErrors[3] = '';
      // check if the username is already taken
      this.registerService.emailAvailability({email: val}).subscribe((status) => {
        console.log('email passed is', status);
        if (status === 'invalid') {
          this.fieldsErrors[3] = 'Email is already taken!';
          this.validationsStatus[3] = false;
        } else {
          this.fieldsErrors[3] = '';
          this.validationsStatus[3] = true;
        };
      });
      return;
    };
  }
  answareValidation(ev) {
    const val = ev.target.value;
    // validate the value passed
    switch (true) {
      case val.length < 5:
      this.fieldsErrors[5] = 'Answare must have at last 5 characters';
      this.validationsStatus[5] = false;
      break;
      case val.length > 40:
      this.fieldsErrors[5] = 'Answare must have a maximum of 40 characters';
      this.validationsStatus[5] = false;
      break;
      default:
          this.fieldsErrors[5] = '';
          this.validationsStatus[5] = true;
      return;
    };
  }
  questionValidation(ev) {
    const val = ev.target.value;
    // validate the value passed
    switch (true) {
      case val.length < 1:
      this.fieldsErrors[4] = 'You have to select a security question';
      this.validationsStatus[4] = false;
      break;
      default:
          this.fieldsErrors[4] = '';
          this.validationsStatus[4] = true;
      return;
    };
  }
  firstNameValidation(ev) {
    const val = ev.target.value;
    // validate the value passed
    switch (true) {
      case val.length < 3:
      this.fieldsErrors[6] = 'First name is too short';
      this.validationsStatus[6] = false;
      break;
      case val.length > 20:
      this.fieldsErrors[6] = 'First name is too long';
      this.validationsStatus[6] = false;
      break;
      default:
          this.fieldsErrors[6] = '';
          this.validationsStatus[6] = true;
      return;
    };
  }
  secondNameValidation(ev) {
    const val = ev.target.value;
    // validate the value passed
    switch (true) {
      case val.length < 3:
      this.fieldsErrors[7] = 'Second name is too short';
      this.validationsStatus[7] = false;
      break;
      case val.length > 40:
      this.fieldsErrors[7] = 'Second name is too long';
      this.validationsStatus[7] = false;
      break;
      default:
          this.fieldsErrors[7] = '';
          this.validationsStatus[7] = true;
      return;
    };
  }
}
