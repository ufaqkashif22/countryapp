export const Contact =()=>{
    const handleForm =(formData)=>{
        // console.log(formData.entries())
        const formInputData= Object.fromEntries(formData.entries());
        console.log(formInputData);
        
    }
    return (
        <>
            <section className="section-contact">
                <h2 className="container-titles">Contact Us</h2>
                <div className="contact-wrapper container">
                <form action={handleForm}>
                    <input 
                    className="form-control"
                    type="text"
                    required 
                    placeholder="Enter your name"
                    name="username"
                    autoComplete="off"
                     />

                    <input 
                    type="email"
                    className="form-control"
                    required 
                    placeholder="Enter your email"
                    name="email"
                    autoComplete="off"
                     />

                    <textarea 
                    rows="10"
                    required 
                    className="form-control"
                    placeholder="Enter your message"
                    name="message"
                    autoComplete="off"
                     ></textarea>
                     <button type="submit" value="send">send</button>
                </form>
                </div>
            </section>
        </>
    )
}