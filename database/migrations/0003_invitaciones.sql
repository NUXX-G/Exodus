CREATE TABLE `invitations` (
	`id` text PRIMARY KEY NOT NULL,
	`created_by` integer NOT NULL,
	`note` text,
	`expires_at` integer NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`used_at` integer,
	`used_by` integer,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`used_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `invitations_creator_idx` ON `invitations` (`created_by`);--> statement-breakpoint
ALTER TABLE `users` ADD `role` text DEFAULT 'miembro' NOT NULL;--> statement-breakpoint
UPDATE `users` SET `role` = 'admin' WHERE `password_hash` IS NOT NULL;
