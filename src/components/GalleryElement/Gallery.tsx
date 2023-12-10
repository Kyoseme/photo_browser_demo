import { useEffect, useState } from "react";
import { PhotoModel } from "../models/photo.model"
import { PhotoElement } from "../PhotoElement/Photo"
import { useInView } from "react-intersection-observer";
import { VscLoading } from "react-icons/vsc";
import './Gallery.css';

export const GalleryElement = () => {
	const [photos, setPhotos] = useState<PhotoModel[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [start, setStart] = useState(0);
	const [noMore, setNoMore] = useState(false);
	const [ref, inView] = useInView();


	function getPhotos({ start = 0 }: { start?: number }) {
		return fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20&_start=${start}`)
			.then((res) => res.json()
			);
	}

	useEffect(() => {
		if (inView && !isLoading && start < 5000) {
			setIsLoading(true);
			getPhotos({ start }).then((data) => {

				setPhotos((prevPhotos) => [...prevPhotos, ...data]);
				setStart((prevStart) => prevStart + 20);
				setIsLoading(false);
			});
		} else if (start === 5000) {
			setNoMore(true);
		}
	}, [inView]);



	return (
		<>
			<div className="gallery--list">
				{photos.map(photo =>
					<PhotoElement
							key={photo.id}
							albumId={photo.albumId}
							id={photo.id}
							title={photo.title}
							url={photo.url}
							thumbnailUrl={photo.thumbnailUrl}
						/>
				)}
				{isLoading && <div className="loaderparent"><span className="sr-only">Loading more images</span><span className="loader"><VscLoading /></span></div>}
				{noMore && <p style={{ width: "100%", fontSize: "1.5rem" }}>You did it! That is all the images in this gallery!</p>}

			</div>
			<div ref={ref}>{/* Refernssi targetti sille etta haetaan lisaa kuvia */}</div>
		</>
	);
}
