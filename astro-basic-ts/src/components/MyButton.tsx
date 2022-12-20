import { Button } from "primereact/button"

export default function MyButton() {

    const showAlert = () => {
        alert("Astro + PrimeReact = <3");
    }

    return (
        <>
        <Button label="Click Me" type="button" icon="pi pi-check" iconPos="right" onClick={showAlert}/>
        </>
    )
}