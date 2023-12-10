import "./PhotoInfo.css";
import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

type PhotoInfoElementParams = {
	title?: string
	url?: string
	albumName?: string
	userId?: number
}

export const PhotoInfoElement = (props: PhotoInfoElementParams) => {
	const [userName, setUserName] = useState("");

	function getUserData() {
		return fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
			.then((res) => res.json()
			);
	}

	useEffect(() => {
		if (props.userId && props.userId !== 0) {
			getUserData().then((data) => {
				setUserName( data.username );
			});
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.userId]);

	const linkToUser = "/user/" + props.userId;
	const fullLink = window.location.href;

	return (
		<section className="photoinfoelement-container">
			<img className="photoinfoelement--image" src={props.url} alt="" />
			<div className="photoinfoelement--info">
				<h2>{props.title}</h2>
				<div>
					<p>Album name: {props.albumName} </p>
					<p>User: <Link to={linkToUser}>{userName}</Link></p>
				</div>
				<button aria-label='Copy link to image' title='Copy image link' className='photoinfoelement--copylink copylink-btn' onClick={() => { navigator.clipboard.writeText(fullLink) }}><FaLink /></button>
			</div>
		</section>
	)
}

