CREATE TABLE `development_submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`node_id` text NOT NULL,
	`exercise_id` text NOT NULL,
	`answer` text DEFAULT '' NOT NULL,
	`on_paper` integer DEFAULT false NOT NULL,
	`mode` text DEFAULT 'estudio' NOT NULL,
	`review_of` text,
	`scores` text,
	`score` integer,
	`max_score` integer,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`graded_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `development_user_idx` ON `development_submissions` (`user_id`,`node_id`,`exercise_id`);