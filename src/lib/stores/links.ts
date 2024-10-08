import type { ExternalLink } from "$lib/models/links";
import { writable } from "svelte/store";

type StackedNote = {
	href: string;
	body: string;
};
export const links = writable<ExternalLink[]>([]);
export const stackedNotes = writable<StackedNote[]>([]);
