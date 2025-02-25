#! /usr/bin/env node
const { Client } = require("pg");
require("dotenv").config();
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(100),
  message VARCHAR(400),
  posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message , posted_at)
VALUES
  ('Saul Goodman', 'Chao ca co' ,  CURRENT_TIMESTAMP AT TIME ZONE 'GMT+8'),
  ('Pinkman', 'It''s all good man' ,CURRENT_TIMESTAMP AT TIME ZONE 'GMT+8'),
  ('Jimmy', 'Chop Chop!' , CURRENT_TIMESTAMP AT TIME ZONE 'GMT+8');
`;

async function main() {
  console.log("seeding");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.end();
    console.log("done");
  }
}

main();