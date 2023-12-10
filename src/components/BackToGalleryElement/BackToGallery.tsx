import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./BackToGallery.css"


export const BackToGallery = () => {
	return (
			<Link className="backtogallery-button backbuttons" to="/" title="Back to Gallery page"><span className="sr-only">Back to Gallery page</span><FaHome /></Link>
	)
}
