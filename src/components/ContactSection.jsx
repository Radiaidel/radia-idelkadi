export function ContactSection(){
    return <>
     <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#64ffda] font-mono mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
          <p className="text-[#8892b0] max-w-md mx-auto mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <a
            href="mailto:idelkadiradia@gmail.com"
            className="border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda]/10 transition-colors inline-block"
          >
            Say Hello
          </a>
        </div>
      </section>
      <hr />
    </>
}