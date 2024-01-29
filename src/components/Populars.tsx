import PopularAlbum from "./PopularAlbum";

export default function Populars(){
    return (
        <div className="grid grid-cols-8 gap-4 mt-4">
            <PopularAlbum />
            <PopularAlbum />
            <PopularAlbum />
            <PopularAlbum />
            <PopularAlbum />
            <PopularAlbum />
            <PopularAlbum />
            <PopularAlbum />
        </div>
    );
}