import { useState } from "react"
import { BackToGallery } from "../BackToGalleryElement/BackToGallery"
import { InfoPageBackButtonElement } from "../InfoPageBackButtonElement/InfoPageBackButton"

type PageHeaderProps = {
	pageTitle: string
	showButtons: boolean
}

export const PageHeaderElement = (props: PageHeaderProps) => {

	return (
		<header>
			{( props.showButtons ) ? (
				<>
					<InfoPageBackButtonElement />
					<BackToGallery />
				</>
			) : null }
			<h1>{props.pageTitle}</h1>
		</header>
	)
}
