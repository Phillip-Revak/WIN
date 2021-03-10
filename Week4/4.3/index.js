// RESTful API's
// (Representative State Transfer)
// REST is organizing the system of transfering data and server requests from browsers, computers, and servers to send information and display results.
// Always a uniform interface -- Includes: Identification of resources, manipulation of resources through representations, self descriptive messages, hypermedia as the engine of application state.

// API (Application Programming Interface)
// Transfer of information between client and server.

// HTTP resource methods: GET, POST, PUT(replaces), PATCH(partial update), DELETE.

// // PRACTICE EXAMPLE
// REST -   Independent request to the server. Separate from the state of the client. 
// Ex: You go to a video game store. You could make an independent request for a certain video game, which would be stateless.

// If you want to buy a DLC that is dependent on you owning another game then that would be a stateful request.


// Distributed systems - Separate entities or computers that complete separate functions while communicating what they are doing to appear as one system.
// Ex: You are buying a video game. The video game developer is one entity to you. (Bethesda) But on the back end, there are multiple different teams and offices across the country that perform different functions and communicate to produce one final end product or system.


// API- The part of the server that takes, handles, and processes requests and returns all necessary information.
// Ex: The mailman is not the entire post office. He does not store the mail, but is the go between that handles the requests.

// Client - The user side of the application or system that send and takes requests for information or data from the server.
// Ex: the person sending mail from NC to NY. They interact with the server with requests.

// Server - The computer or network of computers that processes requests or informations for clients.
// Ex: The USPS. The mailman (API) takes in and delivers information. The rest of the USPS runs processes like taking in address and sorting that mail such that it goes to the correct end-client. Runs all backend processes.

// Cacheable - Information or requests that can be stored in a cache for future use to speed up requests. Some information may not be cachable.
// Ex: You go to a coffee shop every day and order a cappuccino. By the 10th time you are there, they will remember your order and have it ready more quickly.


// Representation- The API does not send the resource to you. It simply sends a representation. 
// Ex: Web based games like Runescape. You are not downloading or owning or processing the resource. You are simply pulling the information and representing it in your browser.

// Resource Methods- How the API tells which information it wants and how.
// Ex: When you use the USPS and tell it how to send your package or letter, where, when, etc.

// JSON:API Object
// (JavaScript Object Notation) - a lightweight data-interchange format.
// Json built on two structures. An collection of name/value pairs - objects. and an ordered list of values - an array.
// Even though it closely resembles javascript it can be used outside of javascript.
// To access data you have to chain together the required properties and array indexes. EX: superHeroes['members'][1]['powers'][2]
// // JsonObject {
//     people: ['julian', 'victor', 'wiynter', 'kate', 'victor'],
//     place: 'zoom',
//     number: 5,
//     why: 'WIN',
// }

// COMPOUND DOCUMENTS
// When an HTTP request is made a compound document would give you the primary resources you requested as well as secondary related resources.

// META INFORMATION
// a meta member can be used to include non-standard meta information.
// "meta": {
//     "copyright": "Copyright 2015 Example Corp.",
//     "authors": [
//       "Yehuda Katz",
//       "Steve Klabnik",
//       "Dan Gebhardt",
//       "Tyler Kellen"
//     ]
//   },

// LINKS 
// Used to represent links. Still presented like a JSON object. Each member of a links object is a link.
// "links": {
//   "self": "http://example.com/posts"
// }

// MEMBER NAMES
// Names of objects or members within those objects. 
// Must be case sensitive and contain only allowed characters.
        // ALLOWED CHARACTERS
        // a-z // A-Z // 0-9 // 
        // - // _ // " " // (these can't be the first or last letter)
            // RESERVED CHARACTERS
            // Pretty much all symbols besides the ones specified above as allowed. +, [], !, etc...

// DELETING RESOURCES
// An individual resource can be deleted by making a DELETE request to the resource's URL.
// responses: 202, 204, 200, 404.