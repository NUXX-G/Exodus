CREATE TABLE `study_time` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`day` text NOT NULL,
	`area` text NOT NULL,
	`node_id` text,
	`minutes` integer NOT NULL,
	`source` text DEFAULT 'manual' NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `study_time_user_day_idx` ON `study_time` (`user_id`,`day`);--> statement-breakpoint
CREATE TABLE `user_goals` (
	`user_id` integer NOT NULL,
	`goal_id` text NOT NULL,
	`hours_per_week` real,
	`target_day` text,
	`activated_at` integer DEFAULT (unixepoch()) NOT NULL,
	PRIMARY KEY(`user_id`, `goal_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
