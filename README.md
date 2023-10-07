# Holdings

`Holdings` is the submission for an interview coding assignment.

## Design
Local `json` is loaded via an http `GET` with a random delay into an `RxJS` observable.  The response observable is then converted to an array, mapped to an `interface` which converts the numeric `string` fields to `number` types for sorting, and from which the most recent (greatest) `EffectiveDate` is found.  The most recent date is then used to filter the processed response into two subsets: the most recent holdings, and everything else.

Additional features:
- Each table has its own filter
- The UI is keyboard accessible via tab/shift-tab and arrow keys
- There is a no-results message for filtering

The project uses two main components: `holdings-list`, which is the main view, and `data-table`, which houses the Material table configuration.  There is also a service, `holdings`, which gets the local `json`.

Angular Material components are used: tables for each view, including the `mat-paginator`, and a tabbed container to conditionally display either of the two tables.  Additional Material components are used for a loading indicator, and a text input for filtering the table contents.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


