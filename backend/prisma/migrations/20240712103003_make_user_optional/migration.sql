/*
  Warnings:

  - You are about to drop the column `cardId` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `cardExpiry` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNo` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_cardId_fkey";

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "cardExpiry" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "cardNo" VARCHAR(127) NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "cardId",
ALTER COLUMN "comments" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "AccountNumber" VARCHAR(127) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);
