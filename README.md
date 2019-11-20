# NewGradTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

# Build Requirements
---
* Node.js 5.0 or latest ([Download](https://nodejs.org/en/))
* Microsoft Visual Studio Code ([Download](https://code.visualstudio.com/))
Make sure all requirements are installed before attempting to setup a development environment.

After Node.js and NPM (which now comes with new versions of Node.js) are installed, run the following commands
to install the **Angular Command Line Interface** (CLI) globally:

```bash
npm install -g @angular/cli
```

### Client-side
Client-side source code is located under `src/app`.
From the project root run the following command to download and
install dependencies:

```bash
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Developing Locally
---

For ongoing development, use the following script in the project's root that starts the Angular CLI local server. 

```bash
npm run start
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Application Architecture

## Folder structure
Within the root client-side directory (src/app) there are Components, Services, Modules

### Components, Services, Modules and what they do

#### Components
Are the main building blocks of the application. They are in charge of binding together a **view** (html and css files), a **controller** (the logic of the application), and **services** (API calls). Here is an example of the important parts of a component file ():

```typescript
@Component({
    selector: 'app-images-list',
    templateUrl: './images-list.component.html',
    styleUrls: ['./images-list.component.css']
})


export class ImagesListComponent implements OnInit {
    /** constructor and methods are omitted **/
}
```
The above `@Component()` tells the compiler that the component class `ImagesListComponent` owns/provides data to the html file speicified in `templateURL` with the stylesheet defined in the `styleUrls` property. The `selector` property tells the compiler that anywhere it sees the tag `<app-images-list>` in another component's html file (a view), it should "inject" the component (the view and the logic behind the view).

#### Modules

A module is the file through which components, directives, and services are all bought together and bundled into a module which is then exported for packaging (Angular does the packaging for us). Here is the onle module that is present in the application:

```typescript
@NgModule({
    declarations: [
        AppComponent,
        /** every component is listed **/
    ],
    imports: [
        BrowserModule,
        /** Every Module from which we used a component from is listed **/
    ],
    providers: [AppService, ImageLocationData], // Every service goes here
    bootstrap: [AppComponent] 
}
export class AppModule { }
```
As you can see every component that is in the application is listed in the `declarations` property. Every time a new component is added, it should be added into the `declarations` array. Components are part of a modules so every time we add a component from different module, we need to add the module it comes from into the `imports` property array. All used service classes go into the `providers` array.

#### Service

A service class is a class whose main purpose is to provide REST endpoint services throughout the application. This is where all the endpoints are listed and where they are called from. An example of a service class with a method is shown below:

```typescript
@Injectable()
export class AppService {
    constructor(private httpClient: HttpClient){ }
    private baseURL = 'http://data.tmsapi.com/v1.1/programs/';
    getDetails(rootID: string): Observable<any>{
        const params1 = new HttpParams().set('api_key', 'kqtwdcapd2a5hth6aqw4h65f');
        return this.httpClient.get(this.baseURL.concat(rootID), {params: params1});
    }
}
```

The `@Injectable()` decorator tells the compiler that this class can be injected into a component using constructor dependency injection (will show an example of this down below). The `getDetails()` method returns an observable object that needs to be subscribed to in order to actually execute the request and retrieve the value.

#### Dependency Injection Example

```typescript
/** excerpt from ImagesListComponent class **/
 constructor(private service: AppService,
              private Il: ImageLocationData,
              private cdRef: ChangeDetectorRef) {
                this.images = Il.getImages();
}
```

Dependency Injection makes it easier for the developer to use Services and other features that Angular and Angular Material provide. It allows us to state what features and services we'll use in a particular component and then Angular does the hard work of instantiating and setting up the objects for us to use.
