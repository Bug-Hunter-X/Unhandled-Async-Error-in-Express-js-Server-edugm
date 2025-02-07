# Unhandled Async Error in Express.js Server

This repository demonstrates a common error in Express.js applications: improper handling of asynchronous errors within request handlers.  The server crashes without proper logging when an asynchronous operation fails.

## Bug Description

The `bug.js` file showcases an Express.js server with an asynchronous operation (`someAsyncOperation`) that throws an error.  The current error handling is insufficient; it only logs the error to the console, causing the server to crash and not providing a graceful degradation mechanism.

## Solution

The `bugSolution.js` file demonstrates a robust solution by implementing proper error handling in the asynchronous operation's catch block, sending an appropriate error response to the client.