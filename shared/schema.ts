import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z, ZodTypeAny } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// drizzle-zod returns a Zod schema but its type is slightly off.
// Cast once so TypeScript is happy.
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
}) as unknown as ZodTypeAny;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
