import Fuse from "fuse.js";

export const useFuseSearch = (searchQuery, items) => {
    const fuseOptions = {
        keys: [
            "species",
            "name"
        ]
    };
    const fuse = new Fuse(items, fuseOptions);

    return fuse.search(searchQuery);
}

