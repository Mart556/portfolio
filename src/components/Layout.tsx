import type React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='flex w-full'>
			<div className='w-20 shrink-0' />

			<main
				className='flex-1 min-h-screen overflow-auto no-scrollbar mx-10'
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{children}
			</main>

			<div className='w-20 shrink-0' />

			<style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
		</div>
	);
};

export default Layout;
