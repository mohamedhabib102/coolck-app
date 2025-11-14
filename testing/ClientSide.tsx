"use client";
import { useEffect, useState } from "react";
interface Project {
  sectionID: number;
  name: string;
}
const ClientSide: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const getProjects = async () => {
    try {
      const res = await fetch("https://example.runasp.net/api/Donations/GetAllSections");
      if (!res.ok) {
        console.warn("API returned an error:", res.status);
        return;
      }
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div className="bg-[#EEE] p-4 rounded-lg">
      <h2 className="text-2xl text-blue-400 font-semibold mb-1">CSR Technique</h2>
      <p className="text-black/70 leading-6 text-lg mb-5">
      Lorem ipsum dolor sit amet.
      </p>

      <div className="bg-white p-4 rounded-lg">
        {projects.map((ele) => (
          <div key={ele.sectionID} className="mb-3">
            <h3 className="text-2xl text-right bg-[#EEE] p-2 rounded-sm">{ele.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ClientSide;
