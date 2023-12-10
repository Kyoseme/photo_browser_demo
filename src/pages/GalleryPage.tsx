import { GalleryElement } from "../components/GalleryElement/Gallery";
import { PageHeaderElement } from "../components/PageHeaderElement/PageHeader";

export const GalleryPage = () => {

	return (
		<>
			<PageHeaderElement pageTitle="Gallery" showButtons={false} />
			<main className="gallery">
				<GalleryElement />
			</main>
		</>
	);
}
