import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoPageBackButtonElement } from "../components/InfoPageBackButtonElement/InfoPageBackButton";
import { PhotoInfoElement } from "../components/PhotoInfoElement/PhotoInfo";
import { AlbumListElement } from "../components/AlbumListElement/AlbumList";
import { PhotoModel } from "../components/models/photo.model";
import { AlbumModel } from "../components/models/album.model";
import { PageHeaderElement } from "../components/PageHeaderElement/PageHeader";


export const InfoPage = () => {
	const [idCheck, setIdCheck] = useState(false);
	const [albumName, setAlbumName] = useState("");
	const [userId, setUserId] = useState(0);
	const [photoId, setPhotoId] = useState(0);
	const [photoData, setPhotoData] = useState<PhotoModel>();
	const [albumData, setAlbumData] = useState<AlbumModel>();

	let { id = "0"} = useParams();
	const idNumber = parseInt(id);

	function getPhotoData() {
		return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
			.then((res) => res.json()
			);
	}
	function getAlbumData(albumid: string) {
		return fetch(`https://jsonplaceholder.typicode.com/albums/${albumid}`)
			.then((res) => res.json()
			);
	}

	useEffect(() => {
		if (idNumber && idNumber > 0 && idNumber <= 5000) {
			setIdCheck(true);
			id = idNumber.toString();
		}

		window.scrollTo(0, 0)
		getPhotoData().then((data) => {
			setPhotoData(data);
			setPhotoId(data.id);

			getAlbumData( data.albumId ).then((data) => {
				setAlbumData(data);
				setAlbumName(data.title)
				setUserId(data.userId);
			});
		});
	}, [idNumber]);

	return (
		<>
			<PageHeaderElement pageTitle="Info Page" showButtons={true} />
			<main className="infopage">

				{ idCheck ? (
					<>
						<PhotoInfoElement {...photoData} albumName={albumName} userId={userId} />
						<AlbumListElement {...albumData} photoId={photoId} />
					</>
				) : (
					<p>ID does not match to any existing image</p>
				)}
			</main>
		</>
	);
}
