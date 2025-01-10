## What is node-boot?
Node Boot is a framework for REST API management and it is similar to Spring boot. Node Boot is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript and combines elements of OOP (Object Oriented Programming). 

Node boot makes use of robust HTTP Server frameworks is Express. This gives developers the freedom to use the third-party modules which are available for the platform.

## What can I do with it?
You can simplify make your Node.JS web application with Typescript by using Dependency Injection, and RESTful apis throughout simple annotations.

## What about this library?
This library is enable the logger feature for the Node Boot framework only. It is easy to use like Spring logger. Developer need to just import the class and use the method without create the Logger object.

## How do I use it?
1. First of all you need install the lib in Node Boot application. 
2. Now you need to import the logger dependency in Node Boot application.
3. Use the logger class like below.

```typescript

import { Logger } from 'node-boot-logger';
export class Sample {
    private get(): any {
        Logger.Info("Hello world log");
        Logger.Error("Hello world log");
        Logger.Warning("Hello world log");
        Logger.Important("Hello world log");
    }
}

```

## Consulting
With official support, you can get expert help straight from Node Boot core team. We provide dedicated technical and team augmentation.

## Support
Node Boot is an MIT-licensed open source project. It can grow thanks to the support from the amazing team members.

<!-- ## Stay in touch

* Author - [<a href="https://codequality.us" target="_blank">Codequality Technologies</a>] -->

## License

Node Boot is MIT licensed.