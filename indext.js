// 1. Display a message indicating the user has been chosen to open a vault.
// 2. Create three variables to hold the vault combination numbers using      different arithmetic operations.
// 3. Use addition (+), multiplication (*), and subtraction (-) to achieve the combination 10 - 40 - 39.
// 4. Display the message and combination in an alert popup.

// STEPS TO COMPLETE

// step 1:  Message for the user
const message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// Step 2: Assign three variables with unique arithmetic operations to match the combination
const code1 = 5 + 5;        // Using addition to get 10
const code2 = 8 * 5;        // Using multiplication to get 40
const code3 = 50 - 11;      // Using subtraction to get 39

// Step 3: Display the message and the combination in an alert popup
alert(`${message} \n${code1} - ${code2} - ${code3}`);
console.log(`${message} \n${code1} - ${code2} - ${code3}`);