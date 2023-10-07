# Holdings

`Holdings` is the submission for an interview coding assignment.

## Design
Local `json` is loaded via an http `GET` with a random delay into an `RxJS` observable.  The response observable is then converted to an array, mapped to an `interface` which enforces conversion of the numeric `string` fields to `number` types for sorting, and from which the most recent (greatest) `EffectiveDate` is found.  The most recent date is then used to filter the processed response into two subsets: the most recent holdings, and everything else.

Additional features:
- Each table has its own filter and pagination
- There is a no-results message for filtering
- The UI is keyboard accessible via tab/shift-tab and arrow keys

The project uses two main components: `holdings-list`, which is the main view and contains the Material tabbed container, and `data-table`, which houses the Material tables.

Although not used, the Angular http-interceptor pattern could have been used to enforce the desired delay simulation; the `RxJS` delay operator was used instead for brevity and simplicity.

Normally, we would add internationalization, however that is not added here.

Normally, such functionality as this would be guarded by user authenication; no attempt was made to implement that here.

Angular Material components are used: `mat-table` tables for each view, including the `mat-paginator`, and the tabbed container to conditionally display either of the two results set tables.  Additional Material components are used for a loading indicator, and a text form/input for filtering the table contents.

The Angular Material table used was configured to use supported sorting for all columns, and pagination.  Filtering is not inherently supported by the Material table, however implementation of a filter on the `datasource` was not difficult.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Clone to download. Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. Angular 16 will be required.

## Remote server

Run the app from GitHub Pages [here](https://brianlbrinker.github.io/Holdings/).


