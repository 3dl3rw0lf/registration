import Input from "../components/Input";

export default function InputGroup({text, type, className, placeholder}) {
    return(
        <>
        <div className="input-group mb-3">
					<span className="input-group-text">
						{text}
					</span>
					<Input
						type={type}
						className={className}
						placeholder={placeholder}
					/>
				</div>
        </>
    )
}