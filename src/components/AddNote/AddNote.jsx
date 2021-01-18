import React, {Component} from 'react';

class AddNote extends Component {
    state = {
        invalidForm: true,
        formData: {
          note: "",
        },
        resources: [],
      };
    
      formRef = React.createRef();
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddNote(this.state.formData);
      };
    
      handleChange = (e) => {
        const formData = {
          ...this.state.formData,
          [e.target.name]: e.target.value,
        };
        this.setState({
          formData,
          invalidForm: !this.formRef.current.checkValidity(),
        });
      };

    render() { 
        return (
            <>
            <div className="comment box">
            <form ref={this.formRef} onSubmit={this.handleSubmit}>
            <input name="note" type="text" value={this.state.formData.note} onChange={this.handleChange}></input>
                <button>Add Note</button>
            </form>
            </div>
            </>
        );
    }
}
 

   
  export default AddNote;