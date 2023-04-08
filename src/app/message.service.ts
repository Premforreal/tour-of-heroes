import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

/*
    This is an Angular service named MessageService. 
    It is decorated with @Injectable, which means it can be injected 
    as a dependency into other components or services.

    It has an array messages that holds a list of strings. 
    The add() method is used to add a new message to the array, 
    and the clear() method is used to clear the array.

    This service is often used to display messages or notifications to the user. 
    When a component needs to display a message, it can inject this service and 
    call the add() method to add the message to the array. 
    The component can then use the array to display the messages to the user.

    For example, if we have a component that needs to display an error message, 
    we could inject the MessageService and call the add() method with the error 
    message. Then, we could display the error message to the user by iterating 
    over the messages array in the template.      
*/