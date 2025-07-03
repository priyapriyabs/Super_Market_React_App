function Footer(){
    const footerStyle={
         backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: 0,
    width: '100%'
    };
    return(
<footer style={footerStyle}>

     <p>&copy; 2025 My Website..</p>
</footer>
    );
}

export default Footer;