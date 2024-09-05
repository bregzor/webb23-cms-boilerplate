import ImageWithText from './ImageWithText'; 
import "../../styles/global.css"
export default function Grid({ blok }) {
    return (
        <div className='grid'>
            <h3 className="grid_text">{blok?.text}</h3>


            <div className="grid_container">
                {blok?.columns.map((column) => (
                    <ImageWithText key={column._uid} blok={column} />
                ))}
            </div>
        </div>
    );
}
