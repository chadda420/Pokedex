export default function ToggleButtons({currentId, setCurrentId}){

    const handleNext = () => {
        setCurrentId(prevId => prevId + 1)

    }

        const handlePrevious = () => {
      if(currentId === 1){
        return;
      }
        setCurrentId(prevId => prevId - 1)

    }

    return (
        <>
        <div className="button-row">
    <button className="previous-button" onClick={handlePrevious}>Previous</button>
    <button className='next-button' onClick={handleNext}>Next</button>
    </div>
        
        </>
    )
}