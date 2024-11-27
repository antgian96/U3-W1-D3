import React from "react";
import { Alert } from "react-bootstrap"; 
function MyAlert() {
    return (  
        <Alert variant="success">
            <Alert.Heading>Ciao, felice di vederti</Alert.Heading>
            <p>
                Scegli tra centinaia di libri disponibili
            </p>
            <hr />
            <p className="mb-0">
                Approfitta del Black-Friday!
            </p>
        </Alert>
    );
}

export default MyAlert;
