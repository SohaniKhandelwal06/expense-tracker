 Expense Tracker

A simple and interactive **Expense Tracker** built with **React, TypeScript, and CSS**.

The application allows users to add, edit, delete, and manage their expenses while organizing them into different categories.

 Features

 Add Expenses

Users can add a new expense by providing:

* Expense title
* Amount
* Category
* Date

### ✏️ Edit Expenses

Existing expenses can be edited using the **Edit** button.

When editing an expense:

* The existing information is automatically loaded into the form.
* The user can modify the details.
* Clicking **Update Expense** saves the changes.
* A **Cancel** button allows the user to exit edit mode.

### 🗑️ Delete Expenses

Users can delete an expense using the **Delete** button.

### 📂 Expense Categories

Expenses can be organized into different categories:

*  Food
*  Transport
*  Shopping
*  Bills
*  Entertainment
*  Others

### ✅ Form Validation

The application checks that the required expense details are filled in before submitting the form.

If required information is missing, the user receives a message asking them to fill in all the details.

### 📋 Expense List

All added expenses are displayed in an expense list with:

* Expense title
* Category
* Date
* Amount
* Edit button
* Delete button

If there are no expenses, the application displays:

> No expenses found.

## 🛠️ Technologies Used

* **React**
* **TypeScript**
* **JavaScript**
* **CSS**
* **Vite**
* **HTML**

## 🧠 React Concepts Used

This project helped me practice important React concepts such as:

* Functional components
* `useState`
* `useEffect`
* Props
* Event handling
* Conditional rendering
* List rendering with `.map()`
* Passing functions through props
* Controlled form inputs
* Component communication
* Form submission
* State management

## 📁 Components

The application is divided into reusable React components.

### `ExpenseForm`

Responsible for:

* Adding expenses
* Editing expenses
* Updating expenses
* Form validation
* Selecting expense categories
* Selecting dates
* Cancelling edit mode

### `ExpenseList`

Responsible for:

* Displaying expenses
* Showing expense details
* Editing an expense
* Deleting an expense
* Displaying a message when no expenses exist

## 🔄 Application Flow

```text
                    Expense Tracker
                           │
             ┌─────────────┴─────────────┐
             │                           │
        ExpenseForm                 ExpenseList
             │                           │
       ┌─────┴─────┐             ┌───────┴───────┐
       │           │             │               │
      Add         Edit         Display         Actions
       │           │             │               │
       │           │             │          ┌────┴────┐
       │           │             │          │         │
       │         Update          │        Edit      Delete
       │           │             │
       └───────────┴─────────────┘
```

## 📂 Project Structure

```text
expense-tracker/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   └── ExpenseList.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> Update the component filenames above if your project uses `.tsx` or a different folder structure.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SohaniKhandelwal06/expense-tracker.git
```

### 2. Open the project

```bash
cd expense-tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 📚 What I Learned

While building this project, I practiced:

* Creating React components
* Managing state with `useState`
* Using `useEffect`
* Passing data through props
* Passing functions from parent to child components
* Handling form inputs
* Handling form submission
* Rendering lists with `.map()`
* Using conditional rendering
* Creating edit and delete functionality
* Working with JavaScript objects and arrays
* Building a reusable and interactive UI

## 🔮 Future Improvements

Possible future improvements include:

* Search expenses
* Filter by category
* Sort expenses by date or amount
* Monthly expense summaries
* Expense charts and graphs
* Local storage or database support
* Dark mode
* User authentication

## 👩‍💻 Author

**Sohani Khandelwal**

GitHub:
https://github.com/SohaniKhandelwal06

## 📄 License

This project was created for learning and development purposes.
