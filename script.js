const promisOne = new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("Hii, from first Promis");
        resolve()
    }, 1000)

});

promisOne.then(function () {
    console.log("one consumed!")
});


// ----------------------------------------------

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Hii, from Second promis")
        resolve()
    }, 2000)
}).then(function () {
    console.log("2nd promis consumed!")
})

// -------------------------------------------

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, I AM Resolve using short");
    }, 2000);
}).then((message) => {
    console.log(message)
});


// -----------------------------------------------

new Promise((resolve, reject) => {
    let isResolved = false;
    setTimeout(() => {
        if (isResolved) {
            resolve("Done")
        } else {
            reject("Not Working")
        }
    }, 5000)
}).then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.log(msg)
})

// --------------------------------------------

const anotherpromis = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ userId: "01", userName: "Gaurav Sah", emailId: "gauravssah01@gmail.com" })
    }, 1000);
});

anotherpromis.then(function (user) {
    console.log(user)
});


// -------------------------------------------

new Promise((resolve, reject) => {
    setTimeout(() => {
        let resolved = true;
        if (resolved) {
            resolve({ userName: "Gaurav", id: "01" })
        } else {
            reject("Error: Something going Wrong")
        }
    }, 1000);
}).then((user) => {
    console.log(user);
    return user.userName;
}).then((myuserName) => {
    console.log(`MyuserName: ${myuserName}`);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Work Done!");
})



// ------------------------------------------------

const promisfive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let resolved = true;
        if (resolved) {
            resolve({ userName: "js", id: "0123" });
        } else {
            reject("Error: JS going Wrong");
        }
    }, 1000);
});

async function consumePromisFive() {
    try {
        const responced = await promisfive;
        console.log(responced);
    } catch (error) {
        console.log(error);
    }
};

consumePromisFive();

// -------------------------------------------
// fetch


// --------------------------------------------

async function getAllusers() {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(responce);  // This is Not Good Way.
};

getAllusers();


// -----------------------------------------

async function getAllusers() {
    try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(responce);
        const data = await responce.json();
        console.log(data);
        console.log(data[2]);
    } catch (error) {
        console.log("Error:", error);
    }
};

getAllusers();


// ----------------------------------
// Doing the same work using .then .catch

fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data[1]);
    })
    .catch((err) => {
        console.log(err);
    });



// -------------------------------------

fetch("https://api.github.com/users/gauravssah")
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.url);
    })
    .catch((err) => {
        console.log(err);
    });

// -------------------------------------------

