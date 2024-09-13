"use client";
import { createContext, useContext, useState } from "react";

const UiContext = createContext();

const initialState = {
	activeItemPathname: "/browse",
};

function UiProvider({ children }) {
	const [activeItem, setActiveItem] = useState(initialState);

	return (
		<UiContext.Provider value={{ activeItem, setActiveItem }}>
			{children}
		</UiContext.Provider>
	);
}

function useUi() {
	const context = useContext(UiContext);
	if (context === undefined)
		throw new Error("Context was used outside provider");

	return context;
}

export { UiProvider, useUi };
