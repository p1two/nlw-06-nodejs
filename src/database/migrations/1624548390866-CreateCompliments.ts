import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1624548390866 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "compliments",
        columns: [
          {
            name: "id",
            type: "varchar",
            generationStrategy: "uuid",
            isPrimary: true,
          },
          {
            name: "user_sender",
            type: "varchar",
            generationStrategy: "uuid",
          },
          {
            name: "user_receiver",
            type: "varchar",
            generationStrategy: "uuid",
          },
          {
            name: "tag_id",
            type: "varchar",
            generationStrategy: "uuid",
          },
          {
            name: "message",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserSenderCompliments",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_sender"],
          },
          {
            name: "FKUserReceiverCompliments",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_receiver"],
          },
          {
            name: "FKTagsCompliments",
            referencedTableName: "tags",
            referencedColumnNames: ["id"],
            columnNames: ["tag_id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("compliments");
  }
}
