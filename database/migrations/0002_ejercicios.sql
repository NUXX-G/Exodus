CREATE TABLE `exercise_attempts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`node_id` text NOT NULL,
	`exercise_id` text NOT NULL,
	`submitted_hash` text NOT NULL,
	`correct` integer NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `exercise_attempts_ex_idx` ON `exercise_attempts` (`user_id`,`node_id`,`exercise_id`);--> statement-breakpoint
CREATE INDEX `exercise_attempts_time_idx` ON `exercise_attempts` (`user_id`,`created_at`);--> statement-breakpoint
CREATE TABLE `exercise_solved` (
	`user_id` integer NOT NULL,
	`node_id` text NOT NULL,
	`exercise_id` text NOT NULL,
	`solved_at` integer DEFAULT (unixepoch()) NOT NULL,
	PRIMARY KEY(`user_id`, `node_id`, `exercise_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `reviews` (
	`user_id` integer NOT NULL,
	`node_id` text NOT NULL,
	`exercise_id` text NOT NULL,
	`step` integer DEFAULT 0 NOT NULL,
	`due_day` text NOT NULL,
	PRIMARY KEY(`user_id`, `node_id`, `exercise_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `reviews_due_idx` ON `reviews` (`user_id`,`due_day`);