ALTER TABLE "menu_item" ALTER COLUMN "price" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "category" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "restaurant" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "order_menu_item" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "updated_at" SET DEFAULT now();