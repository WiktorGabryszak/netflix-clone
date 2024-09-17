"use client";
import { createContext, useContext, useState } from "react";

const GenreContext = createContext();

const initialState = {
	activeItemPathname: "/browse",
};

function GenreProvider({ children }) {
	const [activeItem, setActiveItem] = useState(initialState);

	return (
		<GenreContext.Provider value={{ activeItem, setActiveItem }}>
			{children}
		</GenreContext.Provider>
	);
}

function useGenre() {
	const context = useContext(UiContext);
	if (context === undefined)
		throw new Error("Context was used outside provider");

	return context;
}

export { GenreProvider, useGenre };
