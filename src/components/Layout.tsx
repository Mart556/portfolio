import type React from "react";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	useEffect(() => {
		let lastClickTime = 0;

		document.body.addEventListener("click", function (event) {
			const target = event.target as HTMLElement;
			if (
				isMobile ||
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
			hammerSmashGif.src = "hammer-smash.gif";
			hammerSmashGif.style.position = "absolute";
			hammerSmashGif.style.left = `${event.pageX}px`;
			hammerSmashGif.style.top = `${event.pageY}px`;
			hammerSmashGif.style.width = "32px";
			hammerSmashGif.style.height = "32px";
			hammerSmashGif.style.pointerEvents = "none";
			hammerSmashGif.style.zIndex = "9999";
			document.body.appendChild(hammerSmashGif);

			setTimeout(() => {
				hammerSmashGif.remove();
			}, 1000);
		});
	}, []);

	return (
		<div className='flex w-full'>
			<div className={`w-20 shrink-0 ${isMobile ? "hidden" : "block"}`} />

			<main
				className='flex-1 h-full overflow-auto no-scrollbar md:mx-10'
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{children}
			</main>

			<div className={`w-20 shrink-0 ${isMobile ? "hidden" : "block"}`} />

			<style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
		</div>
	);
};

export default Layout;
