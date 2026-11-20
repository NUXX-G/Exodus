CREATE TABLE `reports` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`node_id` text NOT NULL,
	`exercise_id` text,
	`message` text NOT NULL,
	`status` text DEFAULT 'pendiente' NOT NULL,
	`resolution` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`resolved_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `reports_status_idx` ON `reports` (`status`,`created_at`);--> statement-breakpoint
CREATE INDEX `reports_node_idx` ON `reports` (`node_id`);--> statement-breakpoint
ALTER TABLE `exercise_attempts` ADD `variant` integer;--> statement-breakpoint
ALTER TABLE `exercise_attempts` ADD `elapsed_ms` integer;--> statement-breakpoint
ALTER TABLE `exercise_attempts` ADD `mode` text DEFAULT 'estudio' NOT NULL;--> statement-breakpoint
ALTER TABLE `exercise_attempts` ADD `review_of` text;