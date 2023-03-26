import { Component } from "react"
import {Form, Input, Button} from "./ContactForm.Styled"
export class ContactForm extends Component{
    state = { name:'', number:''}
    onSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
        const key = this.props.addContact(name, number);
        // console.log (key)
        if (key) {
       this.setState({ name:'', number:''})
   }
    };
    onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
    render() {
        return (<Form onSubmit={this.onSubmit}>
          <Input
                onChange={this.onChange}
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Input
            onChange={this.onChange}
            placeholder="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button>Add contact</Button>
        </Form>)
    }
}
