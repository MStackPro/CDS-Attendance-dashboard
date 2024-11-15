import { Boxes, Earth, LayoutDashboard, Sprout, TrafficCone } from "lucide-react";
import React from "react";
import CountUp from "react-countup";
import { GoLaw } from "react-icons/go";


export default function Cards({corperData, corperError, corperIsLoading}) {
  return (
    <main>
      <section className="dark:text-lightGray grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-8">
        <article className="hidden group xl:flex flex-col gap-4 text-white bg-primary-green dark:bg-primary-green w-fit px-6 py-2 rounded-lg hover:bg-primary-green hover:text-primary-green transition-all duration-500 ease-in-out border-[1px] border-primary-green dark:border-secondary-dark">
          <div className="flex items-center gap-6">
            <div>
              {corperIsLoading && <p className="text-sm font-semibold">Loading...</p>}
              {corperError && <p className="text-3xl font-semibold text-red-500">Error</p>}
              {corperData && (
                <CountUp
                  end={
                    corperData.length
                  }
                  duration={3}
                  delay={0.5}
                  className="text-3xl font-semibold group-hover:text-black"
                />
              )}
              <p className="group-hover:text-black">Members</p>
            </div>
            <div className="bg-white w-fit p-2 rounded-full text-primary-green text-3xl group-hover:bg-white transition-all duration-500 ease-in-out">
              <LayoutDashboard />
            </div>
          </div>
          <p className="font-semibold group-hover:text-black">
            All
          </p>
        </article>

        <article className="group flex flex-col gap-4 bg-white dark:bg-darkGray w-fit px-4 xl:px-6 py-2 rounded-lg hover:bg-primary-green transition-all duration-500 ease-in-out">
          <div className="flex items-center gap-6">
            <div>
              {corperIsLoading && <p className="text-sm">Loading...</p>}
              {corperError && <p className="text-sm font-semibold">Error</p>}
              {corperData && (
                <CountUp
                  end={
                    corperData.filter((data) => data.cds == "anti-corruption")
                      .length
                  }
                  duration={3}
                  delay={0.5}
                  className="text-3xl font-semibold"
                />
              )}
              <p className="group-hover:text-white">Members</p>
            </div>
            <div className="bg-primary-green w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary group-hover:text-primary-green dark:group-hover:bg-white transition-all duration-500 ease-in-out">
              <GoLaw />
            </div>
          </div>
          <p className="font-semibold group-hover:text-white">
            Anti-corruption
          </p>
        </article>

        <article className="group flex flex-col gap-4 bg-white dark:bg-darkGray w-fit px-4 xl:px-6 py-2 rounded-lg hover:bg-primary-green transition-all duration-500 ease-in-out">
          <div className="flex items-center gap-6">
            <div>
              {corperIsLoading && <p className="text-sm">Loading...</p>}
              {corperError && <p className="text-sm font-semibold">Error</p>}
              {corperData && (
                <CountUp
                  end={corperData.filter((data) => data.cds == "sdgs").length}
                  duration={3}
                  delay={0.5}
                  className="text-3xl font-semibold"
                />
              )}
              <p className="group-hover:text-white">Members</p>
            </div>
            <div className="bg-primary-green w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary-green dark:group-hover:bg-white transition-all duration-500 ease-in-out">
              <Earth />
            </div>
          </div>
          <p className="font-semibold group-hover:text-white">SDGS</p>
        </article>

        <article className="group flex flex-col gap-4 bg-white dark:bg-darkGray w-fit px-4 xl:px-6 py-2 rounded-lg hover:bg-primary-green transition-all duration-500 ease-in-out">
          <div className="flex items-center gap-6">
            <div>
              {corperIsLoading && <p className="text-sm">Loading...</p>}
              {corperError && <p className="text-sm font-semibold">Error</p>}
              {corperData && (
                <CountUp
                  end={corperData.filter((data) => data.cds == "frsc").length}
                  duration={3}
                  delay={0.5}
                  className="text-3xl font-semibold"
                />
              )}
              <p className="group-hover:text-white">Members</p>
            </div>
            <div className="bg-primary-green w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary-green dark:group-hover:bg-white transition-all duration-500 ease-in-out">
              <TrafficCone />
            </div>
          </div>
          <p className="font-semibold group-hover:text-white">FRSC</p>
        </article>

        <article className="group flex flex-col gap-4 bg-white dark:bg-darkGray w-fit px-4 xl:px-6 py-2 rounded-lg hover:bg-primary-green transition-all duration-500 ease-in-out">
          <div className="flex items-center gap-6">
            <div>
              {corperIsLoading && <p className="text-sm">Loading...</p>}
              {corperError && <p className="text-sm font-semibold">Error</p>}
              {corperData && (
                <CountUp
                  end={corperData.filter((data) => data.cds == "agro").length}
                  duration={3}
                  delay={0.5}
                  className="text-3xl font-semibold"
                />
              )}
              <p className="group-hover:text-white">Members</p>
            </div>
            <div className="bg-primary-green w-fit p-2 rounded-full text-white text-3xl group-hover:bg-white group-hover:text-primary-green dark:group-hover:bg-white transition-all duration-500 ease-in-out">
              <Sprout />
            </div>
          </div>
          <p className="font-semibold group-hover:text-white">Agro-allied</p>
        </article>
      </section>
    </main>
  );
}
