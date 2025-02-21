import { query, mutation } from "./_generated/server";

// Query to get all names from the database
export const getAllNames = query(async ({ db }) => {
  return await db.query("names").collect();
});

// Mutation to add a new name to the database
export const addName = mutation(async ({ db }, { name }: { name: string }) => {
  return await db.insert("names", { name });
});

// Seed initial data with five names (run this once)
export const seedNames = mutation(async ({ db }) => {
  const initialNames = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
  
  for (const name of initialNames) {
    await db.insert("names", { name });
  }
});
