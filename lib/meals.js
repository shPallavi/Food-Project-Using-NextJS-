import sql from "better-sqlite3";
const db = sql("meals.db");

// run() is basically used to inserteing the Data  from data base

// all() is used to fetch the data from data base and all is used for the multilple rows inited

// get() if it is a single row then use get method

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}
