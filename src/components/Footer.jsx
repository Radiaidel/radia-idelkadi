export function Footer(){
    
    return <>      

      <footer className="bg-[#0a192f] py-8 text-center">
        <div className="container mx-auto px-4 flex justify-between items-center ">
          <p className="text-[#8892b0] text-sm ">
            Designed & Built by <span className="text-[#64ffda]">idelkadi-radia</span>
          </p>

          <p className="text-[#8892b0] text-xs ">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </>

}