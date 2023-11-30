/*
  Warnings:

  - The `status` column on the `orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `items` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "status",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "draft" SET DEFAULT false,
ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "items";
