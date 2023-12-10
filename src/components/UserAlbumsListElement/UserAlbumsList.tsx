import { AlbumsListLinkElement } from "./AlbumsListLinkElement/AlbumsListLink";
import "./UserAlbumsList.css";

type UserAlbumsProps = {
	albums: {
		userId: number
		id: number
		title: string
	}[]
}

export const UserAlbumsListElement = (props: UserAlbumsProps) => {
	return (
		<section className="useralbumslist-container">
			<h2>Users albums</h2>
			<ul>
				{props.albums.map(album =>
					<AlbumsListLinkElement {...album} />
				)}
			</ul>
		</section>
	)
}

