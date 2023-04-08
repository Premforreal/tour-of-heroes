? symbol denotes an optional property in TypeScript.
In the context of an Angular component, an optional property with the ? symbol can be used to indicate that the property may not be available when the component is instantiated, and that the component should handle this case gracefully.

-------------------------------------------------------------------------------------------------------------------

In Angular, {{hero.name | uppercase}} is an example 
  of an interpolation expression that is used to display 
  the value of the hero.name property in uppercase letters.

-------------------------------------------------------------------------------------------------------------------

@Input is used to define a property that can be passed into a component from its parent component. This allows the parent component to control the behavior and appearance of the child component. 

@Output is used to define an event that a component can emit to its parent component. This allows the child component to communicate with its parent and notify it of changes or events.

--------------------------------------------------------------------------------------------------------------------

getHeroes(): Observable<HeroInterface[]> is a method signature that defines a function named getHeroes that 
returns an Observable of an array of objects that conform to the HeroInterface interface.

In Angular, an Observable is a powerful tool for handling asynchronous data streams. An Observable is a representation of a stream of data that can change over time, and can be observed by other parts of the application.

Observables are similar to Promises in that they are used for handling asynchronous operations, but they have some important differences. Unlike Promises, which can only emit a single value and then complete, Observables can emit multiple values over time, and can continue to emit values indefinitely.

Observables are often used in Angular to manage data streams that come from various sources, such as user input, HTTP requests, or data from a WebSocket. By using Observables, we can handle these data streams in a reactive and composable way, allowing us to write more efficient and flexible code.

Some of the key features of Observables in Angular include:

Lazy evaluation: Observables are evaluated only when they are subscribed to. This allows for more efficient use of resources, as the application only needs to process the data when it is needed.
Error handling: Observables can handle errors that occur during the stream of data, allowing us to gracefully handle errors in our application.
Composition: Observables can be combined and transformed in a variety of ways, allowing us to create more complex data streams from simpler ones.
In summary, an Observable in Angular is a powerful tool for handling asynchronous data streams, allowing us to write more efficient and flexible code.


---------------------------------------------------------------------------------------------------------------------
[class.selected]="hero === selectedHero"
This binding syntax uses the square brackets [] to bind a property of an HTML element to a component property, and in this case, the property being bound is the class property.