import { randomUUID } from "crypto";
import {
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
};

export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$default(() => randomUUID()),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  ...timestamps,
});