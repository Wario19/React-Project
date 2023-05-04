const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Gas Station </span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Bezirk"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;