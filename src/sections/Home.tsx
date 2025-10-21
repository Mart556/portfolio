import { useEffect, useState, useMemo } from "react";
import { FaChevronDown } from "react-icons/fa";

const Home = () => {
	const [displayedText, setDisplayedText] = useState("");
	const [isTransitioning, setIsTransitioning] = useState(false);

	const slogans = useMemo(
		() => ["/Junior Software Developer/", "I build things for the web.."],
		[]
	);

	useEffect(() => {
		let charIndex = 0;
		let currentTextIndex = 0;
		let typingTimeout: ReturnType<typeof setTimeout>;
		let fadeTimeout: ReturnType<typeof setTimeout>;
		let nextCycleTimeout: ReturnType<typeof setTimeout>;

		const type = () => {
			const currentText = slogans[currentTextIndex];

			if (charIndex < currentText.length) {
				setDisplayedText(currentText.substring(0, charIndex + 1));
				charIndex++;
				typingTimeout = setTimeout(type, 100);
			} else {
				charIndex = 0;
				currentTextIndex = (currentTextIndex + 1) % slogans.length;

				fadeTimeout = setTimeout(() => {
					setIsTransitioning(true);

					nextCycleTimeout = setTimeout(() => {
						setIsTransitioning(false);
						setDisplayedText("");
						type();
					}, 1000);
				}, 5000);
			}
		};

		type();

		return () => {
			clearTimeout(typingTimeout);
			clearTimeout(fadeTimeout);
			clearTimeout(nextCycleTimeout);
		};
	}, [slogans]);

	return (
		<div
			id='home'
			className='min-h-screen flex h-full flex-col items-center justify-center space-y-10'
		>
			<h2 className='text-4xl font-semibold text-gray-300'>Hi, my name is</h2>
			<h1 className='text-7xl font-bold text-white'>Mart Haamer.</h1>
			<h3
				className={`text-3xl font-semibold text-gray-300 transition-opacity duration-1000 ${
					isTransitioning ? "opacity-0" : "opacity-100"
				}`}
			>
				{displayedText}
				<span className='animate-pulse'>|</span>
			</h3>

			<div className='flex'>
				<style>{`
					@keyframes scroll-bounce {
						0%, 100% { transform: translateY(0); opacity: 0.7; }
						50% { transform: translateY(8px); opacity: 1; }
					}
					.scroll-arrow {
						animation: scroll-bounce 2s infinite;
					}
				`}</style>
				<div className='flex flex-col items-center gap-1'>
					<FaChevronDown className='scroll-arrow h-6 w-6 text-cyan-400/50' />
				</div>
			</div>
		</div>
	);
};

export default Home;
