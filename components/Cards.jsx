import { Boxes, Earth, LayoutDashboard, Sprout, TrafficCone } from "lucide-react";
import React from "react";
import { GoLaw } from "react-icons/go";
import { RiEarthFill, RiPlantFill } from "react-icons/ri";


export default function Cards({corperData, corperError, corperIsLoading}) {
  return (
    <main>
      <section className="dark:text-lightGray flex gap-8 justify-between">
        <article className="group flex flex-col gap-4 text-white bg-primary-green dark:bg-darkGray w-fit px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-green transition-all duration-500 ease-in-out border-[1px] border-primary-green dark:border-secondary-dark hover:dark:bg-white ">
          <div className="flex items-center gap-6">
            <div>
              {corperIsLoading && <p className="text-3xl font-semibold">Loading...</p>}
              {corperError && <p className="text-3xl font-semibold">Error</p>}
              {corperData && <p className="text-3xl font-semibold">{corperData.length}</p>}
              <p className="group-hover:text-primary-green">Members</p>
            </div>
            <div className="bg-primary w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary dark:group-hover:bg-lightGray transition-all duration-500 ease-in-out">
              <LayoutDashboard />
            </div>
          </div>
          <p className="font-semibold group-hover:text-primary-green">
            All
          </p>
        </article>

        <article className="group flex flex-col gap-4 text-white bg-primary-green dark:bg-darkGray w-fit px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-green transition-all duration-500 ease-in-out border-[1px] border-primary-green dark:border-secondary-dark hover:dark:bg-white ">
          <div className="flex items-center gap-6">
            <div>
              {corperIsLoading && <p className="text-xl font-semibold">Loading...</p>}
              {corperError && <p className="text-xl font-semibold">Error</p>}
              {corperData && <p className="text-3xl font-semibold">{corperData?.filter(data git a=> data.cds == 'anti-corruption').length}</p>}
              <p className="group-hover:text-primary-green">Members</p>
            </div>
            <div className="bg-primary w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary dark:group-hover:bg-lightGray transition-all duration-500 ease-in-out">
              <GoLaw />
            </div>
          </div>
          <p className="font-semibold group-hover:text-primary-green">
            Anti-corruption
          </p>
        </article>

        <article className="group flex flex-col gap-4 text-white bg-primary-green dark:bg-darkGray w-fit px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-green transition-all duration-500 ease-in-out border-[1px] border-primary-green dark:border-secondary-dark hover:dark:bg-white ">
          <div className="flex items-center gap-6">
            <div>
              {corperIsLoading && <p className="text-xl font-semibold">Loading...</p>}
              {corperError && <p className="text-xl font-semibold">Error</p>}
              {corperData && <p className="text-3xl font-semibold">{corperData?.filter(data => data.cds == 'sdgs').length}</p>}
              <p className="group-hover:text-primary-green">Members</p>
            </div>
            <div className="bg-primary w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary dark:group-hover:bg-lightGray transition-all duration-500 ease-in-out">
              <Earth />
            </div>
          </div>
          <p className="font-semibold group-hover:text-primary-green">
            SDGS
          </p>
        </article>

        <article className="group flex flex-col gap-4 text-white bg-primary-green dark:bg-darkGray w-fit px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-green transition-all duration-500 ease-in-out border-[1px] border-primary-green dark:border-secondary-dark hover:dark:bg-white ">
          <div className="flex items-center gap-6">
            <div>
            {corperIsLoading && <p className="text-xl font-semibold">Loading...</p>}
              {corperError && <p className="text-xl font-semibold">Error</p>}
              {corperData && <p className="text-3xl font-semibold">{corperData?.filter(data => data.cds == 'frsc').length}</p>}
              <p className="group-hover:text-primary-green">Members</p>
            </div>
            <div className="bg-primary w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary dark:group-hover:bg-lightGray transition-all duration-500 ease-in-out">
              <TrafficCone />
            </div>
          </div>
          <p className="font-semibold group-hover:text-primary-green">
            FRSC
          </p>
        </article>

        <article className="group flex flex-col gap-4 text-white bg-primary-green dark:bg-darkGray w-fit px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-green transition-all duration-500 ease-in-out border-[1px] border-primary-green dark:border-secondary-dark hover:dark:bg-white ">
          <div className="flex items-center gap-6">
            <div>
            {corperIsLoading && <p className="text-xl font-semibold">Loading...</p>}
              {corperError && <p className="text-xl font-semibold">Error</p>}
              {corperData && <p className="text-3xl font-semibold">{corperData?.filter(data => data.cds == 'agro').length}</p>}
              <p className="group-hover:text-primary-green">Members</p>
            </div>
            <div className="bg-primary w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary dark:group-hover:bg-lightGray transition-all duration-500 ease-in-out">
              <Sprout />
            </div>
          </div>
          <p className="font-semibold group-hover:text-primary-green">
            Agro-allied
          </p>
        </article>
      </section>
    </main>
  );
}
