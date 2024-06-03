export interface Course {
	description: string;
	name: string;
	url: string;
	level: string;
    time: string;
	language: string;
	iconLight: string;
	iconDark: string;
}

export type Courses = Array<Course>;
