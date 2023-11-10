import Card from "./Card";

function Tours(props) {

    function removeData(id) {
        props.removeData(id);
    }

    return  (
    <div className="container">

        <div>
            <h2 className="title">
                Plan with Varchasva!
            </h2>
        </div>

        <div className="cards grid grid-cols-3 gap-11">
            {    
                props.tours.map( (tour) => {
                    return <Card key = {tour.id} tourData = {tour} removeData = {removeData}></Card>
                })
            } 
        </div>
    </div>
    );
}

export default Tours;

