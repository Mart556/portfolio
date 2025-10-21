import type React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='flex w-full'>
			<div className='w-20 shrink-0 hidden md:block' />

			<main
				className='flex-1 h-full overflow-auto no-scrollbar mx-10'
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{children}
			</main>

			<div className='w-20 shrink-0 hidden md:block' />

			<style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
		</div>
	);
};

export default Layout;
