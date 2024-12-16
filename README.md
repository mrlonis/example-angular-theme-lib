# example-angular-theme-lib

## Table of Contents

- [example-angular-theme-lib](#example-angular-theme-lib)
  - [Table of Contents](#table-of-contents)
  - [Updating Angular](#updating-angular)
    - [Example](#example)
  - [Generating Material 3 Theme](#generating-material-3-theme)
    - [Example For This Project](#example-for-this-project)

## Updating Angular

To update Angular, run the following command replacing VERSION with the version you want to update to:

```shell
npm run ng -- update @angular/core@VERSION @angular/cli@VERSION @angular/material@VERSION angular-eslint@VERSION
```

### Example

```shell
npm run ng -- update @angular/core@19 @angular/cli@19 @angular/material@19 angular-eslint@19
```

## Generating Material 3 Theme

To generate an Angular Material 3 (M3) theme, you can use the Angular Material schematics:

```shell
ng generate @angular/material:m3-theme
```

### Example For This Project

```shell
npm run ng -- generate @angular/material:m3-theme
```
