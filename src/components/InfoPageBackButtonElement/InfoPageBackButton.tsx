import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


export const InfoPageBackButtonElement = () => {
		const navigate = useNavigate();


	return (
		<button className='infopagebackbutton--button backbuttons' title='Back to previous page' onClick={() => navigate(-1)}><span className='sr-only'>Back to previous page</span><FaArrowLeft /></button>
	)
}
