import './App.css';
import Contacts from './Contacts';
import Nav from './Nav';

function Contact() {
    return (
        <div className='Contact'>
            <Nav/>
            <div className='Contact-Info'>
                <h1>Andy Liang</h1>
            </div>
           
            <Contacts/>
        </div>
    );
}
export default Contact;