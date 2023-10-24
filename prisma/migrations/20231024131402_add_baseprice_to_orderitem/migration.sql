/*
  Warnings:

  - You are about to drop the column `price` on the `OrderItems` table. All the data in the column will be lost.
  - Added the required column `basePrice` to the `OrderItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderItems" DROP COLUMN "price",
ADD COLUMN     "basePrice" DECIMAL(8,2) NOT NULL;
