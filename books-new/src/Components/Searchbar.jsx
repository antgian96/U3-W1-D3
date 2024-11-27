import React, { useState } from "react";
import { Form} from "react-bootstrap";
import scifi from "../scifi.json"

const Searchbar = ({ scifi, onSciFiFiltered }) => {
    const [query, setQuery] = useState(""); 
    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        
        const filteredSciFi = scifi.filter((item) =>
            item.title.toLowerCase().includes(newQuery.toLowerCase()) 
        );

        
        onSciFiFiltered(filteredSciFi);
    };

    return (
        <Form>
            <Form.Control
                type="text"
                placeholder="Cerca un libro..."
                value={query} 
                onChange={handleInputChange} 
                className="mb-3"
            />
        </Form>
    );
};

export default Searchbar;
