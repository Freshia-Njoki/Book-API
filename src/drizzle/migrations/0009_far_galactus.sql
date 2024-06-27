ALTER TABLE "order_status" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "order_status" ALTER COLUMN "created_at" DROP NOT NULL;