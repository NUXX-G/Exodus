CREATE TABLE `exam_attempts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`node_id` text NOT NULL,
	`mode` text DEFAULT 'normal' NOT NULL,
	`items` text NOT NULL,
	`answers` text DEFAULT '{}' NOT NULL,
	`results` text,
	`score` real,
	`max_score` real,
	`step` integer DEFAULT 0 NOT NULL,
	`started_at` integer DEFAULT (unixepoch()) NOT NULL,
	`deadline` integer,
	`finished_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `exam_attempts_user_idx` ON `exam_attempts` (`user_id`,`node_id`);