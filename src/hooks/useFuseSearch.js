import Fuse from "fuse.js";

export const useFuseSearch = (items, searchQuery) => {

    const fuseOptions = {
        includeScore: true,
        keys: ["type"]
    };

    const fuse = new Fuse(items, fuseOptions);
    return fuse.search(searchQuery);
}

