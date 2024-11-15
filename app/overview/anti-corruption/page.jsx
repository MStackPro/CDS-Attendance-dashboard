"use client";

import { Button } from "@/components/ui/button";
import {
  Avatar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import toast, { Toaster } from "react-hot-toast";
import useSWRMutation from "swr/mutation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

async function sendRequest(url, { arg }) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  });
}

export default function AntiCorruption() {
  const [corpers, setCorpers] = useState();
  const pathname = usePathname();
  const [selectedCorper, setSelectedCorper] = useState();

  useEffect(() => {
    setCorpers((prevState) => ({
      ...prevState,
      cds: "anti-corruption",
    }));
  }, []);

  const {
    data: corperData,
    error: corperError,
    isLoading: corperIsLoading,
    mutate: corperMutate,
  } = useSWR("/api/getCorpers", fetcher);

  const handleAdd = async () => {
    const response = await fetch("/api/createCorper", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(corpers),
    });
    const content = await response.json();
    console.log(content);
    if (content.message === "Something went wrong") {
      return toast.error("Something went wrong");
    } else {
      corperMutate();
      return toast.success("Corper created successfully!");
    }
  };

  return (
    <main className="flex flex-col space-y-4">
      <Toaster />
      <section className="flex items-center justify-between bg-white dark:bg-darkGray py-4 px-4 rounded-lg">
        <div className="xl:text-2xl font-semibold capitalize text-primary dark:text-lightGray">
          {pathname.split("/").pop()}
        </div>
        <div className="flex items-center justify-end ">
          <div>
          <AlertDialog>
              <AlertDialogTrigger className="bg-primary-green text-white py-2 px-5 rounded-md">
                Add New
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white dark:bg-darkGray dark:border dark:border-none w-[90%] xl:w-full rounded-xl">
                <AlertDialogHeader>
                  <AlertDialogTitle className="dark:text-white">Add New Corps Member</AlertDialogTitle>
                  <fieldset className="flex flex-col gap-2">
                    <label htmlFor="" className="text-left dark:text-white">Name</label>
                    <input
                      onChange={(e) => {
                        setCorpers((prevState) => ({
                          ...prevState,
                          full_name: e.target.value,
                        }));
                      }}
                      type="text"
                      className="border-[1px] p-2 rounded-md outline-none dark:bg-lightGray/10 text-white dark:border-none"
                    />
                  </fieldset>
                  <fieldset className="flex flex-col gap-2">
                    <label htmlFor="" className="text-left dark:text-white">State Code</label>
                    <input
                      onChange={(e) => {
                        setCorpers((prevState) => ({
                          ...prevState,
                          state_code: e.target.value,
                        }));
                      }}
                      type="text"
                      className="border-[1px] p-2 rounded-md outline-none dark:bg-lightGray/10 text-white dark:border-none"
                    />
                  </fieldset>
                  <fieldset className="flex flex-col gap-2">
                    <label htmlFor="" className="text-left dark:text-white">PPA</label>
                    <input
                      onChange={(e) => {
                        setCorpers((prevState) => ({
                          ...prevState,
                          ppa: e.target.value,
                        }));
                      }}
                      type="text"
                      className="border-[1px] p-2 rounded-md outline-none dark:bg-lightGray/10 text-white dark:border-none"
                    />
                  </fieldset>
                  <fieldset className="flex flex-col gap-2">
                    <label htmlFor="" className="text-left dark:text-white">State of Origin</label>
                    <input
                      onChange={(e) => {
                        setCorpers((prevState) => ({
                          ...prevState,
                          state: e.target.value,
                        }));
                      }}
                      type="text"
                      className="border-[1px] p-2 rounded-md outline-none dark:bg-lightGray/10 text-white dark:border-none"
                    />
                  </fieldset>
                  <fieldset className="flex flex-col gap-2">
                    <label htmlFor="" className="text-left dark:text-white">Phone Number</label>
                    <input
                      onChange={(e) => {
                        setCorpers((prevState) => ({
                          ...prevState,
                          phone_number: e.target.value,
                        }));
                      }}
                      type="text"
                      className="border-[1px] p-2 rounded-md outline-none dark:bg-lightGray/10 text-white dark:border-none"
                    />
                  </fieldset>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="hover:bg-red-500 hover:text-white border-red-500 text-red-500">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="text-white bg-primary-green border-[1px] hover:bg-white hover:text-primary-green hover:border-primary-green dark:border-none"
                    onClick={handleAdd}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
          </AlertDialog>
          </div>
        </div>
      </section>

      <TableContainer
        className="bg-white dark:bg-darkGray h-fit p-4 rounded-xl flex flex-col gap-10"
      >
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="grid grid-cols-5">
              <TableCell align="left" className="dark:text-white font-semibold">Name</TableCell>
              <TableCell align="left" className="dark:text-white font-semibold">State code</TableCell>
              <TableCell align="left" className="dark:text-white font-semibold">PPA</TableCell>
              <TableCell align="left" className="dark:text-white font-semibold">Attendance</TableCell>
              <TableCell align="left" className="pl-12 dark:text-white font-semibold">
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          {corperIsLoading && (
            <div>
              <p>Loading...</p>
            </div>
          )}

          {corperError && (
            <div>
              <p>Error Loading Page</p>
            </div>
          )}

          {corperData && (
            <TableBody>
              {corperData
                .filter((data) => data.cds == "anti-corruption")
                .map((item) => (
                  <TableRow key={item.parent_id} className="grid grid-cols-5">
                    <TableCell
                      align="left"
                      className="flex items-center gap-2"
                      component="th"
                      scope="row"
                    >
                      <Avatar src="" alt={item.full_name} />
                      <p className="capitalize text-[13px] dark:text-white">
                        {item.full_name.slice(0, 10)}...
                      </p>
                    </TableCell>
                    <TableCell align="left" className="uppercase text-[13px] dark:text-white">
                      {item.state_code}
                    </TableCell>
                    <TableCell align="left" className="uppercase text-[13px] dark:text-white">
                      {item.ppa.slice(0, 10)}...
                    </TableCell>
                    <TableCell align="left" className="flex items-center gap-3 dark:text-white">
                      <div className="flex items-center gap-2 text-[13px]">
                        Present
                        <input
                          type="radio"
                          name={`attend-${item.parent_id}`}
                          className="w-4 h-4 accent-primary-green"
                        />
                      </div>
                      <div className="flex items-center gap-2 text-[13px]">
                        Absent
                        <input
                          type="radio"
                          name={`attend-${item.parent_id}`}
                          className="w-4 h-4 accent-red-500"
                        />
                      </div>
                    </TableCell>
                    <TableCell align="left" className="flex gap-4 pl-12">
                    <AlertDialog>
                        <AlertDialogTrigger
                          className="bg-primary-green text-white py-2 px-5 rounded-md"
                          onClick={() => setSelectedCorper(item.parent_id)}
                        >
                          View
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-white w-[90%] xl:w-full rounded-xl dark:bg-darkGray dark:border dark:border-none">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="dark:text-white">
                              {item.full_name}
                            </AlertDialogTitle>
                            <fieldset className="flex flex-col gap-2">
                              <label htmlFor="" className="text-left dark:text-white">Name</label>
                              <input
                                onChange={(e) => {
                                  setCorpers((prevState) => ({
                                    ...prevState,
                                    full_name: e.target.value,
                                  }));
                                }}
                                type="text"
                                value={item.full_name}
                                disabled
                                className="border-[1px] p-2 rounded-md outline-none dark:bg-lightGray/10 text-white dark:border-none"
                              />
                            </fieldset>
                            <fieldset className="flex flex-col gap-2">
                              <label htmlFor="" className="text-left dark:text-white">State Code</label>
                              <input
                                onChange={(e) => {
                                  setCorpers((prevState) => ({
                                    ...prevState,
                                    state_code: e.target.value,
                                  }));
                                }}
                                type="text"
                                value={item.state_code}
                                disabled
                                className="border-[1px] p-2 rounded-md outline-none dark:bg-lightGray/10 text-white dark:border-none"
                              />
                            </fieldset>
                            <fieldset className="flex flex-col gap-2">
                              <label htmlFor="" className="text-left dark:text-white">PPA</label>
                              <input
                                onChange={(e) => {
                                  setCorpers((prevState) => ({
                                    ...prevState,
                                    ppa: e.target.value,
                                  }));
                                }}
                                type="text"
                                value={item.ppa}
                                disabled
                                className="border-[1px] p-2 rounded-md outline-none dark:bg-lightGray/10 text-white dark:border-none"
                              />
                            </fieldset>
                            <fieldset className="flex flex-col gap-2">
                              <label htmlFor="" className="text-left dark:text-white">State or Origin</label>
                              <input
                                onChange={(e) => {
                                  setCorpers((prevState) => ({
                                    ...prevState,
                                    state: e.target.value,
                                  }));
                                }}
                                type="text"
                                value={item.state}
                                disabled
                                className="border-[1px] p-2 rounded-md outline-none dark:bg-lightGray/10 text-white dark:border-none"
                              />
                            </fieldset>
                            <fieldset className="flex flex-col gap-2">
                              <label htmlFor="" className="text-left dark:text-white">Phone Number</label>
                              <input
                                onChange={(e) => {
                                  setCorpers((prevState) => ({
                                    ...prevState,
                                    phone_number: e.target.value,
                                  }));
                                }}
                                type="text"
                                value={item.phone_number}
                                disabled
                                className="border-[1px] p-2 rounded-md outline-none dark:bg-lightGray/10 text-white dark:border-none"
                              />
                            </fieldset>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="hover:bg-red-500 hover:text-white border-red-500 text-red-500">
                              Close
                            </AlertDialogCancel>
                            <AlertDialogAction className="text-white bg-primary-green border-[1px] hover:bg-white dark:border-none hover:text-primary-green hover:border-primary-green">
                              Edit
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

                      <AlertDialog>
                        <AlertDialogTrigger className="hover:bg-red-500 hover:text-white rounded-md py-2 px-5 border-red-500 text-red-500 dark:bg-red-300 dark:text-darkGray">
                          Delete
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-white w-[90%] xl:w-full rounded-xl dark:bg-darkGray dark:border dark:border-none">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="dark:text-white">
                              <span className="font-normal">
                                Are you sure you want to delete
                              </span>{" "}
                              {item.full_name}?
                            </AlertDialogTitle>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="hover:bg-primary-green hover:text-white border-primary-green text-primary-green">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={async () => {
                                const response = await fetch(
                                  `/api/deleteCorper/${item.parent_id}`,
                                  {
                                    method: "DELETE",
                                  }
                                );
                                const content = await response.json();
                                console.log(content);
                                if (
                                  content.message === "Something went wrong"
                                ) {
                                  return toast.error("Something went wrong");
                                } else {
                                  corperMutate();
                                  return toast.success(
                                    "Corper deleted successfully!"
                                  );
                                }
                              }}
                              className="text-white bg-red-500 border-red-500 border-[1px] hover:bg-white hover:text-red-500 hover:border-red-500"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <div className="mx-auto pb-4">
        <Button
          onClick={() => toast.success("Attendance Submitted!")}
          className="text-white bg-primary-green text-lg border-[1px] hover:bg-primary-green/60 hover:text-primary-green dark:hover:text-white dark:border-none"
        >
          Save attendance
        </Button>
      </div>
    </main>
  );
}
