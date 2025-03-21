import React, { useState } from "react";
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
const students = [
  {
    id: 1,
    name: "Alice Johnson",
    domain: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    email: "alice@example.com",
    more: "Loves React and Tailwind CSS",
    age: 25,
    gender: "Female",
    skills: "React, Tailwind, JavaScript",
  },
  {
    id: 2,
    name: "Bob Smith",
    domain: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    email: "bob@example.com",
    more: "Passionate about design and creativity",
    age: 28,
    gender: "Male",
    skills: "UI/UX, Figma, Sketch",
  },
  {
    id: 3,
    name: "Charlie Brown",
    domain: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    email: "charlie@example.com",
    more: "Enjoys problem-solving and clean code",
    age: 30,
    gender: "Male",
    skills: "Java, C++, Python",
  },
  {
    id: 4,
    name: "Diana Prince",
    domain: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    email: "diana@example.com",
    more: "Expert in machine learning and AI",
    age: 27,
    gender: "Female",
    skills: "Python, R, Machine Learning",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    domain: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "ethan@example.com",
    more: "Focused on building scalable systems",
    age: 32,
    gender: "Male",
    skills: "Node.js, Express, MongoDB",
  },
  {
    id: 6,
    name: "Fiona Davis",
    domain: "AI Specialist",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    email: "fiona@example.com",
    more: "Works on innovative AI projects",
    age: 29,
    gender: "Female",
    skills: "Python, TensorFlow, PyTorch",
  },
  {
    id: 7,
    name: "George Wilson",
    domain: "Cybersecurity Expert",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    email: "george@example.com",
    more: "Protects systems from security threats",
    age: 35,
    gender: "Male",
    skills: "Security, Networking, Python",
  },
  {
    id: 8,
    name: "Hannah Lee",
    domain: "Machine Learning Engineer",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    email: "hannah@example.com",
    more: "Develops ML models for various applications",
    age: 26,
    gender: "Female",
    skills: "Python, Scikit-Learn, ML",
  },
  {
    id: 9,
    name: "Ian Wright",
    domain: "Game Developer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    email: "ian@example.com",
    more: "Passionate about interactive experiences",
    age: 31,
    gender: "Male",
    skills: "Unity, C#, Game Design",
  },
  {
    id: 10,
    name: "Jasmine Carter",
    domain: "Cloud Engineer",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    email: "jasmine@example.com",
    more: "Specializes in cloud infrastructure and services",
    age: 27,
    gender: "Female",
    skills: "AWS, Azure, DevOps",
  },
  {
    id: 11,
    name: "Kevin Parker",
    domain: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    email: "kevin@example.com",
    more: "Enjoys working with both front and back end",
    age: 30,
    gender: "Male",
    skills: "JavaScript, React, Node.js",
  },
  {
    id: 12,
    name: "Laura Green",
    domain: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "laura@example.com",
    more: "Creates stunning visuals and designs",
    age: 24,
    gender: "Female",
    skills: "Photoshop, Illustrator, Creativity",
  },
  {
    id: 13,
    name: "Michael Scott",
    domain: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    email: "michael@example.com",
    more: "Optimizes development processes and pipelines",
    age: 34,
    gender: "Male",
    skills: "Docker, Kubernetes, CI/CD",
  },
  {
    id: 14,
    name: "Nancy Drew",
    domain: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    email: "nancy@example.com",
    more: "Expert in online marketing strategies",
    age: 29,
    gender: "Female",
    skills: "SEO, Content, Social Media",
  },
  {
    id: 15,
    name: "Oliver Queen",
    domain: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    email: "oliver@example.com",
    more: "Leads teams and product vision",
    age: 33,
    gender: "Male",
    skills: "Leadership, Communication, Agile",
  },
  {
    id: 16,
    name: "Pam Beesly",
    domain: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    email: "pam@example.com",
    more: "Turns data into actionable insights",
    age: 28,
    gender: "Female",
    skills: "Excel, SQL, Tableau",
  },
  {
    id: 17,
    name: "Quentin Tarantino",
    domain: "Content Writer",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    email: "quentin@example.com",
    more: "Writes engaging and creative content",
    age: 45,
    gender: "Male",
    skills: "Writing, Storytelling, Creativity",
  },
  {
    id: 18,
    name: "Rachel Green",
    domain: "Software Tester",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    email: "rachel@example.com",
    more: "Ensures software quality and performance",
    age: 26,
    gender: "Female",
    skills: "Testing, Automation, Selenium",
  },
  {
    id: 19,
    name: "Samuel Jackson",
    domain: "Network Engineer",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    email: "samuel@example.com",
    more: "Maintains robust network infrastructure",
    age: 38,
    gender: "Male",
    skills: "Networking, Cisco, Troubleshooting",
  },
  {
    id: 20,
    name: "Tina Turner",
    domain: "Tech Support Specialist",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    email: "tina@example.com",
    more: "Provides exceptional technical support",
    age: 31,
    gender: "Female",
    skills: "Support, Troubleshooting, Communication",
  },
];

const Teammate = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtering based on the selected category.
  const filteredStudents = students.filter((student) => {
    const searchQuery = search.toLowerCase();
    switch (selectedCategory) {
      case "all":
        return (
          student.name.toLowerCase().includes(searchQuery) ||
          student.domain.toLowerCase().includes(searchQuery) ||
          student.age.toString().includes(searchQuery) ||
          student.gender.toLowerCase().includes(searchQuery) ||
          student.skills.toLowerCase().includes(searchQuery)
        );
      case "name":
        return student.name.toLowerCase().includes(searchQuery);
      case "domain":
        return student.domain.toLowerCase().includes(searchQuery);
      case "age":
        return student.age.toString().includes(searchQuery);
      case "gender":
        return student.gender.toLowerCase().includes(searchQuery);
      case "skills":
        return student.skills.toLowerCase().includes(searchQuery);
      default:
        return false;
    }
  });

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Instruction Text */}
      <div className="text-center mb-4">
        <p className="text-xl font-semibold text-primary">
          Find a teammate with your desired domain
        </p>
      </div>
      {/* Search Bar & Dropdown */}
      <div className="flex justify-center items-center mb-6 space-x-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select select-bordered"
        >
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="domain">Role</option>
          <option value="age">Age</option>
          <option value="gender">Gender</option>
          <option value="skills">Skills</option>
        </select>
      </div>
      {/* Flip Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div key={student.id} className="flip-card h-72">
              <div className="flip-card-inner h-full">
                {/* Front Side */}
                <div className="flip-card-front h-full bg-base-100 shadow-lg rounded-lg p-4 flex flex-col items-center border border-primary">
                  <img
                    className="w-24 h-24 rounded-full border-2 border-primary"
                    src={student.image}
                    alt={student.name}
                  />
                  <h2 className="mt-4 text-lg font-bold text-primary">
                    {student.name}
                  </h2>
                  <p className="text-secondary">{student.domain}</p>
                  <button className="mt-3 btn btn-primary">Connect</button>
                </div>
                {/* Back Side */}
                <div className="flip-card-back h-full bg-primary text-base-100 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
                  <h2 className="text-lg font-bold">More Info</h2>
                  <p className="mt-2">{student.email}</p>
                  <p className="mt-2">{student.more}</p>
                  <p className="mt-3 text-lg font-medium">Contact</p>
                  {/* Social Icons */}
                  <div className="flex space-x-4 mt-3">
                    {/* LinkedIn Icon */}
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 border-2 border-base-100 rounded-full hover:bg-base-100 hover:text-primary transition duration-300"
                    >
                      <Instagram />

                    </a>
                    {/* LeetCode Icon */}
                    <a
                      href="https://leetcode.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 border-2 border-base-100 rounded-full hover:bg-base-100 hover:text-primary transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <MessageCircle />
                      </svg>
                    </a>
                    {/* GitHub Icon */}
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 border-2 border-base-100 rounded-full hover:bg-base-100 hover:text-primary transition duration-300"
                    >
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-64 col-span-full">
            <p className="text-center text-error text-xl font-bold animate-bounce">
              Oops! Couldn't find your teammates.
            </p>
          </div>
        )}
      </div>
      {/* Flip Card Styles */}
      <style jsx="true">{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.5rem;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Teammate;