import type React from "react";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

const Layout = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		if (isMobile) return;

		const controller = new AbortController();
		let lastClickTime = 0;

		document.body.addEventListener(
			"click",
			(event) => {
				const target = event.target as HTMLElement;

				if (
					target instanceof HTMLAnchorElement ||
					target instanceof HTMLButtonElement ||
					target.closest("button") ||
					target.closest("a")
				) {
					return;
				}

				const currentTime = new Date().getTime();
				if (currentTime - lastClickTime < 1000) {
					return;
				}

				lastClickTime = currentTime;

				const hammerSmashGif = document.createElement("img");
				hammerSmashGif.src = "./hammer-smash.gif";
				hammerSmashGif.style.position = "absolute";
				hammerSmashGif.style.left = `${event.pageX}px`;
				hammerSmashGif.style.top = `${event.pageY}px`;
				hammerSmashGif.style.transform = "translate(-50%, -50%)";
				hammerSmashGif.style.width = "32px";
				hammerSmashGif.style.height = "32px";
				hammerSmashGif.style.pointerEvents = "none";
				hammerSmashGif.style.zIndex = "9999";

				document.body.appendChild(hammerSmashGif);

				setTimeout(() => {
					hammerSmashGif.remove();
				}, 1000);
			},

			{ signal: controller.signal }
		);

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<div className='flex w-full'>
			<div className={`w-20 shrink-0  ${isMobile ? "hidden" : "block"}`} />

			<main
				className='flex-1 h-full overflow-auto md:mx-15 '
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{children}
			</main>

			<div className={`w-20 shrink-0  ${isMobile ? "hidden" : "block"}`} />
		</div>
	);
};

export default Layout;
