import React from 'react';
import Carousel from './components/Carousel';
import Button from './components/Button';

const App = () => {

    let images = [
        "https://picsum.photos/id/666/900/400",
        "https://picsum.photos/id/999/900/400",
        "https://picsum.photos/id/121/900/400",
        "https://picsum.photos/id/348/900/400",
        "https://picsum.photos/id/222/900/400",
    ]

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Carousel images={images} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 py-2">
                    <Button className="btn btn-warning mx-1"> 
                        <i className="fa-solid fa-home"></i> Button 1
                    </Button>
                    <Button className="btn btn-primary mx-1">
                        <i className="fa-brands fa-facebook"></i> Button 2
                    </Button>
                    <Button className="btn btn-info mx-1">
                        <i className="fa-regular fa-paper-plane"></i> Button 3
                    </Button>

                    <Button className="btn btn-danger mx-1" text="Eliminar" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th colSpan={2} width="10%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john.doe@gmail.com</td>
                                <td><Button className={"btn btn-primary"}><i className="fa-solid fa-edit"></i></Button></td>
                                <td><Button className={"btn btn-danger"}><i className="fa-solid fa-trash"></i></Button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Doe</td>
                                <td>john.doe@gmail.com</td>
                                <td><Button className={"btn btn-primary"}><i className="fa-solid fa-edit"></i></Button></td>
                                <td><Button className={"btn btn-danger"}><i className="fa-solid fa-trash"></i></Button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default App;