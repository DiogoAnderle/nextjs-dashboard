"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { deleteInvoice } from "@/app/lib/actions";
import { LoadingOverlay } from "../loading-overlay";
import Modal from "@/app/dashboard/invoices/modal";

export function CreateInvoice() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    startTransition(() => {
      router.push("/dashboard/invoices/create");
      setIsLoading(false);
    });
  };

  return (
    <>
      <LoadingOverlay isLoading={isPending || isLoading} />
      <button
        onClick={handleClick}
        disabled={isPending || isLoading}
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-blue-400"
      >
        <span className="hidden md:block">Create Invoice</span>
        <PlusIcon className="h-5 md:ml-4" />
      </button>
    </>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    startTransition(() => {
      router.push(`/dashboard/invoices/${id}/edit`);
      setIsLoading(false);
    });
  };

  return (
    <>
      <LoadingOverlay isLoading={isPending || isLoading} />
      <button
        onClick={handleClick}
        disabled={isPending || isLoading}
        className="rounded-md border p-2 hover:bg-gray-100 disabled:opacity-50"
      >
        <PencilIcon className="w-5" />
      </button>
    </>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    setIsLoading(true);
    setIsModalOpen(false);

    await deleteInvoice(id);
  };



  return (
    <>
      <LoadingOverlay isLoading={isLoading} />

      <button
        type="button"
        onClick={() => setIsModalOpen(true)} // Abre o modal
        disabled={isLoading}
        className="rounded-md border p-2 hover:bg-gray-100 disabled:opacity-50"
        title="Delete"
      >
        <TrashIcon className="w-5" />
      </button>

      {/* Modal de confirmação */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this invoice?"
      />
    </>
  );
}
