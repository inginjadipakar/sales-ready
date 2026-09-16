CREATE TABLE "participants" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"whatsapp" varchar(30) NOT NULL,
	"email" varchar(255),
	"domicile" varchar(100) NOT NULL,
	"participant_type" varchar(100) NOT NULL,
	"sales_experience" varchar(100) NOT NULL,
	"goals" jsonb NOT NULL,
	"question" text,
	"registration_status" varchar(30) DEFAULT 'pending' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
