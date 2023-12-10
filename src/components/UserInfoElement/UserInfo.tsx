import "./UserInfo.css";

type UserInfoElementParams = {
	id?: number
	name?: string
	username?: string
	email?: string
	address?: {
		street?: string
		suite?: string
		city?: string
		zipcode?: string
	}
	phone?: string
	website?: string
}

export const UserInfoElement = (props: UserInfoElementParams) => {

	const userWebLink = "http://" + props.website;
	const mailLink = "mailto: " + props.email;
	const telLink = "tel: " + props.phone;

	return (
		<section className="userinfo-container">
			<h2>{props.username}</h2>
			<p><strong>Name:</strong> {props.name}</p>
			<p><strong>Email:</strong> <a href={mailLink}>{props.email}</a></p>
			<p><strong>Address:</strong> {props.address?.street} {props.address?.suite}, {props.address?.zipcode} {props.address?.city}</p>
			<p><strong>Phone:</strong> <a href={telLink}>{props.phone}</a></p>
			<p><strong>Website:</strong> <a href={userWebLink}>{userWebLink}</a></p>
		</section>
	)
}

