// static site genration => 'ssg' techniqe
const getProjects = async() => {
    const res =  await fetch("https://alhady21.runasp.net/api/Donations/GetAllSections", {
        // this state in 'ssg' techniqe
        // cache: "force-cache" 
    
        // this state in 'isg' techniqe, 60s at build the page
        next: {revalidate: 60}
    });

    if (!res) throw new Error("Failed to fetch data");
    

    const data =  await res.json()    

     console.log(data);
     
    // return data projects
    return  data
}


interface Project {
    sectionID: number;
    name: string;
}

const Blog: React.FC  = async () => {
    const projects =  await getProjects();

    console.log(projects);
    
    return (
        <div className="bg-[#EEE] p-4 rounded-lg">
            <h2 className="text-2xl text-blue-400 font-semibold mb-1">SSG Techniqe</h2>
            <p className="text-black/70 leading-6 text-lg mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dicta. Nemo, cupiditate, labore vero molestiae non, eos repellendus culpa dolore aspernatur architecto molestias. Veniam quia soluta architecto recusandae ex atque.</p>
            

            <div className="bg-white p-4 rounded-lg">
                {projects.map((ele:Project) => (
                    <div key={ele.sectionID} className="mb-3">
                        <h3 className="text-2xl text-right bg-[#EEE] p-2 rounded-sm">{ele.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Blog;