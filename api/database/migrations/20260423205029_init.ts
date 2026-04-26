import { TableBuilder, type Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable("notes", (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid"));
        table.string("caption").notNullable();
        table.string("notes").notNullable();
        table.string("priority").notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("notes");
}

