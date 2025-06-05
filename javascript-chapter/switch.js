// switch statement is used when u want to compare one value against many possible cases

/*syntax
switch (expression) {
    case value1:    
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    // Add more cases as needed
    default:
        // code to be executed if expression doesn't match any case
        break;
} */

        let day = 3; // Example value for day
        switch (day) {
            case 1: 
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("Invalid day");
                break;
        }  
        
        
        let month = 10; // Example value for month
        switch (month) {
            case 1: 
                console.log("january");
                break;
            case 2:
                console.log("February");
                break;
            case 3:
                console.log("March");
                break;
            case 4:
                console.log("April");
                break;
            case 5:
                console.log("May");
                break;
            case 6:
                console.log("June");
                break;
            case 7:
                console.log("July");
                break;
                case 8: 
                console.log("August");
                break;
            case 9:
                console.log("september");
                break;
            case 10:
                console.log("october");               
                break;
            case 11:
                console.log("November");
                break;
            case 12:
                console.log("december");
                break;
            default:
                console.log("Invalid month");
                break;
        }  