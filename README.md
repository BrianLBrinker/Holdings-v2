# Holdings

`Holdings` is the submission for an interview coding assignment.

## Design
Local `json` is loaded via http with a random delay into an `RxJS` observable.  The response observable is then converted to an array, mapped to an `interface` which converts the numeric `string` fields to `number` types for sorting, and from which the most recent (greatest) `EffectiveDate` is found.  The most recent date is then used to filter the processed response into two subsets: the most recent holdings, and everything else.

Angular Material components are used: tables for each view, including the `mat-paginator`, and a tabbed container to conditionally display either of the two tables.  Additional Material components are used for a loading indicator, and a text input for filtering the table contents.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


