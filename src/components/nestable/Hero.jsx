import "../../styles/global.css";
import Button from "./Button";

export default function Hero({ blok }) {
    return (
        
            
            <div className="hero_content">
                <div className="hero_text">
            <h1 id="title">{blok.title}</h1>

                    <p>{blok.text}</p>
                    <Button blok={blok.button} />
                </div>
                <img
                    src={blok.image.filename}
                    alt="Image description"
                    className="hero_image"
                />
            </div>
       
    );
}
