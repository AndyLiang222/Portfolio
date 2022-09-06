import './App.css';
import contacts from './Contacts.json'
function Contacts() {
    const tacts = contacts.contacts.map((value) => {
        return <a href={value.link}><img className='Contacts-Img' src={require(`${value.icon}`)}></img></a> 
    });
    return (
        <div className='Contacts'>
            <h1 className='Contacts-Title'>Contact Me</h1>
            <div className='Contacts-Info'>
                <div className='Contacts-Wrapper'>
                    {tacts}
                </div>
            </div>
        </div>
    );
}
  
export default Contacts;