
# Wolf Picker
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Description
Simple and **lightweight date time picker** for angular applications with **no dependencies.**

### A date picker for your React app.
- No dependencies needed.
- Pick days, months, years.
- Pick hours, minutes, seconds.
- Very easy to modify the date and time format .


### Tech Stack

**Client:** Angular, HTML5, SCSS, TS, JS.

## Getting started 

### Compatibility
Your project needs to use **Angular 13.1.0** or later. We will release wolf-picker for older version of Angular also .
| Angular Version     | Newest compatible wolf-picker version  |
| :------------ |   --------: |
| `>= 13.1.0`        |  latest |
| `< 13.1.0`         |  Coming Soon...|

 
### Installation

Add wolf-picker to your project by executing

```bash
  $ npm i wolf-picker
```
### Usage
Here's an example of basic usage:
> Import WolfPickerModule in app.module.ts
```js
import { AppComponent } from './app.component';
import { WolfPickerModule } from 'wolf-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WolfPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
```

### Options and Config

Use wolf-picker element in your html file along with wolfConfig object.

```html
  <wolf-picker [wolfTransform]="wolfConfig" (setDateTime)="getDateTime($event)"><wolf-picker>
```
Use wolfConfig object to access and modify the options.
```js
  wolfConfig = {
    "seconds": boolean,
    "isMilitaryTime": boolean,
    "steps": number,
    "disablePicker": string
  }
```
Use wolfConfig object to access and modify the options.

| Options     | Value      | Description  |
| :------------ |   :---:       | --------: |
| `seconds`        | `true, false`         |   User can enable and disable seconds input field. |
| `isMilitaryTime`         | `true, false`         | User can set true for 24 hours format and false for 12 hours format.
| `steps`         | `1,2,3,4,5....60`         | User can set the steps for minutes .
| `disablePicker`         | `"date","time"`         | User can disable any one picker.

Use getDateTime function to get the setDateTime event.
```js
  dateTime = "";
  getDateTime(event: Event) {
    this.dateTime = event;
  }
```
Based on your wolfConfig object setDateTime event brings an object of date and time.
```js
  {
    "date": {
        "year": 2022,
        "month": "04",
        "day": 19
    },
    "time": {
        "hour": "09",
        "minute": 55,
        "second": 36,
        "ampm": "pm"
    }
}
```

## User guide

Each input field behaves as drop down , user can click on input field and can scroll
to select the option. 


## License & Copyright

© Dikshyant Dash

Licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.


## Author

- [@Dikshyant Dash](www.linkedin.com/in/dikshyant-dash-a56655164)
