#!/usr/bin/env node
import * as readline from 'readline';
function prompt(question) {
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        r1.question(question, (answer) => {
            r1.close();
            resolve(answer);
        });
    });
}
function calculate(num1, num2, operator) {
    let result = "";
    if (isNaN(num1) || isNaN(num2)) {
        result += 'Please enter number as operands';
        return result;
    }
    else {
        if (operator == '+') {
            result += "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2);
            return result;
        }
        else if (operator == '-') {
            result += "The difference of " + num1 + " and " + num2 + " is " + (num1 - num2);
            return result;
        }
        else if (operator == '*') {
            result += "The product of " + num1 + " and " + num2 + " is " + (num1 * num2);
            return result;
        }
        else if (operator == '/') {
            result += "The division of " + num1 + " and " + num2 + " is " + (num1 / num2);
            return result;
        }
        else if (operator == '%') {
            result += "The remainder of " + num1 + " % " + num2 + " is " + (num1 % num2);
            return result;
        }
        else {
            result += "This calculator is unable to solve " + num1 + operator + num2;
            return result;
        }
    }
}
async function runCalculator() {
    const num1 = Number(await prompt('Enter the first number '));
    const num2 = Number(await prompt('Enter the second number '));
    const operator = await prompt('Enter the operator form +,-,*,/,%:\n');
    const Result = calculate(num1, num2, operator);
    console.log(Result);
}
runCalculator();
