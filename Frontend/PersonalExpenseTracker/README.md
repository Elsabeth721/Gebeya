# Personal Expense Tracker

## React Challenge

### Project Overview
The **Personal Expense Tracker** is a React-based application designed to help users manage their monthly budget efficiently. Users can add, categorize, and view a summary of their expenses, making it easier to keep track of their spending habits.

### Core Features

#### 1. Add Expense
- **Form Fields:**
  - **Title:** Name of the expense (e.g., "Groceries").
  - **Amount:** Cost of the expense (e.g., 50).
  - **Category:** Choose from predefined categories (e.g., "Food", "Transport", "Entertainment").
  - **Date:** Select the date when the expense occurred.

#### 2. View Expenses
- Display a list of all expenses.
- Show key details for each expense:
  - Title
  - Amount
  - Category
  - Date

#### 3. Filter by Date
- Add a dropdown to filter expenses by year (e.g., 2024, 2023).
- Display the total amount spent for the selected year.

#### 4. Total Spending
- Calculate and display the total amount spent for the selected year.

### Stretch Goals (Optional)

#### 1. Bar Chart for Categories
- Visualize spending with a bar chart showing the total amount spent per category.
- **Libraries:** Use `Chart.js` or `recharts` for creating the bar chart.

#### 2. Dark Mode
- Implement a toggle switch to enable dark mode for a better user experience in low-light environments.

#### 3. Local Storage Integration
- Store expenses in `localStorage` to persist data even after refreshing the page.

### Tools and Technologies

#### 1. React State Management
- Use React's `useState` hook to manage form inputs and expense data.

#### 2. Styling
- Utilize Tailwind CSS or plain CSS for styling the application.

#### 3. Data Storage
- Start with a dummy array for initial development.
- Integrate `localStorage` to save and retrieve expense data.

### Sample User Story
- A user opens the app and adds expenses for groceries, transportation, and entertainment.
- They filter the expenses by the current year to view a summary.
- The app displays the total amount spent and a visual breakdown by category using a bar chart.

### How to Run the Project
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
2. **Install Dependencies:**
   ```bash
   cd expense-tracker
   npm install
3. **Start the Development Server:**
   ```bash
   npm start
