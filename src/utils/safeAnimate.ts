/*
 * This module ensures that animations are enabled only if prefers-reduced-motion is disabled
 */

import { type TargetsParam, type AnimationParams, animate } from "animejs";

export function checkReducedMotion() {
	if (window) {
		return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	}
	return false;
}

export function safeAnimate(
	targets: TargetsParam,
	parameters: AnimationParams,
) {
	if (checkReducedMotion()) return;
	return animate(targets, parameters);
}
