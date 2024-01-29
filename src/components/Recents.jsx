import Album from "./Album";

export default function Recents(){
    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
        </div>
    );
}