import LikedMovie from "./LikedMovie";

export default function LikedMovies({ visibility }) {
    return (
        <div className={visibility + " liked-movies"}>
            <LikedMovie name="Ant-man and wasp: quantumania" />
            <LikedMovie name="Spiderman" />
            <LikedMovie name="Superman" />
        </div>
    )
}