import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }
  

interface GameQueryStore {
    gameQuery : GameQuery
    setSearchText : (searchText : string ) => void;
    setSortOrder : (sortOrder : string ) => void;
    setGenreId : (genreId : number ) => void;
    setPlatformId : (platformId :number ) => void;
}


export const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText : (searchText) =>
        set(() => ({gameQuery : {searchText}})),
    setSortOrder : (sortOrder) =>
        set((store) => ({gameQuery : {...store.gameQuery, sortOrder}})),
    setGenreId : (genreId) =>
        set((store) => ({gameQuery : {...store.gameQuery, genreId}})),
    setPlatformId : (platformId) =>
        set((store) => ({gameQuery : {...store.gameQuery, platformId}}))
    

}))