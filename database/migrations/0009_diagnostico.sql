CREATE TABLE `diagnostic_marks` (
	`user_id` integer NOT NULL,
	`node_id` text NOT NULL,
	`area` text NOT NULL,
	`session_id` integer NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	PRIMARY KEY(`user_id`, `node_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `diagnostic_sessions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`area` text NOT NULL,
	`state` text NOT NULL,
	`start_node_id` text,
	`started_at` integer DEFAULT (unixepoch()) NOT NULL,
	`finished_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `diagnostic_sessions_user_idx` ON `diagnostic_sessions` (`user_id`,`area`);