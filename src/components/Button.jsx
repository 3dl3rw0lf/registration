export default function Button({classButton, textButton}) {
	return (
		<div className="d-grid gap-2">
			<button className={classButton} type="button">
				{textButton}
			</button>
		</div>
	);
}
