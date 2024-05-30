export interface Course {
	aliases?: Array<string>;
	description: string;
	name: string;
	url: string;
	language: string;
	iconLight: string;
	iconDark: string;
}

export type Courses = Array<Course>;
