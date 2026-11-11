CREATE TABLE `activity_log` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`day` text NOT NULL,
	`kind` text NOT NULL,
	`node_id` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `activity_log_day_idx` ON `activity_log` (`user_id`,`day`);--> statement-breakpoint
CREATE TABLE `flag_submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`node_id` text NOT NULL,
	`submitted_hash` text NOT NULL,
	`correct` integer NOT NULL,
	`hints_used` integer DEFAULT 0 NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `flag_submissions_node_idx` ON `flag_submissions` (`user_id`,`node_id`);--> statement-breakpoint
CREATE INDEX `flag_submissions_time_idx` ON `flag_submissions` (`user_id`,`created_at`);--> statement-breakpoint
CREATE TABLE `hint_reveals` (
	`user_id` integer NOT NULL,
	`node_id` text NOT NULL,
	`level` integer NOT NULL,
	`revealed_at` integer DEFAULT (unixepoch()) NOT NULL,
	PRIMARY KEY(`user_id`, `node_id`, `level`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `node_progress` (
	`user_id` integer NOT NULL,
	`node_id` text NOT NULL,
	`status` text DEFAULT 'in_progress' NOT NULL,
	`first_opened_at` integer DEFAULT (unixepoch()) NOT NULL,
	`last_opened_at` integer DEFAULT (unixepoch()) NOT NULL,
	`completed_at` integer,
	PRIMARY KEY(`user_id`, `node_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `node_progress_status_idx` ON `node_progress` (`user_id`,`status`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`display_name` text,
	`password_hash` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_uq` ON `users` (`username`);