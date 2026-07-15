import { useEffect, useState } from "react";

type Status = "loading" | "online" | "offline";

const POLL_INTERVAL_MS = 30_000;

const LivePlayerCount = ({ endpoint }: { endpoint: string }) => {
	const [status, setStatus] = useState<Status>("loading");
	const [count, setCount] = useState<number | null>(null);

	useEffect(() => {
		let cancelled = false;
		const controller = new AbortController();

		const fetchPlayers = async () => {
			try {
				const res = await fetch(endpoint, {
					signal: controller.signal,
				});
				if (!res.ok) throw new Error(`status ${res.status}`);
				const data = await res.json();
				if (cancelled) return;
				if (!Array.isArray(data))
					throw new Error("unexpected response shape");
				setCount(data.length);
				setStatus("online");
			} catch {
				if (cancelled) return;
				setStatus("offline");
			}
		};

		fetchPlayers();
		const interval = setInterval(fetchPlayers, POLL_INTERVAL_MS);

		return () => {
			cancelled = true;
			controller.abort();
			clearInterval(interval);
		};
	}, [endpoint]);

	if (status === "loading") return null;

	return (
		<div
			className="flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-semibold"
			title={
				status === "online" ? "Live player count" : "Server unreachable"
			}
		>
			<span
				className={`h-2 w-2 rounded-full ${
					status === "online"
						? "bg-green-400 animate-pulse"
						: "bg-red-400"
				}`}
			/>
			{status === "online" ? (
				<span>{count} online</span>
			) : (
				<span>Offline</span>
			)}
		</div>
	);
};

export default LivePlayerCount;
