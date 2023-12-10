import { useEffect, useState } from "react";
import { PhotoModel } from "../models/photo.model";
import { PhotoElement } from "../PhotoElement/Photo";
import "./AlbumList.css";

type AlbumListProps = {
	userId?: number
	id?: number
	title?: string
	photoId?: number
}

export const AlbumListElement = (props: AlbumListProps) => {
	const [albumPhotos, setAlbumPhotos] = useState<PhotoModel[]>([]);

	function getPhotosFromAlbumData() {
		return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${props.id}`)
			.then((res) => res.json()
			);
	}

	useEffect(() => {
		if (props.id && props.id !== 0) {
			getPhotosFromAlbumData().then((data) => {
				setAlbumPhotos(data);
			});
		};
	}, [props.id]);

	return (
		<div className="albumlist-container">
			<h2>Other pictures from album: {props.title}</h2>
			<div className="albumlist--list">
				{albumPhotos.filter(photo => photo.id != props.photoId).map(photo =>
					<PhotoElement
						key={photo.id}
						albumId={photo.albumId}
						id={photo.id}
						title={photo.title}
						url={photo.url}
						thumbnailUrl={photo.thumbnailUrl}
					/>
				)
				}
			</div>
		</div>
	)
}

