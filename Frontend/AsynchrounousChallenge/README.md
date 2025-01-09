# JavaScript Asynchronous Function Challenge

## Challenge: Fetch, Process, and Display Data

### Task:
Create an asynchronous function that performs the following steps:

1. **Fetch Data**:
   - Use the `fetch` function to retrieve data from the JSONPlaceholder API.
   - Specifically, get a list of users from the `/users` endpoint.

2. **Process Data**:
   - Extract and return an array of user names and their corresponding email addresses in the following format:
     ```javascript
     [
       { name: "Leanne Graham", email: "Sincere@april.biz" },
       { name: "Ervin Howell", email: "Shanna@melissa.tv" },
       ...
     ]
     ```

3. **Simulate Loading State**:
   - Add a delay of 2 seconds before returning the result to simulate a loading state.

4. **Display Result**:
   - Call this function and log the processed data to the console.

### Requirements:
- Use `async` and `await` for handling asynchronous operations.
- Use `setTimeout` to simulate the delay.
- Handle potential errors using a `try-catch` block and log an error message if something goes wrong.

### Implementation:

#### Code:
```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");

    if (!response.ok) {
      throw new Error("Response is not ok!");
    }

    const users = await response.json();

    const userData = users.map((user) => ({
      name: user.name,
      email: user.email,
    }));

    await delay(2000); // Simulate a delay of 2 seconds
    return userData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call fetchData and log the result
fetchData().then((data) => {
  console.log(data);
});
```
### Instructions to Run the Code:
1. **Save the Code**:
- Save the provided JavaScript code to a file, e.g., asynchronousChallenge.js.
2. **Open a Terminal**:
- Open a terminal or command prompt.
3. **Navigate to the Directory**:
- Use cd (change directory) to navigate to the directory where the file is saved. For example:
```
cd path/to/your/directory
```
4. **Run the File Using Node.js**:
- Execute the JavaScript file using Node.js by running:
```
node asynchronousChallenge.js
```
### Expected output:
![Terminal output](https://github.com/Elsabeth721/Gebeya/blob/main/Frontend/AsynchrounousChallenge/Screenshot%202025-01-09%20075007.png)
