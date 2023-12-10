import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type AlbumListLinkProps = {
	id: number
	title: string
}


export const AlbumsListLinkElement = (props: AlbumListLinkProps) => {
	const [linkToImage, setLinkToImage] = useState("/");

	function getAlbumsLinkData() {
		return fetch(`https://jsonplaceholder.typicode.com/photos?_limit=1&albumId=${props.id}`)
			.then((res) => res.json()
			);
	}

	useEffect(() => {
		if (props.id && props.id !== 0) {
			getAlbumsLinkData().then((data) => {
				setLinkToImage("/img/" + data[0].id );
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
			<li key={props.id}><Link to={linkToImage} >{props.title}</Link></li>
	)
}

