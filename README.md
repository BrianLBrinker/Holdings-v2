# Holdings

`Holdings` is the submission for an interview coding assignment.

## Design
Local `json` is loaded via http into an `RxJS` observable.  The response observable is then converted to an array, from which the most recent (greatest) `EffectiveDate` is found.  The most recent date is then used to filter the response into two subsets containing the most recent holdings, and everything else.

Angular Material components are used: tables for each view, including the `mat-paginator`, and a tabbed container to conditionally display either of the two tables.  Additional Material components are used for a loading indicator, and a text input for filtering the table contents.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
