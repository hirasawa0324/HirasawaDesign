import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import "../app/globals.css";
import Link from 'next/link';

function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/data/projects.json');
      const data = await res.json();
      console.log(data);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Works</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={project.url}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105  transition-transform duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="object-cover w-full mt-5 rounded-t-lg "
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                    <p className="text-gray-700 mb-4">完了日数: {project.days}日</p>
                    <div className="flex flex-wrap">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Work;
