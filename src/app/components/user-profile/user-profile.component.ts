import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, booleanAttribute, input, isSignal, numberAttribute, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../dirctives/highlight.directive';



function formatName(value:string) {
  // return "Hi, "+ value

  return value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe, HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  bgColor = "red"
  @Input({alias:"userName", transform: formatName}) name=""
  @Input({transform:booleanAttribute}) isSingle!: boolean;
  @Input({transform: numberAttribute}) salary!: number
  
  @Output() myEvent = new EventEmitter<User>()

  sendData() {
    this.myEvent.emit({name: this.name,
       newSalary: 25000})
  }

  @ViewChild("myHeading") heading?:ElementRef

 
  constructor() {
    //Init properties
    //Dependency Injection
    //Event listener regsiteration
    console.log("Constructor called");
  }

  ngOnChanges(changes: SimpleChanges) : void {
    console.log("cahgens", changes);
    
  }

  ngOnInit() {
    //Init properties
    //Event listener regsiteration
    //Initial API call

    console.log("ng Onint called");
  }

  ngAfterViewInit(): void {
    console.log("ng Onint called", this.heading?.nativeElement.textContent);

  }
  ngOnDestroy(){
    //unregister event listener
    console.log('ng destroy called')
  }


  // status = "single"
  // phoneno = 123456789
  // isButtonDisabled = true
  // inputVal= "inputVal"

  // users = [
  //   {name:"", isSingle: true, salary: 2000}, 
  //   {name:"", isSingle: false, salary: 2500}, 
  //   {name:"", isSingle: false, salary: 1000}, 
  // ]

  // onChange(e:Event) {
  //   const value = (e.target as HTMLInputElement).value
  //   this.inputVal = value
  // }
}
 