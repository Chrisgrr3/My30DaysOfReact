// Exercises 1: What is React?
//     1. What is React?
        // React is a JavaScript library used for creating interactive UIs.

//     2. What is a library?
        // A library, generally speaking, is a collection of prewritten code snippets that can be used
        // and reused to perform common JavaScript functions. This is similar to libraries in C++.

//     3. What is a single page application?
        // A single page application is an application that uses only one HTML file to render all components of a web application.
        // This allows users to use websites without loading whole new pages from the server at the expense of SEO, more effort
        // required to maintain state, implementing navigation, and doing meaningful performance monitoring.

//     4. What is a component ?
        // A component is an independent and reusable bit of code. They serve the same purpose as JavaScript functions, but work in
        // isolation and return HTML. Each component defines how a part of a web application should be displayed.

//     5. What is the latest version of React?
        // The latest version of React is 18.2.0

//     6. What is DOM?
        // DOM is the Domain Object Model and is a programming interface for web documents. It represents the page so that programs 
        // can change the document structure, style, and content.

//     7. What is React Virtual DOM?
        // The React virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory
        // and is synced with the "real" DOM by a library such as ReactDOM. This is called reconciliation.

//     8. What does a web application or a website(composed of) have?
        // A web application has HTML elements, CSS styling, some sort of interactivity through JavaScript (typically).


// Exercises 2: Why React?
//     1. Why did you chose to use react?
        // I chose to learn React because it's very popular and there are a lot of hiring managers looking for developers that know React. 

//     2. What measures do you use to know popularity ?
        // You can use Github forks, stars, and watchers to gauge the popularity of a technology.

//     3. What is more popular, React or Vue ?
        // React is more popular than Vue.


// Exercises 3: JSX
//     1. What is an HTML element?
        // An HTML element is part of the HTML coding language. It is defined by a start tag, attributes, content, and an ending tag.

//     2. How to write a self closing HTML element?
        // <br/> <img/>
    
//     3. What is an HTML attribute? Write some of them
        // An HTML attribute provides additional information about an HTML element. They are defined in the starting tag of an element.

//     4. What is JSX?
        // JSX stands for JavaScript XML and allows us to write HTML elements with JavaScript code.

//     5. What is babel?
        // Babel is library that transpiles JSX into pure JavaScript
    
//     6. What is a transpiler?
        // A transpiler is a program that translates a source code from a language to another at the same level of abstraction.


// Exercises 4: JSX Elements
//     1. What is a JSX element?
        // A JSX element has a JavaScript and HTML like syntax and is used to create HTML code through JavaScript. 

//     2. Write your name in a JSX element and store it in a name variable
        // const name = (
        //     <div>
        //         <h1>Chris</h1>
        //     </div>
        // )
    
//     3. Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
        // const user = (
        //     <div>
        //         <h1>Christopher Guerrero</h1>
        //         <p>United States</p>
        //         <p>Student</p>
        //         <p>Male</p>
        //         <p>chris@chris.com</p>
        //         <p>123-456-7890</p>
        //     </div>
        // )


//     4. Write a footer JSX element
        // const footer = (
        //     <div>
        //         <h1>How does a web page kick a soccer ball?</h1>
        //         <p>Using its footer.</p>
        //     </div>
        // )

// Exercises 5: Inline Style
//     1. Create a style object for the main JSX
        const mainStyle = {
            fontSize: '10px'
        }

//     2. Create a style object for the footer and app JSX
    
//     3. Add more styles to the JSX elements


// Exercises 6: Internal Styles
//     1. Apply different styles to your JSX elements
    

// Exercise 7: Inject data to JSX
//     1. Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)