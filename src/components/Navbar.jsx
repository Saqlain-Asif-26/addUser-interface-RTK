import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>Welcome, to Trexperia Education Hub</div>
      <h1 className="text-6xl">Admin Table</h1>

      <section>
        <div>One Destination for complete Web Development</div>
        <nav className="mx-[0] my-12 bg-[#f9f9f9] px-[0] py-4">
          <ul className="[list-style:none] flex flex-wrap justify-between">
            <li className="mx-20 my-[1.6rem] [@media_screen_and(max-width:998px)]:mx-20 [@media_screen_and(max-width:998px)]:my-[0.6rem]">
              <a className="no-underline text-[20px] font-normal [transition:all_0.5s_ease-in-out] relative uppercase [@media_screen_and(max-width:998px)]:mx-20 [@media_screen_and(max-width:998px)]:my-[0.6rem] before:w-full before:[transition:all_0.5s_ease-in-out]" href="/" data-item="Home">
                Home
              </a>
            </li>
            <li className="mx-20 my-[1.6rem] [@media_screen_and(max-width:998px)]:mx-20 [@media_screen_and(max-width:998px)]:my-[0.6rem]">
              <a className="no-underline text-[20px] font-normal [transition:all_0.5s_ease-in-out] relative uppercase [@media_screen_and(max-width:998px)]:mx-20 [@media_screen_and(max-width:998px)]:my-[0.6rem] before:w-full before:[transition:all_0.5s_ease-in-out]" href="/" data-item="About">
                About
              </a>
            </li>
            <li className="mx-20 my-[1.6rem] [@media_screen_and(max-width:998px)]:mx-20 [@media_screen_and(max-width:998px)]:my-[0.6rem]">
              <a className="no-underline text-[20px] font-normal [transition:all_0.5s_ease-in-out] relative uppercase [@media_screen_and(max-width:998px)]:mx-20 [@media_screen_and(max-width:998px)]:my-[0.6rem] before:w-full before:[transition:all_0.5s_ease-in-out]" href="/" data-item="Projects">
                Projects
              </a>
            </li>
            <li className="mx-20 my-[1.6rem] [@media_screen_and(max-width:998px)]:mx-20 [@media_screen_and(max-width:998px)]:my-[0.6rem]">
              <a className="no-underline text-[20px] font-normal [transition:all_0.5s_ease-in-out] relative uppercase [@media_screen_and(max-width:998px)]:mx-20 [@media_screen_and(max-width:998px)]:my-[0.6rem] before:w-full before:[transition:all_0.5s_ease-in-out]" href="/" data-item="Code">
                Code
              </a>
            </li>
            <li className="mx-20 my-[1.6rem] [@media_screen_and(max-width:998px)]:mx-20 [@media_screen_and(max-width:998px)]:my-[0.6rem]">
              <a className="no-underline text-[20px] font-normal [transition:all_0.5s_ease-in-out] relative uppercase [@media_screen_and(max-width:998px)]:mx-20 [@media_screen_and(max-width:998px)]:my-[0.6rem] before:w-full before:[transition:all_0.5s_ease-in-out]" href="/" data-item="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Navbar