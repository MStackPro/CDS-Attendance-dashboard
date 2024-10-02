import React from "react";
import { GoLaw } from "react-icons/go";
import { RiEarthFill, RiPlantFill } from "react-icons/ri";


export default function Cards() {
  return (
    <main>
      <section className="dark:text-lightGray flex justify-between">
        <article className="group flex flex-col gap-4 bg-white dark:bg-darkGray w-fit px-4 py-2 rounded-lg hover:bg-primary transition-all duration-500 ease-in-out">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-3xl font-semibold">40</p>
              <p className="group-hover:text-white">Members</p>
            </div>
            <div className="bg-primary w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary dark:group-hover:bg-lightGray transition-all duration-500 ease-in-out">
              <GoLaw />
            </div>
          </div>
          <p className="font-semibold group-hover:text-white">
            Anti-corruption
          </p>
        </article>

        <article className="group flex flex-col gap-4 bg-white dark:bg-darkGray w-fit px-4 py-2 rounded-lg hover:bg-primary transition-all duration-500 ease-in-out">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-3xl font-semibold">32</p>
              <p className="group-hover:text-white">Members</p>
            </div>
            <div className="bg-primary w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary dark:group-hover:bg-lightGray transition-all duration-500 ease-in-out">
              <RiEarthFill />
            </div>
          </div>
          <p className="font-semibold group-hover:text-white">
            SDGS
          </p>
        </article>

        <article className="group flex flex-col gap-4 bg-white dark:bg-darkGray w-fit px-4 py-2 rounded-lg hover:bg-primary transition-all duration-500 ease-in-out">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-3xl font-semibold">44</p>
              <p className="group-hover:text-white">Members</p>
            </div>
            <div className="bg-primary w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary dark:group-hover:bg-lightGray transition-all duration-500 ease-in-out">
              <GoLaw />
            </div>
          </div>
          <p className="font-semibold group-hover:text-white">
            FRSC
          </p>
        </article>

        <article className="group flex flex-col gap-4 bg-white dark:bg-darkGray w-fit px-4 py-2 rounded-lg hover:bg-primary transition-all duration-500 ease-in-out">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-3xl font-semibold">40</p>
              <p className="group-hover:text-white">Members</p>
            </div>
            <div className="bg-primary w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary dark:group-hover:bg-lightGray transition-all duration-500 ease-in-out">
              <RiPlantFill />
            </div>
          </div>
          <p className="font-semibold group-hover:text-white">
            Agro-allied
          </p>
        </article>
      </section>
    </main>
  );
}
