export default function ImageWithText({ blok }) {
    return (
        <div id="grid_container">
        
           
                <img
                    src={blok.image.filename}
                    alt={blok.image.alt}
                    id="flex_item_img"
                />
            

            <div >
              
                {blok?.title.content.map((contentBlock, i) => (
                    <h1 key={i} >
                        {contentBlock.content[0].text}
                    </h1>
                ))}

            
                <p className>{blok?.text }</p>
            </div>
        </div>
    );
}
