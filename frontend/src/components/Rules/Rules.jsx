import { useState } from "react";
import { MoreVertical } from "lucide-react";
import Sidebar from '../Sidebar/Sidebar';
import "./Rules.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
function Rules() {
    const [tab, setTab] = useState("general");
    const [menuOpen, setMenuOpen] = useState(null); 

    const generalRules = [
        { id: 1, description: "Lorem ipsum dolor sit amet consectetur.", points: 10 },
        { id: 2, description: "Lorem ipsum dolor sit amet consectetur.", points: 10 },
        { id: 3, description: "Lorem ipsum dolor sit amet consectetur.", points: 10 },
        { id: 4, description: "Lorem ipsum dolor sit amet consectetur.", points: 10 },
        { id: 5, description: "Lorem ipsum dolor sit amet consectetur.", points: 10 },
        { id: 6, description: "Lorem ipsum dolor sit amet consectetur.", points: 10 },
    ];

    const roleSpecificRules = [
        { id: 1, description: "Lorem ipsum dolor sit amet consectetur.", role: "Loot collector", points: 10 },
        { id: 2, description: "Lorem ipsum dolor sit amet consectetur.", role: "Security", points: 10 },
        { id: 3, description: "Lorem ipsum dolor sit amet consectetur.", role: "Security", points: 10 },
        { id: 4, description: "Lorem ipsum dolor sit amet consectetur.", role: "Loot collector", points: 10 },
        { id: 5, description: "Lorem ipsum dolor sit amet consectetur.", role: "Security", points: 10 },
        { id: 6, description: "Lorem ipsum dolor sit amet consectetur.", role: "Loot collector", points: 10 },
    ];

    const rules = tab === "general" ? generalRules : roleSpecificRules;

    const toggleMenu = (id) => {
        setMenuOpen(menuOpen === id ? null : id);
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest(".menu-container")) {
            setMenuOpen(null);
        }
    };

    return (
        <>
            <div className='flex w-screen h-screen' onClick={handleOutsideClick}>
                <div><Sidebar /></div>
                <div className='pb-6 bg-gray-100 flex-1 overflow-auto'>
                    <header className="flex justify-between items-center bg-white shadow-xl h-32 pr-4">
                        <h2 className="Pool-btn text-xl font-bold ml-5">Set Rules</h2>
                        <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-44">
                             <CgProfile className='size-5'/>
                            <span>Username</span>
                            <span className="ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </span>
                        </button>
                    </header>

                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-gray-200 p-1 rounded-md flex space-x-2">
                                <button
                                    onClick={() => setTab("general")}
                                    className={`px-4 py-2 rounded-md ${tab === "general" ? "rule-btn text-white" : ""}`}
                                >
                                    General Rules
                                </button>
                                <button
                                    onClick={() => setTab("role-specific")}
                                    className={`px-4 py-2 rounded-md mr-2 ${tab === "role-specific" ? "rule-btn text-white" : ""}`}
                                >
                                    Role Specific Rules
                                </button>
                            </div>
                            <button className="rule-btn text-white px-4 py-2 rounded-md">
                                + Add Rule
                            </button>
                        </div>
                        <div className="">
                            <table className="w-full border-collapse border rounded-md">
                                <thead>
                                    <tr className=" rule-nav">
                                        <th className="p-2 text-left">S.no.</th>
                                        <th className="p-2 text-left">Rule Description</th>
                                        {tab === "role-specific" && <th className="p-2 text-left">Specified Role</th>}
                                        <th className="p-2 text-left">DKP Points</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rules.map((rule, index) => (
                                        <tr key={rule.id} className="border-t rules-table">
                                            <td className="p-2">{String(index + 1).padStart(2, "0")}</td>
                                            <td className="p-2">{rule.description}</td>
                                            {tab === "role-specific" && <td className="p-2 font-semibold">{rule.role}</td>}
                                            <td className="p-2 font-semibold">{rule.points} Points</td>
                                            <td className="p-2 text-right relative menu-container">
                                                <MoreVertical className="cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleMenu(rule.id); }} />
                                                {menuOpen === rule.id && (
                                                    <div className="absolute right-0 mt-2 w-32 bg-white border shadow-lg rounded-md z-10">
                                                        <Link to = "/RulesAdd" className="block w-full text-left px-4 py-2 hover:bg-gray-100"> View</Link>
                                                        <Link to = "/RulesEdit" className="block w-full text-left px-4 py-2 hover:bg-gray-100"> Edit</Link>
                                                        
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rules;
