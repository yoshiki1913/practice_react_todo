import React from "react";

function Filter({value, onChange}) {
    const handleClick = (key, e) => {
        e.preventDefault();
        onChange(key);
    }

    return (
            <div className="bg-white">
                <nav className="flex flex-col sm:flex-row">
                    <a
                        href="#"
                        className="text-purple-600 py-4 px-6 block hover:text-purple-600 focus:outline-none text-purple-600 border-b-2 font-medium text-purple-600"
                        onClick={handleClick.bind(null, 'ALL')}
                    >
                        すべて
                    </a>
                    <a
                        href="#"
                        className="text-purple-600 py-4 px-6 block hover:text-purple-600 focus:outline-none"
                        onClick={handleClick.bind(null, 'TODO')}
                    >
                        未完了
                    </a>
                    <a
                        href="#"
                        className="text-purple-600 py-4 px-6 block hover:text-purple-600 focus:outline-none"
                        onClick={handleClick.bind(null, 'DONE')}
                    >
                        完了
                    </a>
                </nav>
            </div>
    );

}

export default Filter;