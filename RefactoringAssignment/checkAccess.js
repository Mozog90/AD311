function checkAccess(loggedIn) {
    // accessLevel changes based on conditions below, so let makes sense here
    let accessLevel;

    // userRole never gets reassigned in this function, so const is the safest choice
    // it’s undefined for now, but that’s still fine since it doesn’t change
    const userRole = undefined;

    if (loggedIn) {
        // message is only used inside this block and never reassigned
        // using const keeps it scoped and avoids accidental reuse
        const message = "User is logged in.";
        console.log(message);

        if (userRole === "admin") {
            accessLevel = "full";
        } else {
            accessLevel = "limited";
        }
    } else {
        // this is a different block, so this message is safely scoped here
        const message = "User not logged in.";
        console.log(message);

        accessLevel = "none";
    }

    return accessLevel;
}

for (let i = 0; i < 3; i++) {
    console.log("Attempt", i);

    // loggedIn changes each loop iteration, so let is appropriate
    let loggedIn = Math.random() >= 0.5;

    // storing the result avoids calling the function multiple times
    const result = checkAccess(loggedIn);
    console.log("Access Level:", result);
}
