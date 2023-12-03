import Button from "../components/Button";
import InputGroup from "../components/InputGroup";

export default function Registration() {
	return (
		<>
			<section className="col-md-7 col-lg-8 m-5">
                <h2 className="fs-1 text-center mb-3">Formulario de Registro</h2>
				<form className="form">
					<InputGroup
						text={"Nombre"}
						type={"text"}
						className={"form-control w-90"}
						placeholder={"Nombre"}
					/>
					<InputGroup
						text={"Apellido"}
						type={"text"}
						className={"form-control w-90"}
						placeholder={"Apellido"}
					/>
					<InputGroup
						text={"email"}
						type={"email"}
						className={"form-control"}
						placeholder={"email"}
					/>
					<InputGroup
						text={"Teléfono"}
						type={"text"}
						className={"form-control"}
						placeholder={"Teléfono"}
					/>
					<InputGroup
						text={"Password"}
						type={"password"}
						className={"form-control"}
						placeholder={"Password"}
					/>
					<InputGroup
						text={"Repita el password"}
						type={"password"}
						className={"form-control"}
						placeholder={"Repita el password"}
					/>
                    <Button classButton={"btn btn-info"} textButton={"Registrarse"}/>
				</form>
			</section>
		</>
	);
}
