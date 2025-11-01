"use client";

import { EditProfileDialog } from "@/components/settings/edit-profile-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface EditAccountButtonProps {
  userId: string;
}

export function EditAccountButton({ userId }: EditAccountButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Edit Account Details
      </Button>
      <EditProfileDialog open={open} onOpenChange={setOpen} userId={userId} />
    </>
  );
}
