#! /usr/bin/env node
const { Client } = require("pg");
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY)
messages  VARCHAR (400)
);
INSERT INTO messages(message)
VALUES
('Chao ca co'),
('It's all good man'),
('Chop Chop!')
`;

async function main() {
    console.log("seeding");
    require('dotenv').config();
    const client = new Client({
        connectionString: process.env.INTERNAL_DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");

}

main();