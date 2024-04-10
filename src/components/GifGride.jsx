
import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';   

export default function GifGride({ category }) {

    const {images, isLoading} = useFetchGifs(category);    

  return (
    <>
        <h3 className='text-2xl uppercase font-bold text-center p-2'>{category}</h3>
        
        
        <div className='md:grid grid-cols-4 justify-items-center '>

            {
                
                images.map( ( image ) => (
                    <GifItem 
                        key={image.id} 
                        {...image}
                    />
                ))
            }
            
        </div>
        
    </>
  )
}
