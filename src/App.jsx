import "./App.css"
import React, { useState, useEffect } from "react"
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"

function App() {
  // =========================
  // STATE
  // =========================

  const [expenses, setExpenses] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const [editingExpense, setEditingExpense] = useState(null)

  const [searchItem, setSearchItem] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDate, setSelectedDate] = useState("")


  // =========================
  // LOAD EXPENSES
  // =========================

  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses")

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses))
    }

    setIsLoaded(true)
  }, [])


  // =========================
  // SAVE EXPENSES
  // =========================

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
      )
    }
  }, [expenses, isLoaded])


  // =========================
  // ADD EXPENSE
  // =========================

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      expense
    ])
  }


  // =========================
  // DELETE EXPENSE
  // =========================

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter(
        (expense) => expense.id !== id
      )
    )
  }


  // =========================
  // EDIT EXPENSE
  // =========================

  const editExpense = (expense) => {
    setEditingExpense(expense)
  }


  // =========================
  // UPDATE EXPENSE
  // =========================

  const updateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id
          ? updatedExpense
          : expense
      )
    )

    setEditingExpense(null)
  }


  // =========================
  // CANCEL EDIT
  // =========================

  const cancelEdit = () => {
    setEditingExpense(null)
  }


  // =========================
  // DASHBOARD CALCULATIONS
  // =========================

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  )

  const expenseCount = expenses.length

  const highestExpense =
    expenses.length > 0
      ? Math.max(
          ...expenses.map(
            (expense) => expense.amount
          )
        )
      : 0

  const averageExpense =
    expenses.length > 0
      ? totalExpenses / expenses.length
      : 0


  // =========================
  // SEARCH + FILTER
  // =========================

  const filteredExpenses = expenses.filter((expense) => {

    const matchesSearch = expense.title
      .toLowerCase()
      .includes(searchItem.toLowerCase())

    const matchesCategory =
      selectedCategory === "all" ||
      expense.category === selectedCategory

    const matchesDate =
      selectedDate === "" ||
      expense.date === selectedDate

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDate
    )
  })


  // =========================
  // CATEGORY TOTALS
  // =========================

  const categoryTotals = expenses.reduce(
    (totals, expense) => {

      if (!totals[expense.category]) {
        totals[expense.category] = 0
      }

      totals[expense.category] += expense.amount

      return totals

    },
    {}
  )


  // =========================
  // UI
  // =========================

  return (
    <div className="app">

      <h1>Expense Tracker</h1>

      <p>
        Now we can track our Expenses easily
      </p>


      {/* DASHBOARD */}

      <div className="dashboard">

        <div className="stat-card">
          <h3>Total Expenses</h3>
          <p>₹{totalExpenses}</p>
        </div>

        <div className="stat-card">
          <h3>Number of Expenses</h3>
          <p>{expenseCount}</p>
        </div>

        <div className="stat-card">
          <h3>Highest Expense</h3>
          <p>₹{highestExpense}</p>
        </div>

        <div className="stat-card">
          <h3>Average Expense</h3>
          <p>₹{averageExpense.toFixed(2)}</p>
        </div>

      </div>


      {/* CATEGORY SUMMARY */}

      <div className="category-summary">

        <h2>Spending by Category</h2>

        <div className="category-grid">

          <div className="category-card">
            <h3>Food</h3>
            <p>₹{categoryTotals.food || 0}</p>
          </div>

          <div className="category-card">
            <h3>Transport</h3>
            <p>₹{categoryTotals.transport || 0}</p>
          </div>

          <div className="category-card">
            <h3>Shopping</h3>
            <p>₹{categoryTotals.shopping || 0}</p>
          </div>

          <div className="category-card">
            <h3>Bills</h3>
            <p>₹{categoryTotals.bills || 0}</p>
          </div>

          <div className="category-card">
            <h3>Entertainment</h3>
            <p>₹{categoryTotals.entertainment || 0}</p>
          </div>

          <div className="category-card">
            <h3>Others</h3>
            <p>₹{categoryTotals.others || 0}</p>
          </div>

        </div>

      </div>


      {/* SEARCH AND FILTER */}

      <div className="search-box">

        <input
          type="text"
          placeholder="Search expenses..."
          value={searchItem}
          onChange={(e) =>
            setSearchItem(e.target.value)
          }
        />

        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
        >
          <option value="all">
            All Categories
          </option>

          <option value="food">
            Food
          </option>

          <option value="transport">
            Transport
          </option>

          <option value="shopping">
            Shopping
          </option>

          <option value="bills">
            Bills
          </option>

          <option value="entertainment">
            Entertainment
          </option>

          <option value="others">
            Others
          </option>

        </select>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) =>
            setSelectedDate(e.target.value)
          }
        />

      </div>


      {/* EXPENSE FORM */}

      <ExpenseForm
        onAddExpense={addExpense}
        onUpdateExpense={updateExpense}
        editingExpense={editingExpense}
        onCancelEdit={cancelEdit}
      />


      {/* EXPENSE LIST */}

      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={deleteExpense}
        onEditExpense={editExpense}
      />

    </div>
  )
}

export default App