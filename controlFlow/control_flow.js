let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not autheneticated";

console.log("Authentication Status: ", authenticationStatus)

let employeeType = "Enrolled Member";
let dietServ;

switch (employeeType) {
    case "Employee":
        dietServ = "Auth access to 'Dietary Services'";
        break;
    case "Enrolled Member":
        dietServ = "Auth access to 'Dietary Services' and one-on-one interaction with a dietician";
        break;
    case "Employee":
        dietServ = "Partial access to 'Dietary Services'";
        break;
    default:
        dietServ = "need to enroll or at least subscribe first to avail this facility";
}

console.log("Dietary Service access: ",dietServ);