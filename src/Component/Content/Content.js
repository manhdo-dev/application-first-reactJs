import React, { Component } from 'react'; 
class Content extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    editClick = () => {
        this.setState({ count : 1})
    }

    remove = () => {
        alert("Remove")
    }

    saveClick = () => {
        this.setState({ count : 0 })
    }

    // restore = (x) => {
    //     alert(x)
    // }

    // create = (y) => {
    //     alert(y)
    // }

    renderButton = () => {
        return (
            <div className="row">
                <div className="btn btn-group">
                    <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div> {/* goi theo kieu thong thuong */}
                    <div className="btn btn-warning" onClick={() => this.remove()}>Remove</div> {/* goi theo kieu arrow function voi ham khong co tham so*/}
                    {/* <div className="btn btn-danger" onClick={()=> this.restore('variable x')}>Restore</div> goi theo kieu arrow function */}
                    {/* <div className="btn btn-success" onClick={this.create.bind(this, "variable y")}>Create</div> goi theo kieu binding */}
                </div>
            </div>
        )
    }

    renderForm = () => {
        return (
            <div className="row">
                <div className="form-inline" style={{marginLeft: 13}}>
                    <input defaultValue={this.props.title} type="text" name="name" className="form-control"/>&nbsp;
                    <div className="btn btn-success" onClick={() => this.saveClick()}>Save</div>
                </div>
            </div>
        )
    }

    displayCheck = () => {
        if(this.state.count === 0) {
            return this.renderButton();
        } else {
            return this.renderForm();
        }

    }

    render() { 
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className={this.props.order2}>
                                <div className="p-5">
                                    <img className="img-fluid rounded-circle" src={this.props.img} alt="" />
                                </div>
                            </div>
                            <div className={this.props.order1}>
                                <div className="p-5">
                                    <h2 className="display-4">{this.props.title}</h2>
                                    <p>{this.props.content}</p>
                                    {this.displayCheck()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        ); 
    } 
} 
export default Content;