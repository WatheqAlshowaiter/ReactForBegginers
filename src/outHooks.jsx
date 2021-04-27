import React from "react";

export function useOnce(callBack) {
	return React.useEffect(callBack, []);
}

export function useMultiplier(number) {
	return React.useMemo(() => number * 2, [number]);
}
