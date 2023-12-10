import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserInfoElement } from "../components/UserInfoElement/UserInfo";
import { UserModel } from "../components/models/user.model";
import { UserAlbumsListElement } from "../components/UserAlbumsListElement/UserAlbumsList";
import { AlbumModel } from "../components/models/album.model";
import { PageHeaderElement } from "../components/PageHeaderElement/PageHeader";


export const UserPage = () => {
	const [idCheck, setIdCheck] = useState(false);
	const [userData, setUserData] = useState<UserModel>();
	const [userAlbumsData, setUserAlbumsData] = useState<AlbumModel[]>([]);

	let { id = "0" } = useParams();
	let idNumber = parseInt(id);

	function getUserData() {
		return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json()
			);
	}
	function getUserAlbumsData() {
		return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
			.then((res) => res.json()
			);
	}

	useEffect(() => {
		if (idNumber > 0 && idNumber <= 10) {
			setIdCheck(true);
			id = idNumber.toString();
		}

		getUserData().then((data) => {
			setUserData(data);
		});

		getUserAlbumsData().then((data) => {
			setUserAlbumsData(data);
		});
	}, []);

	return (
		<>
			<PageHeaderElement pageTitle="User Page" showButtons={true} />
			<main className="userpage">
				{idCheck ? (
						<article className="userpage--infocontainer">
							<UserInfoElement {...userData} />
							<UserAlbumsListElement albums={userAlbumsData} />
						</article>
				) : (
					<p>ID does not match to any existing user</p>
				)}
			</main>
		</>
	);
}
