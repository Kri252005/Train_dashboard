function Topbar({ toggleSidebar }) {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl">
        ☰
      </button>
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Welcome 👋</h1>
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          🌓 Toggle Dark
        </button>
      </div>
    </div>
  );
}

export default Topbar;