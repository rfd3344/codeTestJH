/**
 *
 * __Welcome to our coding challenge!__
 * we understand that a test environment is superficial and stressful
 * don't worry if you do something silly
 *
 * __We have 8 questions__
 * answer each question and demonstrate correct results to the interviewer
 * you will see comments with expected results
 *
 * __There is time pressure__
 * certain questions take up less time then others
 * if you get stuck on a question just move on to the next question and come back later
 * don't worry about edge cases, just follow the happy path
 * if you have time at the end you can discuss edge cases and complexity
 * */

/**
 * question 1
 * write a function that when given a list of records
 * returns the currency of the last record in that array
 * */
const records = [
  { currency: "BTC", quantity: 1 },
  { currency: "ETH", quantity: 9 },
  { currency: "ICP", quantity: 11000 },
]; // => "ICP"

/**
 * question 2
 * write a function that given a list of integer numbers
 * returns the total value of multiplying all those numbers together
 * */
const input = [1, 2, 3, 2]; // => 12

/**
 * question 3
 * write a function that given a string with random characters
 * find the character that is repeated the second most number of times
 * return this character along with the total count of this character
 * */
const ranStr = "aaaccbanantttdf"; // => ["t", 3]


/**
 * question 4
 * write a function that given a list
 * return the first string that is out of order
 * */
const unorderedList = ["apple", "banana", "cat", "elephant", "dog", "fish"]; // => "dog"

/**
 * question 5
 * write a named function called suffix
 * that when given a string
 * returns a function that adds this string as a suffix e.g.
 * suffix("ing")("feel") => "feeling"
 * */
const suffixStr = "ing";
const prefixStr = "feel";

/**
 * question 6
 * write a function that takes an array and returns the total of all numbers in that array
 * and any children arrays
 * */
const exampleOne = [1, 2, 3]; // => 6
const exampleTw0 = [[1], 2, [3, 5, [4, [5]]]]; // => 20

/**
 * question 7
 * we have an array generated from parsing a CSV
 * create a function that formats this array to
 * {price: number, currency: string}[]
 * */
const sampleData = [
  "$10, 000; ETH ;",
  "$100; BTC\n",
  "$11000; BTC;",
  "$2,000,000;NEX;",
  "2400;USDT ",
  "200;USDT",
]; // => e.g. first element is {price: 10000, currency: "ETH"}


/**
 * question 8
 * we have a bot that trades BTC
 * the bot is implemented as an event emitter
 * that emits the events:
 * - 'buy': increases the quantity by the given data
 * - 'sell': decreases the quantity by the given data
 * - 'hold': does nothing
 * - 'error': signifies when an error has occured with the trading bot
 * - 'end': signifies that the trading bot has finished trading
 *
 * write a function that returns an ES6 Promise
 * when the bot has ended the promise should resolve to the final quantity of the position being traded
 * */
const EventEmitter = require("events");
const bot = new EventEmitter();

async function getFinalQty() {} // await getFinalQty() should resolve to 13

bot.emit("buy", 2);
bot.emit("hold");
bot.emit("hold");
bot.emit("buy", 5);
bot.emit("hold");
bot.emit("sell", 3);
bot.emit("buy", 9);
bot.emit("end");

