import GenresSelector from "./GenresSelector";
import HeaderContent from "./HeaderContent";

function Header() {
	// ${isScrolled ? "bg-neutral-950/80" : "bg-opacity-0"}

	return (
		<>
			<HeaderContent>
				<GenresSelector />
			</HeaderContent>
		</>
	);
}

export default Header;
