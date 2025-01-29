


function Card (){

    return(
            <div className="card text-light text-center m-auto py-4 mt-5 d-flex align-items-center justify-content-center " style={{width: '18rem'}}>
                <img src="avatar-jessica.jpeg" className="card-img-top rounded-circle w-25 " alt="..."/>
                <div className="card-body">
                    <h4 className="card-title font-weight-bold">Jesssica Randall</h4>
                    <p className="card-text" id="place">London, United Kingdom</p>
                    <p className="card-text" id="f-e">"Front-end developer and avid reader."</p>
                    <a href="#" className="btn w-100">GitHub</a>
                    <a href="#" className="btn w-100 mt-2 py-2">Frontend Mentor</a>
                    <a href="#" className="btn w-100 mt-2 py-2">Linkedin</a>
                    <a href="#" className="btn w-100 mt-2 py-2">Twitter</a>
                    <a href="#" className="btn w-100 mt-2 py-2">Instagram</a>
                </div>
            </div>
       );

};



export default Card;
