import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wolf-picker',
  templateUrl: './wolf-picker.component.html',
  styleUrls: ['./wolf-picker.component.scss']
})
export class WolfPickerComponent implements OnInit {
  today: any = new Date();
  hrs: any;
  mins: any;
  secs: any;
  hours: any = [];
  minutes: any = [];
  @Input() wolfTransform: any;
  @Output() setTime = new EventEmitter<any>();
  isSeconds: boolean = true;
  isMilitaryTime: boolean = true;

  date =
    this.today.getFullYear() +
    '-' +
    (this.today.getMonth() + 1) +
    '-' +
    this.today.getDate();
  time: any =
    this.today.getHours() +
    ':' +
    this.today.getMinutes() +
    ':' +
    this.today.getSeconds();
  ampm = this.today.getHours() >= 12 ? 'pm' : 'am';

  public months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
  public days:any = [];
  public years:any = [];
  dayVal: any = this.today.getDate();
  monthVal: any = this.loadMonths(this.today.getMonth());
  yearVal: any = this.today.getFullYear();
  previousDay:any;
  dateTime: any;
  isOpen: boolean = false;
  divider: string = "-";
  disablePicker: string = "none";

  constructor() {}

  ngOnInit(): void {
    this.disablePicker = this.wolfTransform?.disablePicker?.toLowerCase() === "time" ? "time" : this.wolfTransform?.disablePicker?.toLowerCase() === "date" ? "date" : this.disablePicker;
    this.divider = this.wolfTransform?.divider === 1 ? "-" : "/";
    this.isSeconds = this.wolfTransform?.secconds;
    this.isMilitaryTime = this.wolfTransform?.isMilitaryTime;
    this.hrs = this.isMilitaryTime ? this.today.getHours() : this.today.getHours() > 12 ? this.today.getHours() - 12 : this.today.getHours() == 12 ? this.today.getHours() - 12 : this.today.getHours();
    this.mins = this.wolfTransform['steps'] ? Math.round(this.today.getMinutes() / this.wolfTransform.steps) * this.wolfTransform.steps :this.today.getMinutes();
    this.mins = this.mins === 60 ? 0 : this.mins;
    this.secs = this.today.getSeconds();
    this.dateTime = this.date + ' ' + this.time + this.ampm;
    this.loadYears(1950,2050);

    const hourFormat = this.isMilitaryTime ? 24 : 12;

    for (let index = 0; index < hourFormat; index++) {
      this.hours.push(index);
    }
    for (let index = 0; index < 60; index++) {
      if(this.wolfTransform['steps'] && (index % this.wolfTransform?.steps) === 0) {
        this.minutes.push(index);
        } else if(!this.wolfTransform['steps']) {
          this.minutes.push(index);
        }
    }
  }

  changeAmPm() {
    this.ampm = this.ampm === "am" ? "pm" : "am";
  }

  loadMonths(idx:any) {
    this.loadDays(this.months[idx]);
    return this.months[idx];
  }

  loadDays(month:any) {
     //Holds the number of days in the month
     this.days = [];
     let dayNum = 0;
     //Get the current year
     let year = this.yearVal;
 
     if(month === 'January' || month === 'March' || 
     month === 'May' || month === 'July' || month === 'August' 
     || month === 'October' || month === 'December') {
         dayNum = 31;
     } else if(month === 'April' || month === 'June' 
     || month === 'September' || month === 'November') {
         dayNum = 30;
     }else{
         //Check for a leap year
         if(new Date(year, 1, 29).getMonth() === 1){
             dayNum = 29;
            }else{
              dayNum = 28;
         }
     }
     //Insert the correct days into the day <select>
     for(let i = 1; i <= dayNum; i++){
        this.days.push(i);
     }
     if(this.previousDay>dayNum){
       this.dayVal = dayNum;
     }
  }

  loadYears(start:any, end:any){
    this.years.push(start);
     if(start < end){
         this.loadYears((start + 1), end);
     }
  }

  onMonthChange(newValue:any) {
    this.loadDays(newValue.target.value);
  }

  onYearChange() {
    this.loadDays(this.monthVal);
  }

  onDayChange() {
    this.previousDay = this.dayVal;    
  }

  openPicker() {
    this.isOpen = true;
  }

  closePicker() {
    this.isOpen = false;
  }

  addExtraDigit(val:any) {
    return val<10 ? 0+""+val : val;
  }

  sendDateTime() {
    this.date = this.yearVal+this.divider+this.addExtraDigit(this.months.indexOf(this.monthVal)+1)+this.divider+this.addExtraDigit(this.dayVal);
    this.time = this.addExtraDigit(this.hrs)+':'+this.addExtraDigit(this.mins)+(this.isSeconds ? `:${this.addExtraDigit(this.secs)}` : '')+(!this.isMilitaryTime ? `${this.ampm}` : '');
    this.setTime.emit(`${this.date} ${this.time}`);
    this.isOpen = false;
  }
}
