import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function ContactFormComponent() {
  let frm=[];
  const classes = useStyles();
  const handleSubmit = (e)=> {
    e.preventDefault()
      alert('Your Message has been sent.')
  }
  const handleChange= (e)=>{
    e.preventDefault()
    frm[e.target.name]=e.target.value

    // console.log(e.taget)

  }
  return (
    <form id="contact-form" onSubmit={handleSubmit.bind(this)} >
    <div className="form-group">
        <label htmlFor="name" style={{color:'white'}}>Name</label>
        <input required type="text" className="form-control" name="name" onChange={handleChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1" style={{color:'white'}}>Email address</label>
        <input required type="email" className="form-control" name="email" aria-describedby="emailHelp" onChange={handleChange.bind(this)}/>
    </div>
    <div className="form-group">
        <label htmlFor="message" style={{color:'white'}}>Message</label>
        <textarea required className="form-control" rows="5" name="message" onChange={handleChange.bind(this)}></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
  );
}


