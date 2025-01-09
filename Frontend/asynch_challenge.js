function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");  //get a list of users from the /users endpoint.

    if (!response.ok) {
      throw new Error("Response is not ok!");
    }
    const users = await response.json();

    const userData = users.map((user) => ({ //eturn an array of user names and their corresponding email addresses 
      name: user.name,
      email: user.email,
    }));

    await delay(2000);//Add a delay of 2 seconds before returning the result
    return userData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData().then((userlist)=>{
  console.log(userlist);
});