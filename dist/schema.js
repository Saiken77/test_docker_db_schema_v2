"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const crypto_1 = require("crypto");
const pg_core_1 = require("drizzle-orm/pg-core");
const timestamps = {
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true })
        .defaultNow()
        .notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true })
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
};
exports.users = (0, pg_core_1.pgTable)("users", Object.assign({ id: (0, pg_core_1.text)("id")
        .primaryKey()
        .$default(() => (0, crypto_1.randomUUID)()), email: (0, pg_core_1.text)("email").unique().notNull(), password: (0, pg_core_1.text)("password").notNull() }, timestamps));
