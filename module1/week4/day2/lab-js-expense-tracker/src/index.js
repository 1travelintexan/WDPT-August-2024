// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  //outside of the constructor but inside the class is where we make our methods
  getFormattedAmount() {
    return `${this.amount} €`;
  }
}
//this is what an entry would look like
// const entry1 = {
//     date: 'the first argument',
//     amount:' the second argument',
//     description: 'The third argument'
// getFormattedAmount:
// }
// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    //this is how to set a default property in a class
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = paid;
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(anEntry) {
    this.entries.push(anEntry);
  }
  getCurrentBalance() {
    let total = 0;
    for (let i = 0; i < this.entries.length; i++) {
      const currentEntry = this.entries[i];
      if (currentEntry.type === "income") {
        total += currentEntry.amount;
      } else if (currentEntry.type === "expense") {
        total -= currentEntry.amount;
      }
    }
    return total;
  }
}
// const budget1 = new Budget();
// console.log("here is the budget", budget1);
// budget1.addEntry(new Income("today", 50, "idk"));
// budget1.addEntry(new Expense("today", 30, "Ragnar treat", true));
// console.log("here is the budget after the method is run", budget1);
