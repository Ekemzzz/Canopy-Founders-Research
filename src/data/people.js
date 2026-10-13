import { founders } from './founders.js';
import { team } from './team.js';

export const people = [...founders, ...team];
export const personBySlug = Object.fromEntries(people.map((person) => [person.slug, person]));
