import './Photo.css';
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";


type PhotoElementProps = {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailUrl: string
}

export const PhotoElement = (props: PhotoElementProps) => {
	const hoverId = props.id.toString() + "-hover"
	const linkToImg = "/img/" + props.id.toString();
	const fullLink = window.location.origin + linkToImg;

	return (
		<div className='photoelement-container'>
			<Link to={linkToImg}>
				<img className="photoelement--thumbnail" src={props.thumbnailUrl} title={props.title} alt="" />
			</Link>
			<div id={hoverId} className="photoelement--hoverinfo">
				<button aria-label='Copy link to image' title='Copy image link' className='photoelement--copylink copylink-btn' onClick={() => { navigator.clipboard.writeText(fullLink) }}><FaLink /></button>
			</div>
		</div>
	)
}
