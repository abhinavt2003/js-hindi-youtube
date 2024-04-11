//Switch control flow
// switch(key){          //Syntax
//     case value:

//         break;
//     default:

//             break;
// }

const month= 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break; //Agr ye break nhi lgae to jha condition shi ho jaaye wha se niche tk ka saara case execute kr dega except default case
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("Not a valid month");
        break;
}

