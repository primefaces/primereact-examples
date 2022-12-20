import { Button } from "primereact/button"
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

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