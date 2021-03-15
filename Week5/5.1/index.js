// JS PROMISES AND ASYNC/AWAIT
// A promise is a placeholder for a value not necessarily known when the promise is created.
// Pending, fulfilled, rejected.
// promise.prototype.then() promise.prototype.catch()

// Promises - if/else statement. It is generally a conditional statement set up so that if it is fulfilled something will happen, but if it isn't then the process prepared will not happen. Similiar to any transaction, if you give me 100 then you get this service, but if you don't give the money then no service.

// const myPromise = 
//   (new Promise(myExecutorFunc))
//   .then(handleFulfilledA,handleRejectedA)
//   .then(handleFulfilledB,handleRejectedB)
//   .then(handleFulfilledC,handleRejectedC);

// // or, perhaps better ...

// const myPromise =
//   (new Promise(myExecutorFunc))
//   .then(handleFulfilledA)
//   .then(handleFulfilledB)
//   .then(handleFulfilledC)
//   .catch(handleRejectedAny);

//   const myPromise = 
//     (new Promise(myFunction))
//     .then(handleFulfilledA)
//     .then(handleFulfilledB)
//     .catch(handleRejectedAny);

// // Async, Await, Fetch
// // response.text(), response.json()

// const myPromise = 
//   (new Promise(myExecutorFunc))
//   .then(handleFulfilledA,handleRejectedA)
//   .then(handleFulfilledB,handleRejectedB)
//   .then(handleFulfilledC,handleRejectedC);

// // or, perhaps better ...

// fetch('https://javascript.info/article/promise-chaining/user.json')
//   // Load it as json
//   .then(response => {
//     console.log('response from user api: '+ response);
//       return response.json()
//     })
//   // Make a request to GitHub
//   .then(user =>
//       fetch(`https://api.github.com/users/${user.name}`)
//   )
//   // Load the response as json
//   .then(response => response.json())
//   // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
//   .then(githubUser => {
//       console.log(githubUser);
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
// }).catch(err => {console.log(response.status)});

// async function loadJson(url) {
//     let response = await fetch(url)
//     let status = await response.status();
//     let json = await status.json();


// }

// async function loadJson(url) {
//     let response = await fetch(url)
//     .then(response => response.json());
//     .catch(err => console.log(response.status));
// }

// What does 'throw' word do?

// FIRST HOMEWORK
function getRandomNumber() {
    let num = new Promise((resolve, reject) => {
        setTimeout(() => resolve(Math.random() * 10), 500)
    });
    return num;
}

async function callIt() {
    // let (variableName) = callAboveFunction;
    let numberFunc = await getRandomNumber();
    console.log(numberFunc);
}

callIt();

// SECOND HOMEWORK
async function city(cityName) {
    let response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
    .then((response) => response.json())
    .then((result) => {
        console.log(result.longt);
        console.log(result.latt);
    })
    .catch((error) => console.log("error", error));

}

city("baltimore");