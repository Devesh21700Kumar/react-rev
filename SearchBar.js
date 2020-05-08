import React from 'react';

class SearchBar extends React.Component{
    state ={term: 'gg'};

    onInputChange=(event)=>{
        this.setState({term: event.target.value});
    };


onFormSubmit=event=>{
event.preventDefault();
//TO DO:make sure we call callback
//from parent Component
this.props.onFormSubmit(this.state.term);
};



render()
{
    return(
    <div className='search-bar ui segment'>
        <form onSubmit={this.onSubmit} className='ui form'>
          <div className='field'>
        <label>Video Search</label>
        <input type ='text' placeholder='jagga jitteya' 
        value={this.state.term}
        onChange={this.onInputChange}/>
        </div>  
        </form>
        </div>
    );
}
    


}


export default SearchBar;