ALTER TABLE "address" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "city" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "users" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "orders" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "city" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "users" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "drivers" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "orders" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "restaurant_owner" DROP NOT NULL;