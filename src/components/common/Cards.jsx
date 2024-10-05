import React, {useState} from "react";

function Cards() {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div className="pjcDesign" 
        
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transform: isHovered ? 'scale(1)' : 'scale(0.99)',  backgroundColor: isHovered ? "var(--surface-color)" : ""}}
        >
            <img id="img" src="https://unsplash.com/photos/a-person-holding-a-camera-in-their-hands-aEXbfkTGoqM" alt="" />

        </div>
    );
}
export default Cards;