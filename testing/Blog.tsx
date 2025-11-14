// static site genration => ssg/ssr/isr techniqes
interface Project {
    sectionID: number;
    name: string;
}
const getProjects = async() => {
    try {
         const res =  await fetch(
            "https://example.runasp.net/api/Donations/GetAllSections", {
             cache: "force-cache", // It runs on request in the case of ssg
             // next: {revalidate: 30} // It runs on request in the case of ISR
             //cache: "no-store", // It runs on request in the case of ssr
         });
         if (!res.ok){
            console.warn("API returned an error:", res.status);
             return []; // fallback data
         }
         const data =  await res.json()   
         console.log(data);

         // return data projects
         return  data
    } catch (error) {
       console.log(error);
       return []
}}
const Blog: React.FC  = async () => {
    const projects =  await getProjects();
    console.log(projects);
    return (
        <div className="bg-[#EEE] p-4 rounded-lg">
            <h2 className="text-2xl text-blue-400 font-semibold mb-1">SSG Techniqe</h2>
            <p className="text-black/70 leading-6 text-lg mb-5">Lorem ipsum dolor sit amet.</p>
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