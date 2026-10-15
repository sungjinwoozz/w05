"use client";

import { useState } from "react";
import { Check, ClockThree, Trash1 } from "@tailgrids/icons";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/tailgrids/core/native-select";
import { Toggle } from "@/components/tailgrids/core/toggle";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from "@/components/tailgrids/core/table";
import { Button } from "@/components/tailgrids/core/button";
import { Pagination } from "@/components/tailgrids/core/pagination";

export default function Todos() {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 3;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-4 px-2 max-w-3xl mx-auto">
      <div className="flex justify-between">
        {/* toggle */}
        <div className="flex items-center">
          <Toggle label="Show only " />
          &nbsp;
          <Button
            size="sm"
            className="h-8 p-2 bg-yellow-400 pointer-events-none"
          >
            Waiting
            <ClockThree />
          </Button>
        </div>

        {/* dropdown */}
        <div>
          <NativeSelect placeholder="Select an option">
            <NativeSelectOption value="option1">
              5 items per page
            </NativeSelectOption>
            <NativeSelectOption value="option2">
              10 items per page
            </NativeSelectOption>
            <NativeSelectOption value="option3">
              50 items per page
            </NativeSelectOption>
          </NativeSelect>
        </div>
      </div>

      {/* table */}
      <div>
        <TableRoot>
          <TableHeader>
            <TableRow className="bg-[#212529] text-white [&_th]:border-0 [&_th]:px-3 [&_th]:py-2">
              <TableHead scope="col">ID</TableHead>
              <TableHead scope="col">Title</TableHead>
              <TableHead scope="col">Completed</TableHead>
              <TableHead scope="col" className="w-10 text-center">
                <Button
                  size="xs"
                  iconOnly
                  aria-label="Add todo"
                  className="size-6 min-h-0 rounded p-0 text-lg"
                >
                  +
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="odd:bg-white even:bg-gray-50 [&>td]:px-3 [&>td]:py-2">
              <TableCell>12</TableCell>
              <TableCell>Lorem ipsum dolor.</TableCell>
              <TableCell>
                <Button
                  size="xs"
                  className="min-h-0 rounded bg-yellow-400 px-2 py-1 text-[11px] text-gray-900"
                >
                  Waiting <ClockThree className="size-3.5" />
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button
                  variant="danger"
                  size="xs"
                  iconOnly
                  aria-label="Delete todo"
                  className="size-7 min-h-0 rounded p-0"
                >
                  <Trash1 className="size-3.5" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="odd:bg-white even:bg-gray-50 [&>td]:px-3 [&>td]:py-2">
              <TableCell>1234</TableCell>
              <TableCell>Lorem ipsum dolor.</TableCell>
              <TableCell>
                <Button
                  variant="success"
                  size="xs"
                  className="min-h-0 rounded px-2 py-1 text-[11px]"
                >
                  Done <Check className="size-3.5" />
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button
                  variant="danger"
                  size="xs"
                  iconOnly
                  aria-label="Delete todo"
                  className="size-7 min-h-0 rounded p-0"
                >
                  <Trash1 className="size-3.5" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </TableRoot>
      </div>

      <div className="mt-2 w-2/3 mx-auto">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          sideLayout="label"
        />
      </div>
    </div>
  );
}
