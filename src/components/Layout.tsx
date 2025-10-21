import type React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='flex w-full'>
			<div className='w-20 shrink-0' />

			<main className='flex-1 min-h-screen overflow-x-hidden'>{children}</main>

			<div className='w-20 shrink-0' />
		</div>
	);
};

export default Layout;
