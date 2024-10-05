import React from 'react'

const SearchInput: React.FC = () => {
    const RechercherBlog = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target;
        console.log(form);
    }

    return (
        <form
            className="min-w-sm max-w-md w-full relative"
            onSubmit={RechercherBlog}
        >
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-black/50 group-focus:text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input
                type="search"
                id="search"
                placeholder="Blog, titre, sujet ..."
                required
                autoComplete='off'
                className="group inline-block w-full p-2 ps-10 text-sm font-medium text-secondary border-2 border-secondary rounded-lg bg-light/90 focus:border-primary/80 outline-none placeholder:text-black/70"
            />
            <button type="submit" className="text-light absolute end-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-blue-800 focus:ring focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-[6px] ">
                Search
            </button>
        </form>
    )
}

export default SearchInput